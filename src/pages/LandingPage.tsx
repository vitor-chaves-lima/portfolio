import Scene from "../components/Scene.tsx";
import { forwardRef, PropsWithChildren, useRef } from "react";
import Container from "../components/Container.tsx";
import { ScrollProvider } from "../contexts/ScrollProvider.tsx";

const Section = forwardRef<HTMLDivElement, PropsWithChildren>(
	({ children }, ref) => (
		<section
			ref={ref}
			className="h-min-screen w-screen flex flex-col items-center justify-center"
		>
			{children}
		</section>
	)
);

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
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
));

const ProfileSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<Container>
			<div className="h-screen flex flex-col justify-between text-white">
				<div className="flex flex-col items-center gap-5 py-40">
					<h1 className="bg-indigo-700 text-3xl p-4 font-bold">
						Featured Projects
					</h1>

					<h2 className="text-2xl p-4 font-light">
						Showcasing Innovative Solutions and Practical
						Applications
					</h2>
				</div>
			</div>
		</Container>
	</Section>
));

const LandingPage = () => {
	const scrollAreaRef = useRef<HTMLDivElement>(null!);
	const heroSectionRef = useRef<HTMLDivElement>(null!);
	const profileSectionRef = useRef<HTMLDivElement>(null!);
	const profileSection2Ref = useRef<HTMLDivElement>(null!);

	return (
		<div className="relative w-screen h-screen pointer-events-auto">
			<ScrollProvider
				scrollAreaRef={scrollAreaRef}
				sectionRefs={{
					hero: heroSectionRef,
					profile: profileSectionRef,
					profile2: profileSection2Ref,
				}}
			>
				<Scene />
			</ScrollProvider>

			<div
				className="relative h-full z-20 overflow-y-auto overflow-x-hidden"
				ref={scrollAreaRef}
			>
				<HeroSection ref={heroSectionRef} />
				<ProfileSection ref={profileSectionRef} />
				<ProfileSection ref={profileSection2Ref} />
			</div>
		</div>
	);
};

export default LandingPage;
