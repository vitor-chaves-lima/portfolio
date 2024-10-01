import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";

import Container from "../components/Container.tsx";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="flex flex-col w-full h-screen relative">
			<div className="h-screen w-full absolute">
				<Canvas
					camera={{
						position: new Vector3(6, 2, 3),
					}}
				>
					<mesh>
						<boxGeometry args={[2, 2, 2]} />
						<meshPhongMaterial />
					</mesh>
					<directionalLight intensity={0.1} />
				</Canvas>
			</div>

			<div className="z-10">
				<Container>
					<div className="flex w-full px-4 py-6 justify-between">
						<Link to="/">
							<h1>Logo</h1>
						</Link>

						<div className="flex gap-5">
							<button>Button 1</button>
							<button>Button 2</button>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default LandingPage;
