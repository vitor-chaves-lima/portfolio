import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

const LandingPage = () => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Canvas
				camera={{
					position: new Vector3(6, 2, 3),
				}}
				className="absolute h-full w-full"
			>
				<mesh>
					<boxGeometry args={[2, 2, 2]} />
					<meshPhongMaterial />
				</mesh>
				<ambientLight intensity={0.1} />
				<directionalLight intensity={0.1} />
			</Canvas>
		</div>
	);
};

export default LandingPage;
