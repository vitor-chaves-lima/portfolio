import { MutableRefObject, useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

type SmoothScrollerProps = {
	contentContainerRef: MutableRefObject<HTMLDivElement>;
	smoothScrollRef: MutableRefObject<Scrollbar>;
};

const SmoothScroller = ({
	contentContainerRef,
	smoothScrollRef,
}: SmoothScrollerProps) => {
	const internalScrollRef = useRef<HTMLElement>(null!);

	useEffect(() => {
		internalScrollRef.current = contentContainerRef.current;
		smoothScrollRef.current = Scrollbar.init(contentContainerRef.current, {
			damping: 0.02,
		});

		return () => {
			Scrollbar.destroyAll();
		};
	}, [smoothScrollRef, contentContainerRef]);

	return <></>;
};
export default SmoothScroller;
