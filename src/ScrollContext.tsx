import {
	createContext,
	FC,
	MutableRefObject,
	ReactNode,
	useContext,
} from "react";

type ScrollContextType = {
	scrollAreaRef: MutableRefObject<HTMLDivElement> | null;
};

const ScrollContext = createContext<ScrollContextType>({
	scrollAreaRef: null,
});

export const ScrollProvider: FC<{
	children: ReactNode;
	scrollAreaRef: MutableRefObject<HTMLDivElement>;
}> = ({ children, scrollAreaRef }) => {
	return (
		<ScrollContext.Provider
			value={{
				scrollAreaRef: scrollAreaRef,
			}}
		>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScrollAreaRef = () => {
	const context = useContext(ScrollContext);
	return context.scrollAreaRef!;
};
