import { FC, MutableRefObject, ReactNode, useEffect, useRef } from "react";

import { motionValue, useMotionValueEvent, useScroll } from "framer-motion";
import {
	ScrollContext,
	SectionDataMap,
	SectionProgressMap,
	SectionRefMap,
} from "./ScrollContext.tsx";

const getCurrentSectionAndProgress = (
	scrollY: number,
	sections: SectionDataMap
): string | null => {
	for (const key in sections) {
		if (Object.prototype.hasOwnProperty.call(sections, key)) {
			const section = sections[key];
			const sectionTop = section.position;
			const sectionBottom = section.position + section.height;

			if (scrollY >= sectionTop && scrollY < sectionBottom) {
				return key;
			}
		}
	}

	return null;
};

const getSectionProgress = (
	scrollY: number,
	sections: SectionDataMap,
	sectionKey: string
): number => {
	const section = sections[sectionKey];
	const sectionTop = section.position;
	const sectionBottom = section.position + section.height;

	if (scrollY >= sectionTop && scrollY < sectionBottom) {
		const scrollInSection = scrollY - sectionTop;
		return scrollInSection / section.height;
	}

	return 0;
};

export const ScrollProvider: FC<{
	children: ReactNode;
	scrollAreaRef: MutableRefObject<HTMLDivElement>;
	sectionRefs: SectionRefMap;
}> = ({ children, scrollAreaRef, sectionRefs }) => {
	const sectionsData = useRef<SectionDataMap>({});
	const sectionKey = useRef<string>("");
	const sectionsProgress = useRef<SectionProgressMap>({});

	const handleScroll = (scrollY: number) => {
		const currentSection = getCurrentSectionAndProgress(
			scrollY,
			sectionsData.current
		);

		if (!currentSection) return;

		if (currentSection && currentSection != sectionKey.current)
			sectionKey.current = currentSection;

		const currentSectionProgress = getSectionProgress(
			scrollY,
			sectionsData.current,
			currentSection
		);

		sectionsProgress.current[currentSection].set(currentSectionProgress);
	};

	useEffect(() => {
		Object.entries(sectionRefs).forEach(([key, ref]) => {
			sectionsData.current[key] = {
				height: ref.current.clientHeight,
				position: ref.current.getBoundingClientRect().y,
			};

			sectionsProgress.current[key] = motionValue<number>(0);
		});

		handleScroll(0);
	}, [sectionRefs]);

	const scrollData = useScroll({
		container: scrollAreaRef,
		axis: "y",
	});

	useMotionValueEvent(scrollData.scrollY, "change", (latest) => {
		handleScroll(latest);
	});

	return (
		<ScrollContext.Provider
			value={{
				scrollData,
				currentSection: sectionKey,
				sectionsProgress: sectionsProgress.current,
			}}
		>
			{children}
		</ScrollContext.Provider>
	);
};
