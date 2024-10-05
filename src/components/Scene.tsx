import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor, Stars } from "@react-three/drei";
import { Perf } from "r3f-perf";

import { motion as motion3d } from "framer-motion-3d";

import { useScrollData } from "../contexts/ScrollContext.tsx";
import Planet2 from "./3d/Planet2.tsx";
import Planet1 from "./3d/Planet1.tsx";
import Fighter from "./3d/Fighter.tsx";

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

const Scene = () => {
	return (
		<div className="absolute w-screen h-screen z-0">
			<Canvas shadows={false}>
				<color attach="background" args={["#272727"]} />

				<Suspense>
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
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Scene;
