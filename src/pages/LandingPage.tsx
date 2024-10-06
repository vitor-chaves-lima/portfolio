import { forwardRef, PropsWithChildren, useRef } from "react";
import { ScrollProvider } from "../contexts/ScrollProvider.tsx";
import { Loader } from "@react-three/drei";
import { NavLink } from "react-router-dom";
import Container from "../components/Container.tsx";
import Scene from "../components/Scene.tsx";
import SmoothScroller from "../components/SmoothScroller.tsx";
import Scrollbar from "smooth-scrollbar";
import GitHubCalendar from "react-github-calendar";

import ReactLogo from "../assets/images/react-logo.png";
import JavascriptLogo from "../assets/images/javascript-logo.png";
import HTMLLogo from "../assets/images/html-logo.png";
import CSSLogo from "../assets/images/css-logo.png";
import NodeJSLogo from "../assets/images/nodejs-logo.png";
import PythonLogo from "../assets/images/python-logo.webp";
import GoLogo from "../assets/images/go-logo.png";
import AWSLogo from "../assets/images/aws-logo.png";
import TerraformLogo from "../assets/images/terraform-logo.png";
import Race4Green from "../assets/images/race4green.png";
import WiseWave from "../assets/images/wise-wave.png";
import AirbnbReplica from "../assets/images/airbnb-replica.png";

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
					<h1 className="bg-indigo-700 text-4xl p-4 font-bold">
						Hi, I'm Vitor
					</h1>

					<h2 className="text-3xl p-4 font-light">
						I simplify complexity with efficient designs
					</h2>
				</div>
			</div>
		</Container>
	</Section>
));

const ProfileSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<Container>
			<div className="flex flex-col text-white">
				<div className="flex flex-col items-center gap-14 py-40">
					<h1 className="bg-indigo-700 text-2xl p-4 font-bold">
						About me
					</h1>

					<h2 className="text-2xl p-4 font-light">
						Code is my tool, innovation is my goal
					</h2>
				</div>
				<div className="flex gap-16 flex-wrap xl:flex-nowrap mb-40">
					<div className="w-full xl:w-1/2 text-lg text-pretty flex flex-col gap-12 items-center justify-center">
						<p>
							I’m Vitor, a full stack developer with a passion for
							creating efficient, scalable solutions. My goal is
							to write clean, optimized code that powers seamless
							experiences.
						</p>

						<p>
							I thrive on collaboration and continuously seek
							opportunities to learn and grow. By staying updated
							with the latest technologies and best practices, I
							ensure that my projects not only meet current
							standards but also anticipate future needs, paving
							the way for innovative solutions.
						</p>
					</div>

					<div className="w-full xl:w-1/2 flex flex-col items-center gap-7">
						<h3 className="text-xl">Technologies I Work With</h3>

						<div className="flex flex-col items-center text-center gap-5">
							<h4>FRONTEND</h4>
							<ul className="flex padding gap-5 justify-center flex-wrap">
								<li className="flex items-center">
									<img
										alt="React logo"
										src={ReactLogo}
										className="w-[5.5rem] h-[4.5rem]"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="Javascript logo"
										src={JavascriptLogo}
										className="w-[4.5rem]"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="HTML logo"
										src={HTMLLogo}
										className="w-[5rem]"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="CSS logo"
										src={CSSLogo}
										className="w-[4.5rem]"
									/>
								</li>
							</ul>
						</div>

						<div className="flex flex-col items-center text-center gap-5">
							<h4>BACKEND</h4>
							<ul className="flex padding gap-5 justify-center flex-wrap">
								<li className="flex items-center">
									<img
										alt="NodeJS logo"
										src={NodeJSLogo}
										className="w-18 h-20"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="Python logo"
										src={PythonLogo}
										className="w-[4.5rem]"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="Go logo"
										src={GoLogo}
										className="w-[4rem]"
									/>
								</li>
							</ul>
						</div>

						<div className="flex flex-col items-center text-center gap-5">
							<h4>Cloud & Infrastructure</h4>
							<ul className="flex padding gap-5 justify-center flex-wrap">
								<li className="flex items-center">
									<img
										alt="AWS logo"
										src={AWSLogo}
										className="w-[5.5rem]"
									/>
								</li>
								<li className="flex items-center">
									<img
										alt="Terraform logo"
										src={TerraformLogo}
										className="w-[4.5rem]"
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex p-6 flex-col justify-center items-center gap-16">
					<h3 className="text-2xl">My GitHub Contributions</h3>

					<GitHubCalendar username="vitor-chaves-lima" />
				</div>
			</div>
		</Container>
	</Section>
));

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<Container>
			<div className="text-white py-48 flex gap-24 flex-col">
				<div className="flex flex-col items-center gap-14 py-4">
					<h1 className="bg-indigo-700 text-2xl p-4 font-bold">
						My Projects
					</h1>

					<h2 className="text-2xl p-4 font-light">
						Turning Ideas into Reality
					</h2>
				</div>

				<div className="flex gap-16 justify-center items-center">
					<NavLink to={"/projects/race4green"}>
						<div className="flex flex-col text-center gap-8">
							<img src={Race4Green} className="w-64"></img>
							<h4>Race 4 Green</h4>
						</div>
					</NavLink>

					<NavLink to={"/projects/wise-wave"}>
						<div className="flex flex-col text-center gap-8">
							<img src={WiseWave} className="w-64"></img>
							<h4>Wise Wave</h4>
						</div>
					</NavLink>

					<NavLink to={"/projects/airbnb-replica"}>
						<div className="flex flex-col text-center gap-8">
							<img src={AirbnbReplica} className="w-64"></img>
							<h4>Airbnb Replica</h4>
						</div>
					</NavLink>
				</div>

				<div className="flex justify-end p-5">
					<NavLink to={"/projects"}>
						{"See other projects >>"}
					</NavLink>
				</div>
			</div>
		</Container>
	</Section>
));

const ShipAnimationSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<div className="h-screen"></div>
	</Section>
));

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<div className="h-screen"></div>
	</Section>
));

const LandingPage = () => {
	const contentContainerRef = useRef<HTMLDivElement>(null!);
	const smoothScrollRef = useRef<Scrollbar>(null!);

	const heroSectionRef = useRef<HTMLDivElement>(null!);
	const profileSectionRef = useRef<HTMLDivElement>(null!);
	const projectsSectionRef = useRef<HTMLDivElement>(null!);
	const shipAnimationRef = useRef<HTMLDivElement>(null!);

	return (
		<div className="relative w-screen h-screen pointer-events-auto">
			<SmoothScroller
				contentContainerRef={contentContainerRef}
				smoothScrollRef={smoothScrollRef}
			/>

			<ScrollProvider
				smoothScrollRef={smoothScrollRef}
				sectionRefs={{
					hero: heroSectionRef,
					profile: profileSectionRef,
					projects: projectsSectionRef,
					shipAnimationRef: shipAnimationRef,
				}}
			>
				<Scene />
			</ScrollProvider>

			<div
				className="h-full z-20 overflow-y-auto overflow-x-hidden"
				ref={contentContainerRef}
			>
				<HeroSection ref={heroSectionRef} />
				<ProfileSection ref={profileSectionRef} />
				<ProjectsSection ref={projectsSectionRef} />
				<ShipAnimationSection ref={shipAnimationRef} />
				<ContactSection />
			</div>

			<Loader />
		</div>
	);
};

export default LandingPage;
