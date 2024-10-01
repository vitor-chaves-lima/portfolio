import { MutableRefObject, useRef } from "react";

import { Canvas } from "@react-three/fiber";

import { BoxHelper, Euler, Mesh, Vector3 } from "three";
import {
	Box,
	PerspectiveCamera,
	SoftShadows,
	useHelper,
} from "@react-three/drei";

const BACKGROUND_COLOR = "#2674A8";

const Boundaries = () => {
	const wall = useRef<Mesh>(null);
	const ground = useRef<Mesh>(null);

	useHelper(wall as MutableRefObject<Mesh>, BoxHelper, "red");
	useHelper(ground as MutableRefObject<Mesh>, BoxHelper, "red");

	return (
		<>
			<Box
				receiveShadow
				args={[8, 10, 0.5]}
				position={[2, 5, -2]}
				ref={wall}
			>
				<shadowMaterial attach="material" color={BACKGROUND_COLOR} />
			</Box>

			<Box
				receiveShadow
				args={[8, 0.5, 10]}
				position={[2, 0, 3]}
				ref={ground}
			>
				<shadowMaterial attach="material" color={BACKGROUND_COLOR} />
			</Box>
		</>
	);
};

const Scene = () => {
	return (
		<Canvas shadows>
			<PerspectiveCamera
				position={new Vector3(13, 9, 14.5)}
				rotation={new Euler(-0.5, 0.8, 0.4)}
				fov={25}
				makeDefault={true}
			></PerspectiveCamera>

			<color attach="background" args={[BACKGROUND_COLOR]} />

			<directionalLight
				position={[10, 10, 5]}
				castShadow
				intensity={2.2}
			/>

			<SoftShadows size={52} samples={16} />

			<Boundaries />
		</Canvas>
	);
};

export default Scene;
