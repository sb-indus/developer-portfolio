import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";

import { useRef } from "react";
import type { Group } from "three";

function CoreObject() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();

    groupRef.current.rotation.y = time * 0.2;

    groupRef.current.rotation.x =
      Math.sin(time * 0.35) * 0.12;
  });

  return (
    <group
      ref={groupRef}
      scale={0.78}
    >
      {/* OUTER WIREFRAME GLOBE */}
      <mesh>
        <icosahedronGeometry args={[2.25, 2]} />

        <meshStandardMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.22}
        />
      </mesh>

      {/* MAIN 3D TORUS KNOT */}
      <mesh rotation={[0.8, 0.3, 0.4]}>
        <torusKnotGeometry
          args={[
            1.25,
            0.24,
            150,
            18,
          ]}
        />

        <meshStandardMaterial
          color="#1555db"
          metalness={0.9}
          roughness={0.16}
          emissive="#102d7a"
          emissiveIntensity={1.6}
        />
      </mesh>

      {/* CENTER CORE */}
      <mesh>
        <icosahedronGeometry
          args={[0.65, 1]}
        />

        <meshStandardMaterial
          color="#67e8f9"
          metalness={0.65}
          roughness={0.12}
          emissive="#0891b2"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* BLUE ORBITAL RING */}
      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.8,
            0.018,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* PURPLE ORBITAL RING */}
      <mesh
        rotation={[
          1.2,
          0.5,
          0.7,
        ]}
      >
        <torusGeometry
          args={[
            3.05,
            0.015,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* THIRD SUBTLE ORBIT */}
      <mesh
        rotation={[
          0.4,
          1.1,
          0.2,
        ]}
      >
        <torusGeometry
          args={[
            2.95,
            0.01,
            16,
            160,
          ]}
        />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

const HeroScene = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 48,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        {/* GENERAL LIGHT */}
        <ambientLight intensity={0.75} />

        {/* BLUE LIGHT */}
        <pointLight
          position={[4, 4, 5]}
          intensity={18}
          color="#3b82f6"
        />

        {/* PURPLE LIGHT */}
        <pointLight
          position={[-4, -2, 4]}
          intensity={12}
          color="#8b5cf6"
        />

        {/* CYAN LIGHT */}
        <pointLight
          position={[0, -4, 2]}
          intensity={8}
          color="#22d3ee"
        />

        {/* FLOATING OBJECT */}
        <Float
          speed={1.8}
          rotationIntensity={0.35}
          floatIntensity={0.55}
        >
          <CoreObject />
        </Float>

        {/* PARTICLES */}
        <Sparkles
          count={80}
          scale={[8, 7, 5]}
          size={2}
          speed={0.3}
          opacity={0.65}
        />

        {/* MOUSE INTERACTION */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;