import { PropsWithChildren } from "react";
import Container from "./Container.tsx";

import { motion } from "framer-motion";

const Section = ({ children }: PropsWithChildren) => {
	return (
		<section className="h-screen w-screen flex flex-col items-center justify-center">
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
						<motion.h1
							className="bg-indigo-700 text-5xl p-4 font-bold"
							initial={{
								opacity: 0,
							}}
							whileInView={{ opacity: 1 }}
						>
							Hi, I'm Vitor
						</motion.h1>

						<motion.h2
							className="text-4xl p-4 font-light"
							initial={{
								opacity: 0,
							}}
							whileInView={{
								opacity: 1,
								transition: {
									delay: 0.3,
								},
							}}
						>
							I'm a fullstack developer
						</motion.h2>
					</div>
				</div>
			</Container>
		</Section>
	);
};

const Interface = () => {
	return (
		<>
			<HeroSection />
		</>
	);
};

export default Interface;
