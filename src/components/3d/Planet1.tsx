import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { motion as motion3d } from "framer-motion-3d";
import { Euler, Vector3 } from "three";
import { useSectionProgress } from "../../contexts/ScrollContext.tsx";
import { useTransform } from "framer-motion";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

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
	});

	return (
		<motion3d.group
			ref={groupRef}
			rotation={new Euler(0.3, 1.3, 0)}
			scale={new Vector3(10, 10, 10)}
			position-x={xPositionTransform}
			position-y={initialPosition.y}
			position-z={zPositionTransform}
		>
			<primitive object={model} />;
		</motion3d.group>
	);
};

useLoader.preload(FBXLoader, "./3d/planet/planet1.fbx");

export default Planet1;
