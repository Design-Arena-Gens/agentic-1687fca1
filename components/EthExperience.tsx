// @ts-nocheck

"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Float,
  Html,
  MeshDistortMaterial,
  OrbitControls,
  Sparkles
} from "@react-three/drei";
import * as THREE from "three";

function CrystalCore() {
  const gradient = useMemo(() => {
    const texture = new THREE.CanvasTexture(document.createElement("canvas"));
    const size = 512;
    const canvas = texture.image as HTMLCanvasElement;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const grd = ctx.createLinearGradient(0, 0, size, size);
      grd.addColorStop(0, "#5ce1ff");
      grd.addColorStop(0.45, "#a17bff");
      grd.addColorStop(1, "#facc15");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, size, size);
    }

    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <mesh>
      <octahedronGeometry args={[1.2, 2]} />
      <meshStandardMaterial
        map={gradient}
        metalness={0.6}
        roughness={0.1}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

function EthBeacon() {
  return (
    <Float speed={1.6} rotationIntensity={1.5} floatIntensity={1.6}>
      <group>
        <CrystalCore />
        <mesh scale={[1.6, 1.6, 1.6]}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
        </mesh>
        <mesh scale={[1.9, 1.9, 1.9]}>
          <octahedronGeometry args={[1, 0]} />
          <meshBasicMaterial color="#5ce1ff" wireframe transparent opacity={0.12} />
        </mesh>
        <Sparkles size={3} count={180} speed={0.6} opacity={0.4} scale={[8, 12, 8]} />
      </group>
    </Float>
  );
}

function EnergyRing({
  radius,
  color,
  offset
}: {
  radius: number;
  color: string;
  offset: number;
}) {
  return (
    <mesh rotation-x={Math.PI / 2} position-y={offset}>
      <torusGeometry args={[radius, 0.02, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

function EtherPulse() {
  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.4}>
      <mesh>
        <sphereGeometry args={[1.3, 64, 64]} />
        <MeshDistortMaterial
          speed={1.2}
          distort={0.35}
          radius={1}
          transparent
          opacity={0.16}
          color="#5ce1ff"
        />
      </mesh>
    </Float>
  );
}

export default function EthExperience() {
  return (
    <div className="canvas-shell">
      <Canvas
        camera={{ position: [0, 0.8, 5.2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={["#01040f"]} />
        <fog attach="fog" args={["#01040f", 12, 28]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 6, 3]} intensity={1.2} color="#b3a1ff" />
        <pointLight position={[-6, 4, -2]} intensity={0.9} color="#5ce1ff" />
        <Suspense
          fallback={
            <Html>
              <div className="loading">Loading the Ethereum continuum...</div>
            </Html>
          }
        >
          <group position={[0, -0.4, 0]}>
            <EthBeacon />
            <EtherPulse />
            <EnergyRing radius={1.6} color="#5ce1ff" offset={-0.6} />
            <EnergyRing radius={2.2} color="#8257ff" offset={-1} />
            <EnergyRing radius={2.9} color="#facc15" offset={-1.4} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>
    </div>
  );
}
