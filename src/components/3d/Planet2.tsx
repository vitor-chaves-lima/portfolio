import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { motion as motion3d } from "framer-motion-3d";
import { Euler, Vector3 } from "three";
import { useSectionProgress } from "../../contexts/ScrollContext.tsx";
import { useTransform } from "framer-motion";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const Planet2 = () => {
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
};

export default Planet2;
