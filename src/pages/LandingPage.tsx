import { FormEvent, forwardRef, PropsWithChildren, useRef } from "react";
import { ScrollProvider } from "../contexts/ScrollProvider.tsx";
import { Loader } from "@react-three/drei";
import { Link } from "react-router-dom";
import Container from "../components/Container.tsx";
import Scene from "../components/Scene.tsx";
import SmoothScroller from "../components/SmoothScroller.tsx";
import Scrollbar from "smooth-scrollbar";
import GitHubCalendar from "react-github-calendar";
import { Rocket } from "lucide-react";

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
import LinkedInLogo from "../assets/images/linkedin-logo.png";
import GitHubLogo from "../assets/images/github-logo.png";

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
					<Link to={"/projects/race4green"}>
						<div className="flex flex-col text-center gap-8">
							<img
								src={Race4Green}
								alt="Race4Green image"
								className="w-64"
							></img>
							<h4>Race 4 Green</h4>
						</div>
					</Link>

					<Link to={"/projects/wise-wave"}>
						<div className="flex flex-col text-center gap-8">
							<img
								src={WiseWave}
								alt="Wise Wave image"
								className="w-64"
							></img>
							<h4>Wise Wave</h4>
						</div>
					</Link>

					<Link to={"/projects/airbnb-replica"}>
						<div className="flex flex-col text-center gap-8">
							<img
								src={AirbnbReplica}
								alt="Airbnb replica image"
								className="w-64"
							></img>
							<h4>Airbnb Replica</h4>
						</div>
					</Link>
				</div>

				<div className="flex justify-end p-5">
					<Link to={"/projects"}>{"See other projects >>"}</Link>
				</div>
			</div>
		</Container>
	</Section>
));

const ShipAnimationSection = forwardRef<HTMLDivElement>((_, ref) => (
	<Section ref={ref}>
		<div className="h-[150vh]"></div>
	</Section>
));

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const formEntries = Array.from(formData.entries()).reduce(
			(acc, [key, value]) => ({ ...acc, [key]: value }),
			{}
		);

		console.log(formEntries);
	};

	return (
		<Section ref={ref}>
			<Container>
				<div className="text-white w-full flex flex-col gap-24">
					<div className="flex flex-col items-center gap-14 py-4">
						<h1 className="bg-indigo-700 text-2xl p-4 font-bold">
							Get in Touch
						</h1>

						<h2 className="text-2xl p-4 font-light">
							Let’s work together to bring ideas to life
						</h2>
					</div>

					<div className="flex gap-16 flex-wrap xl:flex-nowrap mb-40">
						<div className="w-full xl:w-1/2">
							<form
								className="flex flex-col gap-6"
								onSubmit={handleSubmit}
							>
								<div className="flex flex-col gap-3">
									<label htmlFor="fname">First Name</label>
									<input
										type="text"
										id="fname"
										name="firstname"
										placeholder="Your name.."
										className="p-2 text-neutral-900"
									/>
								</div>

								<div className="flex flex-col gap-3">
									<label htmlFor="email">Emal</label>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="Your email.."
										className="p-2 text-neutral-900"
									/>
								</div>

								<div className="flex flex-col gap-3">
									<label htmlFor="subject">Subject</label>
									<textarea
										id="subject"
										name="subject"
										placeholder="Write something.."
										className="p-5 text-neutral-900"
										rows={4}
									></textarea>
								</div>

								<input
									type="submit"
									value="Submit"
									className="bg-indigo-700 p-3 cursor-pointer"
								/>
							</form>
						</div>

						<div className="w-full xl:w-1/2 flex flex-col text-center items-center gap-14">
							<h3 className="text-xl">Find Me on Social Media</h3>

							<div className={"flex gap-10"}>
								<Link
									to={
										"https://www.linkedin.com/in/vitor-chaves-lima/"
									}
									target={"_blank"}
								>
									<img
										alt="LinkedIn logo"
										src={LinkedInLogo}
										className={"h-16"}
									/>
								</Link>

								<Link
									to={"https://github.com/vitor-chaves-lima"}
									target={"_blank"}
									className={"h-24"}
								>
									<img
										alt="Github logo"
										src={GitHubLogo}
										className={"h-16"}
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
});

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

				<footer className="p-16 bg-indigo-700 flex items-center justify-center text-white gap-5">
					<p>Made by Vitor Chaves</p>
					<Rocket />
				</footer>
			</div>

			<Loader />
		</div>
	);
};

export default LandingPage;
