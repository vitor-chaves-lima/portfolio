import { createContext, MutableRefObject, useContext } from "react";
import { MotionValue, ScrollMotionValues } from "framer-motion";

export type SectionRefMap = {
	[key: string]: MutableRefObject<HTMLDivElement>;
};

export type SectionDataMap = {
	[key: string]: { height: number; position: number };
};

export type SectionProgressMap = {
	[key: string]: MotionValue<number>;
};

type ScrollContextType = {
	scrollData?: ScrollMotionValues;
	currentSection?: MutableRefObject<string>;
	sectionsProgress?: SectionProgressMap;
};

export const ScrollContext = createContext<ScrollContextType>({});

export const useScrollData = () => {
	const context = useContext(ScrollContext);
	return context.scrollData!;
};

export const useSectionProgress = (sectionKey: string) => {
	const context = useContext(ScrollContext);
	return context.sectionsProgress![sectionKey];
};
