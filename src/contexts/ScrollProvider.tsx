import {
	FC,
	MutableRefObject,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
} from "react";

import { motionValue, transform } from "framer-motion";

import {
	ScrollContext,
	ScrollData,
	SectionDataMap,
	SectionProgressMap,
	SectionRefMap,
} from "./ScrollContext.tsx";
import Scrollbar from "smooth-scrollbar";

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
	smoothScrollRef: MutableRefObject<Scrollbar>;
	sectionRefs: SectionRefMap;
}> = ({ children, smoothScrollRef, sectionRefs }) => {
	const scrollData: ScrollData = {
		scrollY: motionValue(0),
		scrollYProgress: motionValue(0),
	};
	const sectionsData = useRef<SectionDataMap>({});
	const sectionKey = useRef<string>("");
	const sectionsProgress = useRef<SectionProgressMap>({});

	const handleScroll = useCallback(
		(scrollY: number) => {
			const currentSection = getCurrentSectionAndProgress(
				scrollY,
				sectionsData.current
			);

			if (!currentSection) return;

			console.log(currentSection);

			if (currentSection && currentSection != sectionKey.current)
				sectionKey.current = currentSection;

			const currentSectionProgress = getSectionProgress(
				scrollY,
				sectionsData.current,
				currentSection
			);

			scrollData.scrollY.set(scrollY);
			scrollData.scrollYProgress.set(
				transform(
					scrollY,
					[0, smoothScrollRef.current.getSize().content.height],
					[0, 1]
				)
			);
			sectionsProgress.current[currentSection].set(
				currentSectionProgress
			);
		},
		[smoothScrollRef, scrollData]
	);

	useEffect(() => {
		Object.entries(sectionRefs).forEach(([key, ref]) => {
			sectionsData.current[key] = {
				height: ref.current.clientHeight,
				position: ref.current.getBoundingClientRect().y,
			};

			sectionsProgress.current[key] = motionValue<number>(0);
		});

		if (smoothScrollRef.current) {
			smoothScrollRef.current.addListener((status) =>
				handleScroll(status.offset.y)
			);
		}
	}, [smoothScrollRef, sectionRefs, handleScroll]);

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
