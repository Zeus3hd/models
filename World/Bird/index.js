import React, { useRef } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";
useGLTF.preload("/models/birdmodel/scene.gltf");

export default function Bird(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/birdmodel/scene.gltf");
  const { size, viewport, aspect } = useThree();

  useFrame(() => {});

  return (
    <group
      ref={group}
      scale={[size.width * 0.02, size.width * 0.02, size.width * 0.02]}
      position={[-viewport.width * 0.3 + aspect, viewport.height * 0.07, 0]}
      rotation={[5, 0, 0]}
    >
      <group
        position={[1.69, -1.87, 1.81]}
        rotation={[1.98, 0.54, 0.38]}
        scale={[1.48, 2.17, 2.17]}
      >
        <mesh material={materials.Fluff_2} geometry={nodes.Fluff2_0.geometry} />
      </group>
      <group
        position={[2.46, 1.05, 3.81]}
        rotation={[0.07, 0.25, 2.02]}
        scale={[1.99, 1.82, 1.46]}
      >
        <mesh material={materials.tail} geometry={nodes.Tail_0.geometry} />
      </group>
      <group
        position={[1.77, -0.8, 5.46]}
        rotation={[0.2, 0.05, 1.85]}
        scale={[3.53, 3.53, 3.53]}
      >
        <mesh material={materials.Fluff} geometry={nodes.Fluff_0.geometry} />
      </group>
      <group position={[-0.03, -0.25, 3.27]} scale={[1.67, 1.67, 1.67]}>
        <mesh material={materials.Body} geometry={nodes.Body_0.geometry} />
      </group>
      <group position={[-0.03, -1.77, 5.75]} scale={[0.35, 0.35, 0.35]}>
        <mesh material={materials.Body} geometry={nodes.Beak_0.geometry} />
      </group>
      <group position={[-0.03, -0.25, -1.32]} scale={[2.45, 2.45, 2.45]}>
        <mesh material={materials.Body} geometry={nodes.Eyes_0.geometry} />
      </group>
      <group position={[-0.03, -0.25, -1.32]} scale={[0.18, 0.18, 0.18]}>
        <mesh material={materials.Body} geometry={nodes.Legs_0.geometry} />
      </group>
      <group
        position={[-0.03, 0.79, 4.54]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[5.07, 5.07, 5.07]}
      >
        <mesh
          material={materials.Splatter}
          geometry={nodes.Splatter_Plane_0.geometry}
        />
      </group>
    </group>
  );
}
