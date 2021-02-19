import {
  Center,
  OrbitControls,
  softShadows,
  OrthographicCamera,
} from "@react-three/drei";
import { Suspense, memo, useContext } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { Flex, Box } from "@react-three/flex";
import ScrollContext from "../context/scrollContext";

import Fox from "./Fox";
import MyImg from "./MyImg";
import Chair from "./Chair";

const Scene = ({ page }) => {
  const { size, viewport, aspect } = useThree();
  const viewSize = viewport.width;
  return (
    <>
      <OrthographicCamera
        makeDefault
        left={(-aspect * viewSize) / 2}
        right={(aspect * viewSize) / 2}
        top={viewSize / 2}
        bottom={-viewSize / 2}
        near={-1000}
        far={1000}
        zoom={1}
      />
      <Suspense fallback={null}>
        <Fox page={page} />
      </Suspense>
      <Suspense fallback={null}>
        <MyImg page={page} />
      </Suspense>
    </>
  );
};

const World = () => {
  const context = useContext(ScrollContext);
  return (
    <Canvas
      colorManagement
      shadowMap
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        bottom: "0",
        right: "0",
        zIndex: 2,
      }}
    >
      <ambientLight color="white" intensity={0.5} />
      {/* <directionalLight intensity={0.1} position={[0, -50, 0]} /> */}
      {/* <OrbitControls /> */}
      {/* <ambientLight color="white" intensity={0.7} />
      <spotLight intensity={0.2} position={[70, 70, 70]} /> */}
      <Scene page={context} />
    </Canvas>
  );
};

export default memo(World);
