import { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float, PerformanceMonitor, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
import { Euler, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";

import { useTransform } from "framer-motion";

import { motion as motion3d } from "framer-motion-3d";

import {
	useScrollData,
	useSectionProgress,
} from "../contexts/ScrollContext.tsx";

const Camera = () => {
	const set = useThree(({ set }) => set);
	const camera = useThree(({ camera }) => camera);
	const size = useThree(({ size }) => size);
	// @ts-expect-error Fix later
	const cameraRef = useRef<motion3d.perspectiveCamera>(null!);

	const scrollData = useScrollData();
	const yPositionTransform = scrollData.scrollYProgress;

	useFrame(({ camera }) => {
		camera.position.y = yPositionTransform.get();
		camera.updateProjectionMatrix();
		cameraRef.current.updateProjectionMatrix();
	});

	useLayoutEffect(() => {
		cameraRef.current.aspect = size.width / size.height;
	}, [size]);

	useLayoutEffect(() => {
		const oldCam = camera;
		set(() => ({ camera: cameraRef.current! }));
		return () => set(() => ({ camera: oldCam }));
	}, [camera, cameraRef, set]);

	return (
		<motion3d.perspectiveCamera
			ref={cameraRef}
			fov={50}
			position-z={30}
		></motion3d.perspectiveCamera>
	);
};

function Fighter() {
	const model = useLoader(FBXLoader, "3d/fighter/fighter.fbx");
	const texture = useLoader(TGALoader, "3d/fighter/fighter_albedo.tga");

	const initialPosition = new Vector3(0, -4, 2);

	const sectionProgress = useSectionProgress("hero");
	const xPositionTransform = useTransform(
		() => initialPosition.x + sectionProgress.get() * 35
	);
	const yPositionTransform = useTransform(
		() => initialPosition.y + sectionProgress.get() * 10
	);
	const zPositionTransform = useTransform(
		() => initialPosition.z + sectionProgress.get() * 35
	);

	model.traverse((child: Object3D) => {
		if ((child as Mesh).isMesh) {
			const mesh = child as Mesh;
			const material = mesh.material as MeshStandardMaterial;

			material.map = texture;
		}
	});

	return (
		<motion3d.group
			scale={new Vector3(0.7, 0.7, 0.7)}
			rotation={new Euler(0.1, -1, -0.1)}
			position-x={xPositionTransform}
			position-y={yPositionTransform}
			position-z={zPositionTransform}
		>
			<Float>
				<primitive object={model} scale={0.01} />
			</Float>
		</motion3d.group>
	);
}

const Planet1 = () => {
	const model = useLoader(FBXLoader, "3d/planet/planet1.fbx");
	// @ts-expect-error Fix later
	const groupRef = useRef<motion3d.group>(null);

	const initialPosition = new Vector3(-80, -30, -80);
	const sectionProgress = useSectionProgress("hero");
	const xPositionTransform = useTransform(
		() => initialPosition.x - sectionProgress.get() * 60
	);
	const zPositionTransform = useTransform(
		() => initialPosition.z + sectionProgress.get() * 20
	);

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.05 * delta;
		groupRef.current!.rotation.z += 0.05 * delta;
		groupRef.current!.rotation.x -= 0.05 * delta;
	});

	return (
		<motion3d.group
			ref={groupRef}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(10, 10, 10)}
			position-x={xPositionTransform}
			position-y={initialPosition.y}
			position-z={zPositionTransform}
		>
			<primitive object={model} />;
		</motion3d.group>
	);
};

function Planet2() {
	const model = useLoader(FBXLoader, "3d/planet/planet2.fbx");
	// @ts-expect-error Fix later
	const groupRef = useRef<motion3d.group>(null);

	const initialPosition = new Vector3(80, 20, -100);
	const sectionProgress = useSectionProgress("hero");
	const xPositionTransform = useTransform(
		() => initialPosition.x + sectionProgress.get() * 100
	);
	const zPositionTransform = useTransform(
		() => initialPosition.z - sectionProgress.get() * 20
	);

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.04 * delta;
	});

	return (
		<motion3d.group
			ref={groupRef}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(12, 12, 12)}
			position-x={xPositionTransform}
			position-y={initialPosition.y}
			position-z={zPositionTransform}
		>
			<primitive object={model} />;
		</motion3d.group>
	);
}

const Scene = () => {
	return (
		<div className="absolute w-screen h-screen z-0">
			<Canvas shadows={false}>
				<color attach="background" args={["#272727"]} />

				<Camera />

				<ambientLight intensity={0.7} />
				<directionalLight position={[0, 0, 5]} />

				<PerformanceMonitor>
					<group>
						<Stars
							radius={100}
							depth={50}
							count={500}
							factor={4}
							saturation={0}
							fade
							speed={2}
						/>

						<Fighter />
						<Planet1 />
						<Planet2 />
					</group>
				</PerformanceMonitor>

				<Perf />
			</Canvas>
		</div>
	);
};

export default Scene;
