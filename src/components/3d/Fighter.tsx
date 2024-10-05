import { useLoader } from "@react-three/fiber";
import { Euler, Mesh, MeshStandardMaterial, Object3D, Vector3 } from "three";
import { useSectionProgress } from "../../contexts/ScrollContext.tsx";
import { useTransform } from "framer-motion";
import { motion as motion3d } from "framer-motion-3d";
import { Float } from "@react-three/drei";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const Fighter = () => {
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
};

useLoader.preload(FBXLoader, "./3d/fighter/fighter.fbx");
useLoader.preload(TGALoader, "./3d/fighter/fighter_albedo.tga");

export default Fighter;
