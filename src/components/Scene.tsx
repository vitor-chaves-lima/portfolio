import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Center, PerspectiveCamera, Stars } from "@react-three/drei";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
import { Euler, Group, Vector3 } from "three";
import { useRef } from "react";

function Rig() {
	const { camera, pointer } = useThree();
	const vec = new Vector3();
	return useFrame(() =>
		camera.position.lerp(
			vec.set(pointer.x * 2, pointer.y, camera.position.z),
			0.003
		)
	);
}

function Fighter() {
	const model = useLoader(FBXLoader, "3d/fighter/fighter.fbx");

	const texture = useLoader(TGALoader, "3d/fighter/fighter_albedo.tga");

	model.traverse((child: any) => {
		if (child.isMesh) {
			child.material.map = texture;
		}
	});

	return <primitive object={model} scale={0.01} />;
}

function Planet1() {
	const model = useLoader(FBXLoader, "3d/planet/planet1.fbx");

	const groupRef = useRef<Group>(null);

	useFrame(() => {
		groupRef.current!.rotation.x += 0.0005;
		groupRef.current!.rotation.y += 0.0005;
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

	useFrame(() => {
		groupRef.current!.rotation.y += 0.0004;
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
const Scene = () => {
	return (
		<Canvas shadows>
			<color attach="background" args={["#272727"]} />

			<PerspectiveCamera
				makeDefault={true}
				position={new Vector3(0, 0, 30)}
			></PerspectiveCamera>

			<ambientLight intensity={0.7} />
			<directionalLight position={[0, 0, 5]} />

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
					position={new Vector3(0, -3, 2)}
					rotation={new Euler(0.1, -1, -0.1)}
				>
					<Fighter />
				</Center>

				<group>
					<Planet1 />
					<Planet2 />
				</group>
			</group>
			<Rig />
		</Canvas>
	);
};

export default Scene;
