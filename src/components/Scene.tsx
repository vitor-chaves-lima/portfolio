import { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Float, PerformanceMonitor, Stars } from "@react-three/drei";

import { animated, useScroll } from "@react-spring/three";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";

import {
	Euler,
	Group,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	PerspectiveCamera,
	Vector3,
} from "three";
import { useScrollAreaRef } from "../ScrollContext.tsx";

const Camera = () => {
	const scrollAreaRef = useScrollAreaRef();
	const initialPosition = new Vector3(0, 0, 30);

	const set = useThree(({ set }) => set);
	const camera = useThree(({ camera }) => camera);
	const size = useThree(({ size }) => size);
	const cameraRef = useRef<PerspectiveCamera>(null!);

	useLayoutEffect(() => {
		cameraRef.current.aspect = size.width / size.height;
	}, [size]);

	useLayoutEffect(() => {
		cameraRef.current.updateProjectionMatrix();
	});

	useLayoutEffect(() => {
		const oldCam = camera;
		set(() => ({ camera: cameraRef.current! }));
		return () => set(() => ({ camera: oldCam }));
	}, [camera, cameraRef, set]);

	const scroll = useScroll({
		container: scrollAreaRef,
	});

	return (
		<animated.perspectiveCamera
			ref={cameraRef}
			position={initialPosition}
			fov={50}
			position-y={scroll.scrollYProgress.to(
				(val) => initialPosition.y - val * 20
			)}
		></animated.perspectiveCamera>
	);
};

function Fighter() {
	const model = useLoader(FBXLoader, "3d/fighter/fighter.fbx");
	const texture = useLoader(TGALoader, "3d/fighter/fighter_albedo.tga");
	const scrollAreaRef = useScrollAreaRef();

	model.traverse((child: Object3D) => {
		if ((child as Mesh).isMesh) {
			const mesh = child as Mesh;
			const material = mesh.material as MeshStandardMaterial;

			material.map = texture;
		}
	});

	const initialPosition = new Vector3(0, -4, 2);

	const scroll = useScroll({
		container: scrollAreaRef,
	});

	return (
		<animated.group
			position={initialPosition}
			rotation={new Euler(0.1, -1, -0.1)}
			position-z={scroll.scrollYProgress.to(
				(val) => initialPosition.z + val * 20
			)}
			position-x={scroll.scrollYProgress.to(
				(val) => initialPosition.x + val * 20
			)}
		>
			<Float>
				<primitive object={model} scale={0.01} />
			</Float>
		</animated.group>
	);
}

const Planet1 = () => {
	const model = useLoader(FBXLoader, "3d/planet/planet1.fbx");
	const groupRef = useRef<Group>(null);
	const scrollAreaRef = useScrollAreaRef();

	const initialPosition = new Vector3(-80, -30, -80);

	const scroll = useScroll({
		container: scrollAreaRef,
	});

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.05 * delta;
		groupRef.current!.rotation.z += 0.05 * delta;
		groupRef.current!.rotation.x -= 0.05 * delta;
	});

	return (
		<animated.group
			ref={groupRef}
			position={initialPosition}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(10, 10, 10)}
			position-x={scroll.scrollYProgress.to(
				(val) => initialPosition.x - val * 30
			)}
			position-z={scroll.scrollYProgress.to(
				(val) => initialPosition.z + val * 30
			)}
		>
			<primitive object={model} />;
		</animated.group>
	);
};

function Planet2() {
	const model = useLoader(FBXLoader, "3d/planet/planet2.fbx");
	const groupRef = useRef<Group>(null);
	const scrollAreaRef = useScrollAreaRef();

	const initialPosition = new Vector3(80, 20, -100);

	const scroll = useScroll({
		container: scrollAreaRef,
	});

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.04 * delta;
	});

	return (
		<animated.group
			ref={groupRef}
			position={initialPosition}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(12, 12, 12)}
			position-x={scroll.scrollYProgress.to(
				(val) => initialPosition.x + val * 100
			)}
			position-z={scroll.scrollYProgress.to(
				(val) => initialPosition.z - val * 30
			)}
		>
			<primitive object={model} />;
		</animated.group>
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

				{/*<Perf />*/}
			</Canvas>
		</div>
	);
};

export default Scene;
