import Scene from "../components/Scene.tsx";
import { PropsWithChildren, useRef } from "react";
import Container from "../components/Container.tsx";

const Section = ({ children }: PropsWithChildren) => {
	return (
		<section className="h-min-screen w-screen flex flex-col items-center justify-center">
			{children}
		</section>
	);
};

const HeroSection = () => {
	return (
		<Section>
			<Container>
				<div className="h-screen flex flex-col justify-between text-white">
					<div className="flex flex-col items-center gap-5 py-52">
						<h1 className="bg-indigo-700 text-5xl p-4 font-bold">
							Hi, I'm Vitor
						</h1>

						<h2 className="text-4xl p-4 font-light">
							I'm a fullstack developer
						</h2>
					</div>
				</div>
			</Container>
		</Section>
	);
};

const LandingPage = () => {
	const scrollAreaRef = useRef<HTMLDivElement>(null!);

	return (
		<div className="relative w-screen h-screen pointer-events-auto">
			<Scene scrollAreaRef={scrollAreaRef} />
			<div
				className="relative h-full z-20 overflow-y-auto overflow-x-hidden"
				ref={scrollAreaRef}
			>
				<HeroSection />
				<HeroSection />
			</div>
		</div>
	);
};

export default LandingPage;
