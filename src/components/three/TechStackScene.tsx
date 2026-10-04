import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sparkles,
} from "@react-three/drei";

import { useRef } from "react";
import type { Group } from "three";

const TechCore = () => {
  const groupRef = useRef<Group>(null);
  const innerRef = useRef<Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.12;
      groupRef.current.rotation.x =
        Math.sin(time * 0.3) * 0.08;
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = time * 0.25;
      innerRef.current.rotation.z = time * 0.18;
    }
  });

  return (
    <group ref={groupRef} scale={0.9}>
      {/* Outer Wireframe Sphere */}
      <mesh>
        <icosahedronGeometry args={[2.3, 2]} />

        <meshStandardMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Orbital Ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.9, 0.018, 20, 180]} />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.65}
        />
      </mesh>

      {/* Orbital Ring 2 */}
      <mesh rotation={[1.15, 0.4, 0.75]}>
        <torusGeometry args={[3.1, 0.014, 20, 180]} />

        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Orbital Ring 3 */}
      <mesh rotation={[0.45, 1.15, 0.2]}>
        <torusGeometry args={[2.75, 0.012, 20, 180]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner rotating structure */}
      <group ref={innerRef}>
        <mesh>
          <octahedronGeometry args={[1.15, 0]} />

          <meshStandardMaterial
            color="#2563eb"
            metalness={0.9}
            roughness={0.15}
            emissive="#172554"
            emissiveIntensity={1.7}
          />
        </mesh>

        <mesh rotation={[0.7, 0.4, 0.9]}>
          <torusKnotGeometry args={[1.4, 0.12, 120, 16]} />

          <meshStandardMaterial
            color="#8b5cf6"
            metalness={0.85}
            roughness={0.18}
            emissive="#4c1d95"
            emissiveIntensity={1.2}
          />
        </mesh>
      </group>

      {/* Center Core */}
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />

        <meshStandardMaterial
          color="#67e8f9"
          metalness={0.7}
          roughness={0.08}
          emissive="#0891b2"
          emissiveIntensity={2.4}
        />
      </mesh>

      {/* Floating Nodes */}
      <mesh position={[2.8, 0.4, 0]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshBasicMaterial color="#60a5fa" />
      </mesh>

      <mesh position={[-2.2, 1.8, 0.5]}>
        <sphereGeometry args={[0.07, 18, 18]} />
        <meshBasicMaterial color="#c084fc" />
      </mesh>

      <mesh position={[0.7, -2.7, 0.7]}>
        <sphereGeometry args={[0.07, 18, 18]} />
        <meshBasicMaterial color="#22d3ee" />
      </mesh>
    </group>
  );
};

const TechStackScene = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 9],
          fov: 48,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
        }}
      >
        <ambientLight intensity={0.7} />

        <pointLight
          position={[4, 4, 5]}
          intensity={16}
          color="#3b82f6"
        />

        <pointLight
          position={[-4, -1, 4]}
          intensity={12}
          color="#8b5cf6"
        />

        <pointLight
          position={[0, -4, 3]}
          intensity={8}
          color="#22d3ee"
        />

        <Float
          speed={1.6}
          rotationIntensity={0.3}
          floatIntensity={0.5}
        >
          <TechCore />
        </Float>

        <Sparkles
          count={60}
          scale={[8, 7, 5]}
          size={2}
          speed={0.25}
          opacity={0.6}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
};

export default TechStackScene;