import Container from "../components/Container.tsx";
import { Link } from "react-router-dom";
import Scene from "../components/Scene.tsx";
import ScrollGif from "../assets/scroll.gif";

const LandingPage = () => {
	return (
		<div className="flex flex-col w-screen h-screen relative">
			<div className="h-full w-full absolute pointer-events-auto">
				<Scene />
			</div>

			<div className="z-10 flex flex-col h-full text-white pointer-events-none">
				<div className="bg-[#272727]">
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

				<div className="flex-1 w-full">
					<Container>
						<div className="h-full flex flex-col justify-between">
							<div className="flex flex-col items-center gap-5 py-32">
								<h1 className="bg-indigo-700 text-5xl p-4 font-bold">
									Hi, I'm Vitor
								</h1>
								<h2 className="text-4xl p-4 font-light">
									I'm a fullstack developer
								</h2>
							</div>

							<div className="py-5 flex items-center justify-center">
								<img
									src={ScrollGif}
									alt="Scroll Gif"
									className="h-20"
								/>
							</div>
						</div>
					</Container>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
