/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: HenryBoadle (https://sketchfab.com/HenryBoadle)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ghost-stag-2ce5ec0844114576a247b1de2011e0c7
title: Ghost Stag
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/useGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -15.4]} scale={[1.28, 1.28, 1.28]}>
            <mesh material={materials.GhostStag} geometry={nodes.GhostStag_01_GhostStag_0.geometry} />
          </group>
          <group position={[0, 2.21, 0]}>
            <mesh material={materials.Island} geometry={nodes.Island_01_Island_0.geometry} />
          </group>
          <group position={[355.16, -41.73, -339.04]} rotation={[0.01, -0.13, -0.04]}>
            <mesh material={materials.material} geometry={nodes.Log_01_Log_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_02_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_03_Rocks_0.geometry} />
          </group>
          <group position={[0, -6.27, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_04_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_05_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_06_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_07_Rocks_0.geometry} />
          </group>
          <group position={[0, 9.14, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_08_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_09_Rocks_0.geometry} />
          </group>
          <group position={[0, -6.92, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_010_Rocks_0.geometry} />
          </group>
          <group position={[0, -4.94, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_011_Rocks_0.geometry} />
          </group>
          <group position={[0, -5.81, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_012_Rocks_0.geometry} />
          </group>
          <group position={[0, -6.95, 0]}>
            <mesh material={materials.Rocks} geometry={nodes.LongRock_013_Rocks_0.geometry} />
          </group>
          <group position={[489.92, -37.99, 135.01]} rotation={[0.08, -0.01, -0.12]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_02_Rocks_0.geometry} />
          </group>
          <group position={[-126.79, -26.87, 434.9]} rotation={[-0.59, -1.37, -0.67]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_03_Rocks_0.geometry} />
          </group>
          <group position={[-645.74, -60.75, 62.1]} rotation={[1.43, -0.98, 1.29]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_04_Rocks_0.geometry} />
          </group>
          <group position={[655.46, -64.15, -170.63]} rotation={[-0.24, -0.09, -0.37]}>
            <mesh material={materials.Rocks} geometry={nodes.MediumRock_02_Rocks_0.geometry} />
          </group>
          <group position={[298.4, -12.68, -244.96]} rotation={[0.4, -0.51, -0.31]} scale={[0.68, 0.68, 0.68]}>
            <mesh material={materials.Rocks} geometry={nodes.MediumRock_03_Rocks_0.geometry} />
          </group>
          <group position={[-579.31, -63.52, -89.55]} rotation={[-0.17, 0.74, 0.28]} scale={[0.56, 0.56, 0.56]}>
            <mesh material={materials.Rocks} geometry={nodes.LargeRock_02_Rocks_0.geometry} />
          </group>
          <group position={[-315.94, -63.61, -395.89]} rotation={[-0.05, -0.46, 0.11]}>
            <mesh material={materials.Rocks} geometry={nodes.MediumRock_04_Rocks_0.geometry} />
          </group>
          <group position={[-746.97, 15.44, -424.59]} rotation={[-0.67, -0.65, -0.6]} scale={[0.76, 0.76, 0.76]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_05_Rocks_0.geometry} />
          </group>
          <group position={[-730.78, 268.55, -483.34]} rotation={[-0.67, -0.65, -0.6]} scale={[0.76, 0.76, 0.76]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_06_Rocks_0.geometry} />
          </group>
          <group position={[601.08, 147.4, -545.06]} scale={[0.23, 0.23, 0.23]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_07_Rocks_0.geometry} />
          </group>
          <group position={[540.07, -16.26, -545.06]} scale={[0.23, 0.23, 0.23]}>
            <mesh material={materials.Rocks} geometry={nodes.SmallRock_08_Rocks_0.geometry} />
          </group>
          <group position={[598.36, -30.37, 147.46]} rotation={[2.82, -0.95, 2.92]} scale={[0.84, 0.84, 0.84]}>
            <mesh material={materials.Plants} geometry={nodes.GrassBrownGround_02_Plants_0.geometry} />
          </group>
          <group position={[-478.39, -27.63, 196.22]} rotation={[2.69, 0.94, -2.82]} scale={[0.7, 0.7, 0.7]}>
            <mesh material={materials.Plants} geometry={nodes.GrassBrownGround_03_Plants_0.geometry} />
          </group>
          <group position={[526.88, -29.58, 40.16]} rotation={[0.14, 0.24, -0.11]}>
            <mesh material={materials.Plants} geometry={nodes.GrassSmall_02_Plants_0.geometry} />
          </group>
          <group position={[381.48, -25.7, -203.2]} rotation={[0.14, 0.24, -0.11]} scale={[0.82, 0.82, 0.86]}>
            <mesh material={materials.Plants} geometry={nodes.GrassSmall_03_Plants_0.geometry} />
          </group>
          <group position={[-329.88, -22.7, 53.21]} rotation={[0.08, 0.23, 0.06]}>
            <mesh material={materials.Plants} geometry={nodes.GrassSmall_04_Plants_0.geometry} />
          </group>
          <group position={[-226.3, -21.01, 360.25]} rotation={[0.11, -0.33, 0.06]} scale={[0.86, 0.86, 0.86]}>
            <mesh material={materials.Plants} geometry={nodes.GrassSmall_05_Plants_0.geometry} />
          </group>
          <group position={[66.38, -20.3, 449.27]} rotation={[2.96, -0.16, -3.13]}>
            <mesh material={materials.Plants} geometry={nodes.GrassBrownGround_04_Plants_0.geometry} />
          </group>
          <group position={[-435.14, -32.52, -191.53]} rotation={[-0.02, 0.35, 0.12]}>
            <mesh material={materials.Plants} geometry={nodes.GrassTall_02_Plants_0.geometry} />
          </group>
          <group position={[203.71, -17.16, -199.06]} rotation={[0.06, -0.31, 0]}>
            <mesh material={materials.Plants} geometry={nodes.GrassTall_03_Plants_0.geometry} />
          </group>
          <group position={[-234.04, -19.91, -189.5]} rotation={[-0.04, 0.22, 0.09]} scale={[0.67, 0.67, 0.67]}>
            <mesh material={materials.Plants} geometry={nodes.GrassSmall_06_Plants_0.geometry} />
          </group>
          <group position={[323.76, -8.77, -73.68]} rotation={[2.76, 0.61, -2.9]} scale={[0.66, 0.66, 0.66]}>
            <mesh material={materials.Plants} geometry={nodes.GrassBrownGround_05_Plants_0.geometry} />
          </group>
          <group position={[650, 0, 350]}>
            <group position={[-374.58, -57.93, 204.06]} rotation={[1.53, 0.01, -0.38]} scale={[0.86, 0.86, 0.86]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_02_Plants_0.geometry} />
            </group>
            <group position={[-660.03, -56.16, 253.46]} rotation={[1.58, -0.02, 0.08]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_03_Plants_0.geometry} />
            </group>
            <group position={[-918.72, -51.25, 186.67]} rotation={[1.58, -0.02, 0.4]} scale={[0.7, 0.7, 0.7]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_04_Plants_0.geometry} />
            </group>
            <group position={[-1229.03, -115.68, -49.24]} rotation={[1.56, 0.01, 0.75]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_05_Plants_0.geometry} />
            </group>
            <group position={[-40.52, -193, 34.82]} rotation={[1.53, 0.01, -0.81]} scale={[0.86, 0.86, 0.86]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_06_Plants_0.geometry} />
            </group>
            <group position={[-1429.8, -120.1, -368.3]} rotation={[1.56, 0.01, 1.58]} scale={[0.51, 0.8, 0.8]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_07_Plants_0.geometry} />
            </group>
            <group position={[-1235.32, -70.73, -686.98]} rotation={[1.58, 0.05, 2.49]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_08_Plants_0.geometry} />
            </group>
            <group position={[-868.87, -79.28, -920.38]} rotation={[1.58, 0.05, 2.72]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_09_Plants_0.geometry} />
            </group>
            <group position={[-585.11, -253.33, -897.04]} rotation={[1.58, 0.05, -3.09]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_010_Plants_0.geometry} />
            </group>
            <group position={[-231.88, -83.24, -869.52]} rotation={[1.52, 0.02, -2.77]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_011_Plants_0.geometry} />
            </group>
            <group position={[111.66, -221.28, -213.97]} rotation={[1.53, 0.01, -1.21]} scale={[0.61, 0.86, 0.86]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_012_Plants_0.geometry} />
            </group>
            <group position={[-6.84, -191.47, -774.55]} rotation={[1.52, 0.02, -2.52]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_013_Plants_0.geometry} />
            </group>
            <group position={[192.21, -184.3, -608]} rotation={[1.52, 0.02, -2.52]}>
              <mesh material={materials.Plants} geometry={nodes.HangingVines_014_Plants_0.geometry} />
            </group>
            <group position={[401.52, -531.28, -76.86]} rotation={[1.54, 0, -0.4]}>
              <mesh material={materials.Plants} geometry={nodes.VineGreen_02_Plants_0.geometry} />
            </group>
            <group position={[-38.27, -437.09, 196.66]} rotation={[1.54, 0, -0.16]} scale={[0.72, 0.72, 0.72]}>
              <mesh material={materials.Plants} geometry={nodes.VineGreen_03_Plants_0.geometry} />
            </group>
            <group position={[-336.96, -313.32, 343.93]} rotation={[1.54, 0, 0.22]} scale={[0.74, 0.74, 0.74]}>
              <mesh material={materials.Plants} geometry={nodes.VineGreen_04_Plants_0.geometry} />
            </group>
            <group position={[-668.35, -360.83, 371.51]} rotation={[1.62, 0.05, 0.6]} scale={[0.71, 0.71, 0.71]}>
              <mesh material={materials.Plants} geometry={nodes.VineGreen_05_Plants_0.geometry} />
            </group>
            <group position={[-1191.79, -380.15, 169.44]} rotation={[1.62, 0.05, 1.15]} scale={[0.71, 0.71, 0.71]}>
              <mesh material={materials.Plants} geometry={nodes.VineGreen_06_Plants_0.geometry} />
            </group>
            <group position={[-593.35, 412.59, -84.17]} rotation={[Math.PI / 2, 0, 0]} scale={[0.26, 0.26, 0.26]}>
              <group rotation={[0, 0, 0]}>
                <mesh material={materials.Plants} geometry={nodes.polySurface1_Plants_0.geometry} />
              </group>
              <group rotation={[0, 0, 0]}>
                <mesh material={materials.Plants} geometry={nodes.polySurface2_Plants_0.geometry} />
              </group>
              <group position={[-255.44, 98.75, 84.58]} rotation={[0, 0, 0]} scale={[0.67, 0.67, 0.67]}>
                <mesh material={materials.Plants} geometry={nodes.polySurface3_Plants_0.geometry} />
              </group>
              <group position={[-161.29, -43.41, 176.21]} rotation={[0, 0, 0.17]}>
                <mesh material={materials.Plants} geometry={nodes.polySurface4_Plants_0.geometry} />
              </group>
            </group>
            <group position={[-639.87, 383.59, 38.92]} rotation={[Math.PI / 2, 0, 0.58]} scale={[0.35, 0.26, 0.44]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_03_Plants_0.geometry} />
            </group>
            <group position={[-726.06, 447.73, -221.23]} rotation={[Math.PI / 2, 0, -0.78]} scale={[0.35, 0.26, 0.44]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_04_Plants_0.geometry} />
            </group>
            <group position={[-790.73, 525.11, 13.3]} rotation={[Math.PI / 2, 0, 0.51]} scale={[0.2, 0.15, 0.25]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_05_Plants_0.geometry} />
            </group>
            <group position={[-756.29, 570.13, -175.63]} rotation={[Math.PI / 2, 0, -0.68]} scale={[0.2, 0.15, 0.25]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_06_Plants_0.geometry} />
            </group>
            <group position={[-821.47, 498.41, 42.36]} rotation={[Math.PI / 2, 0, 0.58]} scale={[0.15, 0.11, 0.2]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_07_Plants_0.geometry} />
            </group>
            <group position={[-720.82, 418.45, 18.35]} rotation={[Math.PI / 2, 0, 0.58]} scale={[0.18, 0.14, 0.23]}>
              <mesh material={materials.Plants} geometry={nodes.VineBlue_08_Plants_0.geometry} />
            </group>
          </group>
          <group position={[16.53, 7.53, 146.77]} rotation={[0.03, 0.12, -0.07]} scale={[0.65, 0.65, 0.65]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower1_Plants_0.geometry} />
          </group>
          <group position={[80.49, 2.42, 33.95]} rotation={[0.02, 0.11, -0.06]} scale={[0.64, 0.64, 0.64]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower2_Plants_0.geometry} />
          </group>
          <group position={[58.06, 3.35, -236.59]} rotation={[-0.02, 0.23, -0.02]} scale={[0.65, 0.65, 0.65]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower3_Plants_0.geometry} />
          </group>
          <group position={[-26.33, 5.88, -24.37]} rotation={[0.01, 0.12, -0.07]} scale={[0.65, 0.65, 0.65]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower4_Plants_0.geometry} />
          </group>
          <group position={[-65.67, 8.99, -204.28]} rotation={[0.01, 0.12, -0.07]} scale={[0.34, 0.34, 0.34]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower5_Plants_0.geometry} />
          </group>
          <group position={[-38.81, 7.41, -264.31]} rotation={[0.01, 0.12, -0.07]} scale={[0.34, 0.34, 0.34]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower6_Plants_0.geometry} />
          </group>
          <group position={[-94.36, 11.28, -342.03]} rotation={[0.01, 0.12, -0.07]} scale={[0.34, 0.34, 0.34]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower7_Plants_0.geometry} />
          </group>
          <group position={[-56.82, 9, -404.93]} rotation={[0.01, 0.12, -0.07]} scale={[0.34, 0.34, 0.34]}>
            <mesh material={materials.Plants} geometry={nodes.Blue_Flower8_Plants_0.geometry} />
          </group>
          <group position={[635.49, -42.16, -125.52]} rotation={[0, 0, -0.08]}>
            <mesh material={materials.Tree} geometry={nodes.Tree_03_Tree_0.geometry} />
          </group>
          <group position={[0, 28.58, 0]}>
            <mesh material={materials.GhostStag} geometry={nodes.ParticleBall_02_GhostStag_0.geometry} />
          </group>
          <group position={[0, 29.44, 0]}>
            <mesh material={materials.GhostStag} geometry={nodes.ParticleBall_03_GhostStag_0.geometry} />
          </group>
          <group position={[-30.09, 6.97, 7.42]}>
            <mesh material={materials.GhostStag} geometry={nodes.ParticleBall_04_GhostStag_0.geometry} />
          </group>
          <group position={[0, 37.48, 0]}>
            <mesh material={materials.GhostStag} geometry={nodes.ParticleBall_05_GhostStag_0.geometry} />
          </group>
          <group name="ParticleBall_06" position={[-10.96, -4.47, 10.84]}>
            <mesh material={materials.GhostStag} geometry={nodes.ParticleBall_06_GhostStag_0.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
