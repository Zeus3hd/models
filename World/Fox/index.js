import { useFrame, useThree } from "react-three-fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

useGLTF.preload("/models/Fox.gltf");
const Fox = ({ page }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Fox.gltf");
  const { actions } = useAnimations(animations, group);
  const { size, viewport, aspect } = useThree();
  useEffect(() => {
    actions.Survey.play();
  }, []);

  return (
    <mesh
      scale={[size.width * 0.002, size.width * 0.002, size.width * 0.002]}
      rotation={[0, -Math.PI / 5, 0]}
      position={[viewport.width * 0.2, -(size.height / 2) * 0.2, 0]}
    >
      <group ref={group} dispose={null}>
        <primitive object={nodes._rootJoint} />

        <skinnedMesh
          material-color="grey"
          material={materials.fox_material}
          geometry={nodes.fox.geometry}
          skeleton={nodes.fox.skeleton}
        ></skinnedMesh>
      </group>
    </mesh>
  );
};
export default Fox;