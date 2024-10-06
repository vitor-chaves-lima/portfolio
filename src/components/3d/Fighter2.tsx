import { useFrame, useLoader } from "@react-three/fiber";
import { Euler, Vector3 } from "three";
import { useSectionProgress } from "../../contexts/ScrollContext.tsx";
import { useTransform } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { Float } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const Fighter2 = () => {
	const model = useLoader(FBXLoader, "3d/fighter/fighter2.fbx");

	const initialRotation = new Euler(0, 1.51, 0);
	const initialPosition = new Vector3(-35, 1, 2);

	const sectionProgress = useSectionProgress("shipAnimationRef");

	useFrame(() => {
		console.log(sectionProgress.get());
	});

	const xRotationTransform = useTransform(
		() => initialRotation.x + sectionProgress.get() * 1.7
	);
	const xPositionTransform = useTransform(
		() => initialPosition.x + sectionProgress.get() * 80
	);

	return (
		<motion3d.group
			rotation-x={xRotationTransform}
			rotation-y={initialRotation.y}
			rotation-z={initialRotation.z}
			position-x={xPositionTransform}
			position-y={initialPosition.y}
			position-z={initialPosition.z}
		>
			<Float>
				<primitive object={model} />
			</Float>
		</motion3d.group>
	);
};

useLoader.preload(FBXLoader, "./3d/fighter/fighter2.fbx");

export default Fighter2;
