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

function addAnimationTracks(gltf, binData, animName, targetNode, timesArr, transArr, rotsArr) {
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

  const channels = [];
  const samplers = [];

  if (transArr) {
    const trans = new Float32Array(transArr);
    const transBuf = Buffer.from(trans.buffer, trans.byteOffset, trans.byteLength);
    const transOffset = currentBin.length;
    currentBin = Buffer.concat([currentBin, transBuf]);

    const transBvIdx = gltf.bufferViews.length;
    gltf.bufferViews.push({
      buffer: 0,
      byteOffset: transOffset,
      byteLength: transBuf.length
    });

    const transAccIdx = gltf.accessors.length;
    gltf.accessors.push({
      bufferView: transBvIdx,
      byteOffset: 0,
      componentType: 5126,
      count: timesArr.length,
      type: "VEC3"
    });

    const samplerIdx = samplers.length;
    samplers.push({
      input: timeAccIdx,
      output: transAccIdx,
      interpolation: "LINEAR"
    });
    channels.push({
      sampler: samplerIdx,
      target: { node: targetNode, path: "translation" }
    });
  }

  if (rotsArr) {
    const rots = new Float32Array(rotsArr);
    const rotsBuf = Buffer.from(rots.buffer, rots.byteOffset, rots.byteLength);
    const rotsOffset = currentBin.length;
    currentBin = Buffer.concat([currentBin, rotsBuf]);

    const rotsBvIdx = gltf.bufferViews.length;
    gltf.bufferViews.push({
      buffer: 0,
      byteOffset: rotsOffset,
      byteLength: rotsBuf.length
    });

    const rotsAccIdx = gltf.accessors.length;
    gltf.accessors.push({
      bufferView: rotsBvIdx,
      byteOffset: 0,
      componentType: 5126,
      count: timesArr.length,
      type: "VEC4"
    });

    const samplerIdx = samplers.length;
    samplers.push({
      input: timeAccIdx,
      output: rotsAccIdx,
      interpolation: "LINEAR"
    });
    channels.push({
      sampler: samplerIdx,
      target: { node: targetNode, path: "rotation" }
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

// 1. Duck animations
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/duck.glb"));
  let bin = binData;

  // Waddle (Bơi lội / lắc lư)
  const times1 = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6];
  const trans1 = [
    0, 0, 0,
    0, 6, 0,
    0, 12, 0,
    0, 6, 0,
    0, 0, 0,
    0, 6, 0,
    0, 12, 0,
    0, 6, 0,
    0, 0, 0
  ];
  const rots1 = [];
  const angles1 = [0, 0.04, 0.08, 0.04, 0, -0.04, -0.08, -0.04, 0];
  for (const a of angles1) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, a * 0.8, a, "YXZ"));
    rots1.push(q.x, q.y, q.z, q.w);
  }
  bin = addAnimationTracks(gltf, bin, "Waddle", 2, times1, trans1, rots1);

  // Dance (Nhảy múa quác quác)
  const times2 = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2];
  const trans2 = [
    0, 0, 0,
    0, 15, 0,
    0, 30, 0,
    0, 15, 0,
    0, 30, 0,
    0, 15, 0,
    0, 0, 0
  ];
  const rots2 = [];
  const angles2 = [0, 0.15, -0.15, 0.15, -0.15, 0.08, 0];
  for (const a of angles2) {
    const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.abs(a) * 0.5, a * 1.5, a, "YXZ"));
    rots2.push(q.x, q.y, q.z, q.w);
  }
  bin = addAnimationTracks(gltf, bin, "Dance", 2, times2, trans2, rots2);

  const out = writeGlb(gltf, bin);
  fs.writeFileSync("models/duck.glb", out);
  console.log("✅ models/duck.glb updated with Waddle & Dance!");
}

// 2. Fish animations
{
  const { gltf, binData } = parseGlb(fs.readFileSync("models/fish.glb"));
  let bin = binData;
  const qBase = new THREE.Quaternion(0, 1, 0, 0);

  // Swim (Bơi lội vẫy đuôi)
  const times1 = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6];
  const trans1 = [];
  const rots1 = [];
  for (let i = 0; i < times1.length; i++) {
    const t = times1[i];
    const phase = (t / 1.6) * Math.PI * 2;
    const x = Math.sin(phase) * 0.04;
    const y = Math.cos(phase * 2) * 0.015;
    trans1.push(x, y, 0);

    const yaw = Math.sin(phase) * 0.22;
    const roll = Math.sin(phase) * 0.07;
    const qDelta = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, yaw, roll, "YXZ"));
    const q = qBase.clone().multiply(qDelta);
    rots1.push(q.x, q.y, q.z, q.w);
  }
  bin = addAnimationTracks(gltf, bin, "Swim", 0, times1, trans1, rots1);

  // Jump (Quẫy nước phóng lên)
  const times2 = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4];
  const trans2 = [];
  const rots2 = [];
  for (let i = 0; i < times2.length; i++) {
    const t = times2[i];
    const p = t / 1.4;
    const y = Math.sin(p * Math.PI) * 0.2;
    const z = (p - 0.5) * 0.1;
    trans2.push(0, y, z);

    const pitch = -Math.cos(p * Math.PI) * 0.35;
    const roll = Math.sin(p * Math.PI * 2) * 0.15;
    const qDelta = new THREE.Quaternion().setFromEuler(new THREE.Euler(pitch, 0, roll, "XYZ"));
    const q = qBase.clone().multiply(qDelta);
    rots2.push(q.x, q.y, q.z, q.w);
  }
  bin = addAnimationTracks(gltf, bin, "Jump", 0, times2, trans2, rots2);

  const out = writeGlb(gltf, bin);
  fs.writeFileSync("models/fish.glb", out);
  console.log("✅ models/fish.glb updated with Swim & Jump!");
}
