import Container from "../components/Container.tsx";
import { Link } from "react-router-dom";
import Scene from "../components/Scene.tsx";

const LandingPage = () => {
	return (
		<div className="flex flex-col w-screen h-screen relative">
			<div className="h-full w-full absolute">
				<Scene />
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
