import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
	return (
		<div className="h-full w-full md:px-12 lg:px-40 xl:px-72">
			{children}
		</div>
	);
};

export default Container;
