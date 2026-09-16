globalThis.self = globalThis;
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import fs from "fs";

function parseGlb(buf) {
  const magic = buf.readUInt32LE(0);
  const version = buf.readUInt32LE(4);
  const totalLen = buf.readUInt32LE(8);
  const jsonLen = buf.readUInt32LE(12);
  const jsonStr = buf.toString("utf8", 20, 20 + jsonLen);
  const gltf = JSON.parse(jsonStr);
  const binHeaderOffset = 20 + jsonLen;
  let binData = Buffer.alloc(0);
  if (binHeaderOffset < totalLen) {
    const binLen = buf.readUInt32LE(binHeaderOffset);
    binData = buf.subarray(binHeaderOffset + 8, binHeaderOffset + 8 + binLen);
  }
  return { gltf, binData };
}

function writeGlb(gltf, binData) {
  gltf.buffers = [{ byteLength: binData.length }];
  let jsonBuf = Buffer.from(JSON.stringify(gltf), "utf8");
  const jsonPadding = (4 - (jsonBuf.length % 4)) % 4;
  if (jsonPadding > 0) jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc(jsonPadding, 0x20)]);

  const binPadding = (4 - (binData.length % 4)) % 4;
  let finalBin = binData;
  if (binPadding > 0) finalBin = Buffer.concat([binData, Buffer.alloc(binPadding, 0x00)]);

  const totalLen = 12 + 8 + jsonBuf.length + 8 + finalBin.length;
  const header = Buffer.alloc(12);
  header.writeUInt32LE(0x46546C67, 0);
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(totalLen, 8);

  const jsonHeader = Buffer.alloc(8);
  jsonHeader.writeUInt32LE(jsonBuf.length, 0);
  jsonHeader.writeUInt32LE(0x4E4F534A, 4);

  const binHeader = Buffer.alloc(8);
  binHeader.writeUInt32LE(finalBin.length, 0);
  binHeader.writeUInt32LE(0x004E4942, 4);

  return Buffer.concat([header, jsonHeader, jsonBuf, binHeader, finalBin]);
}

function addAnimationToGlb(gltf, binData, animName, timesArr, channelDefs) {
  const times = new Float32Array(timesArr);
  const timeBuf = Buffer.from(times.buffer, times.byteOffset, times.byteLength);

  let currentBin = binData;
  const timeOffset = currentBin.length;
  currentBin = Buffer.concat([currentBin, timeBuf]);

  const timeBvIdx = gltf.bufferViews.length;
  gltf.bufferViews.push({
    buffer: 0,
    byteOffset: timeOffset,
    byteLength: timeBuf.length
  });

  const timeAccIdx = gltf.accessors.length;
  gltf.accessors.push({
    bufferView: timeBvIdx,
    byteOffset: 0,
    componentType: 5126,
    count: timesArr.length,
    type: "SCALAR",
    min: [timesArr[0]],
    max: [timesArr[timesArr.length - 1]]
  });

  const samplers = [];
  const channels = [];

  for (const c of channelDefs) {
    const dataArr = new Float32Array(c.data);
    const dataBuf = Buffer.from(dataArr.buffer, dataArr.byteOffset, dataArr.byteLength);
    const dataOffset = currentBin.length;
    currentBin = Buffer.concat([currentBin, dataBuf]);

    const dataBvIdx = gltf.bufferViews.length;
    gltf.bufferViews.push({
      buffer: 0,
      byteOffset: dataOffset,
      byteLength: dataBuf.length
    });

    const typeStr = c.path === "rotation" ? "VEC4" : (c.path === "translation" || c.path === "scale" ? "VEC3" : "SCALAR");
    const dataAccIdx = gltf.accessors.length;
    gltf.accessors.push({
      bufferView: dataBvIdx,
      byteOffset: 0,
      componentType: 5126,
      count: timesArr.length,
      type: typeStr
    });

    const samplerIdx = samplers.length;
    samplers.push({
      input: timeAccIdx,
      output: dataAccIdx,
      interpolation: c.interpolation || "LINEAR"
    });

    channels.push({
      sampler: samplerIdx,
      target: { node: c.node, path: c.path }
    });
  }

  if (!gltf.animations) gltf.animations = [];
  gltf.animations.push({
    name: animName,
    samplers,
    channels
  });

  return currentBin;
}

// 1. MILK TRUCK (Exploded_Truck)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/milk_truck.glb"));
  // Remove duplicate if already present
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Exploded_Truck");

  const times = [0.0, 0.5, 1.0, 1.5, 2.0];
  const channels = [
    // Node 1: Front Wheels
    {
      node: 1,
      path: "translation",
      data: [
        1.43267, 0, -0.42772,
        2.1, 0.45, -0.85,
        2.3, 0.5, -0.9,
        2.1, 0.45, -0.85,
        1.43267, 0, -0.42772
      ]
    },
    // Node 3: Rear Wheels
    {
      node: 3,
      path: "translation",
      data: [
        -1.35233, 0, -0.42772,
        -2.0, 0.45, -0.85,
        -2.2, 0.5, -0.9,
        -2.0, 0.45, -0.85,
        -1.35233, 0, -0.42772
      ]
    },
    // Node 4: Milk Tank / Cabin Body
    {
      node: 4,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0, 0.65,
        0, 0, 0.85,
        0, 0, 0.65,
        0, 0, 0
      ]
    },
    {
      node: 4,
      path: "rotation",
      data: [
        0, 0, 0, 1,
        0, 0, 0.12, 0.99,
        0, 0, 0.18, 0.98,
        0, 0, 0.12, 0.99,
        0, 0, 0, 1
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Exploded_Truck", times, channels);
  fs.writeFileSync("models/milk_truck.glb", writeGlb(gltf, newBin));
  console.log("OK models/milk_truck.glb: added Exploded_Truck!");
}

// 2. TOY CAR (Exploded_Car)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/toy_car.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Exploded_Car");

  const times = [0.0, 0.5, 1.0, 1.5, 2.0];
  const channels = [
    // Node 2: Glass canopy lifts high & tilts back
    {
      node: 2,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0.016, -0.003,
        0, 0.024, -0.005,
        0, 0.016, -0.003,
        0, 0, 0
      ]
    },
    {
      node: 2,
      path: "rotation",
      data: [
        0, 0, 0, 1,
        0.08, 0, 0, 0.99,
        0.12, 0, 0, 0.99,
        0.08, 0, 0, 0.99,
        0, 0, 0, 1
      ]
    },
    // Node 1: Fabric / Leather Seats lift & hover forward
    {
      node: 1,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0.008, 0.006,
        0, 0.013, 0.009,
        0, 0.008, 0.006,
        0, 0, 0
      ]
    },
    // Node 0: ToyCar Body/Chassis lowers
    {
      node: 0,
      path: "translation",
      data: [
        0, 0, 0,
        0, -0.003, 0,
        0, -0.005, 0,
        0, -0.003, 0,
        0, 0, 0
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Exploded_Car", times, channels);
  fs.writeFileSync("models/toy_car.glb", writeGlb(gltf, newBin));
  console.log("OK models/toy_car.glb: added Exploded_Car!");
}

// 3. ROBOT (Disassemble_Robot)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/robot.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Disassemble_Robot");

  const times = [0.0, 0.5, 1.1, 1.6, 2.2];
  const channels = [
    // Node 13: Head lifts high up & rotates
    {
      node: 13,
      path: "translation",
      data: [
        -0.00000895, 0.006476, 0.0003639,
        -0.00000895, 0.85, 0.0003639,
        -0.00000895, 1.25, 0.0003639,
        -0.00000895, 0.85, 0.0003639,
        -0.00000895, 0.006476, 0.0003639
      ]
    },
    // Node 16: Shoulder.L
    {
      node: 16,
      path: "translation",
      data: [
        -0.0000038, -0.0000098, -0.0000415,
        0.55, -0.0000098, -0.0000415,
        0.85, -0.0000098, -0.0000415,
        0.55, -0.0000098, -0.0000415,
        -0.0000038, -0.0000098, -0.0000415
      ]
    },
    // Node 18: Arm.L
    {
      node: 18,
      path: "translation",
      data: [
        0, 0, 0,
        0.85, 0, 0,
        1.35, 0, 0,
        0.85, 0, 0,
        0, 0, 0
      ]
    },
    // Node 36: Shoulder.R
    {
      node: 36,
      path: "translation",
      data: [
        0.0000035, -0.0000033, -0.0000415,
        -0.55, -0.0000033, -0.0000415,
        -0.85, -0.0000033, -0.0000415,
        -0.55, -0.0000033, -0.0000415,
        0.0000035, -0.0000033, -0.0000415
      ]
    },
    // Node 38: Arm.R
    {
      node: 38,
      path: "translation",
      data: [
        0, 0, 0,
        -0.85, 0, 0,
        -1.35, 0, 0,
        -0.85, 0, 0,
        0, 0, 0
      ]
    },
    // Node 7: Torso lifts & tilts forward
    {
      node: 7,
      path: "translation",
      data: [
        -0.000047, 0.008012, -0.001322,
        -0.000047, 0.22, 0.35,
        -0.000047, 0.32, 0.50,
        -0.000047, 0.22, 0.35,
        -0.000047, 0.008012, -0.001322
      ]
    },
    // Node 56: Leg.L
    {
      node: 56,
      path: "translation",
      data: [
        0, 0, 0,
        0.4, -0.55, 0,
        0.65, -0.85, 0,
        0.4, -0.55, 0,
        0, 0, 0
      ]
    },
    // Node 61: Leg.R
    {
      node: 61,
      path: "translation",
      data: [
        0, 0, 0,
        -0.4, -0.55, 0,
        -0.65, -0.85, 0,
        -0.4, -0.55, 0,
        0, 0, 0
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Disassemble_Robot", times, channels);
  fs.writeFileSync("models/robot.glb", writeGlb(gltf, newBin));
  console.log("OK models/robot.glb: added Disassemble_Robot!");
}

// 4. ASTRONAUT (ZeroGravity_Float)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/astronaut.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "ZeroGravity_Float");

  const times = [0.0, 0.5, 1.0, 1.5, 2.0];
  const channels = [
    {
      node: 0,
      path: "translation",
      data: [
        0, 0, 0,
        0.04, 0.18, 0.04,
        0.08, 0.32, -0.02,
        -0.04, 0.18, 0.03,
        0, 0, 0
      ]
    },
    {
      node: 0,
      path: "rotation",
      data: [
        0, 0, 0, 1,
        0.05, 0.12, 0.03, 0.99,
        0, 0.24, 0.06, 0.96,
        -0.05, 0.12, -0.03, 0.99,
        0, 0, 0, 1
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "ZeroGravity_Float", times, channels);
  fs.writeFileSync("models/astronaut.glb", writeGlb(gltf, newBin));
  console.log("OK models/astronaut.glb: added ZeroGravity_Float!");
}

// 5. BOOMBOX (Bass_Beat_Pulse)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/boombox.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Bass_Beat_Pulse");

  const times = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6];
  const channels = [
    {
      node: 0,
      path: "scale",
      data: [
        1, 1, 1,
        1.14, 1.14, 1.14,
        1, 1, 1,
        1.18, 1.18, 1.18,
        1, 1, 1,
        1.14, 1.14, 1.14,
        1, 1, 1,
        1.22, 1.22, 1.22,
        1, 1, 1
      ]
    },
    {
      node: 0,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0.08, 0,
        0, 0, 0,
        0, 0.12, 0,
        0, 0, 0,
        0, 0.08, 0,
        0, 0, 0,
        0, 0.14, 0,
        0, 0, 0
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Bass_Beat_Pulse", times, channels);
  fs.writeFileSync("models/boombox.glb", writeGlb(gltf, newBin));
  console.log("OK models/boombox.glb: added Bass_Beat_Pulse!");
}

// 6. BALL (Bounce_Spin)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/ball.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Bounce_Spin");

  const times = [0.0, 0.35, 0.7, 1.05, 1.4];
  const channels = [
    {
      node: 0,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0.28, 0,
        0, 0, 0,
        0, 0.34, 0,
        0, 0, 0
      ]
    },
    {
      node: 0,
      path: "rotation",
      data: [
        0, 0, 0, 1,
        0.38, 0.25, 0, 0.89,
        0.707, 0.5, 0, 0.5,
        0.92, 0.25, 0, 0.28,
        0, 0, 0, 1
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Bounce_Spin", times, channels);
  fs.writeFileSync("models/ball.glb", writeGlb(gltf, newBin));
  console.log("OK models/ball.glb: added Bounce_Spin!");
}

// 7. STAR (Magic_Shine_Pulse)
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/star.glb"));
  gltf.animations = (gltf.animations || []).filter(a => a.name !== "Magic_Shine_Pulse");

  const times = [0.0, 0.4, 0.8, 1.2, 1.6];
  const channels = [
    {
      node: 0,
      path: "scale",
      data: [
        1, 1, 1,
        1.3, 1.3, 1.3,
        1, 1, 1,
        1.38, 1.38, 1.38,
        1, 1, 1
      ]
    },
    {
      node: 0,
      path: "rotation",
      data: [
        0, 0, 0, 1,
        0, 0.38, 0, 0.92,
        0, 0.707, 0, 0.707,
        0, 0.92, 0, 0.38,
        0, 0, 0, 1
      ]
    },
    {
      node: 0,
      path: "translation",
      data: [
        0, 0, 0,
        0, 0.1, 0,
        0, 0, 0,
        0, 0.14, 0,
        0, 0, 0
      ]
    }
  ];

  const newBin = addAnimationToGlb(gltf, binData, "Magic_Shine_Pulse", times, channels);
  fs.writeFileSync("models/star.glb", writeGlb(gltf, newBin));
  console.log("OK models/star.glb: added Magic_Shine_Pulse!");
}
