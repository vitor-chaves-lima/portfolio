import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
	Center,
	Float,
	PerformanceMonitor,
	PerspectiveCamera,
	Stars,
} from "@react-three/drei";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";

import {
	Euler,
	Group,
	Mesh,
	MeshStandardMaterial,
	Object3D,
	Vector3,
} from "three";

import { useRef } from "react";
import { Perf } from "r3f-perf";

function Fighter() {
	const model = useLoader(FBXLoader, "3d/fighter/fighter.fbx");

	const texture = useLoader(TGALoader, "3d/fighter/fighter_albedo.tga");

	model.traverse((child: Object3D) => {
		if ((child as Mesh).isMesh) {
			const mesh = child as Mesh;
			const material = mesh.material as MeshStandardMaterial;

			material.map = texture;
		}
	});

	return <primitive object={model} scale={0.01} />;
}

function Planet1() {
	const model = useLoader(FBXLoader, "3d/planet/planet1.fbx");

	const groupRef = useRef<Group>(null);

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.2 * delta;
		groupRef.current!.rotation.z += 0.1 * delta;
	});

	return (
		<group
			ref={groupRef}
			position={new Vector3(-80, -30, -80)}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(6, 6, 6)}
		>
			<primitive object={model} />;
		</group>
	);
}

function Planet2() {
	const model = useLoader(FBXLoader, "3d/planet/planet2.fbx");

	const groupRef = useRef<Group>(null);

	useFrame((_, delta) => {
		groupRef.current!.rotation.y += 0.2 * delta;
	});

	return (
		<group
			ref={groupRef}
			position={new Vector3(70, 20, -60)}
			rotation={new Euler(0.1, -1, -0.1)}
			scale={new Vector3(6, 6, 6)}
		>
			<primitive object={model} />;
		</group>
	);
}

function Rig() {
	return useFrame(({ camera, pointer }, delta) => {
		camera.position
			.lerp(
				new Vector3(pointer.x, pointer.y, camera.position.z),
				0.8 * delta
			)
			.clamp(new Vector3(-1.2, -1.2, 30), new Vector3(1.2, 1.2));
	});
}

const Scene = () => {
	return (
		<Canvas shadows={false}>
			<color attach="background" args={["#272727"]} />

			<PerspectiveCamera
				makeDefault={true}
				position={new Vector3(0, 0, 30)}
			></PerspectiveCamera>

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

					<Center
						position={new Vector3(0, -4, 2)}
						rotation={new Euler(0.1, -1, -0.1)}
					>
						<Float>
							<Fighter />
						</Float>
					</Center>

					<group>
						<Planet1 />
						<Planet2 />
					</group>
				</group>
				<Rig />
			</PerformanceMonitor>
			<Perf />
		</Canvas>
	);
};

export default Scene;
