import Container from "./Container.tsx";
import { Menu as MenuIcon, Link2 as LinkIcon } from "lucide-react";
import { Dispatch } from "react";
import { Link } from "react-router-dom";

const MenuButton = ({
	label,
	onClick,
}: {
	label: string;
	onClick: () => void;
}) => {
	return (
		<button
			onClick={onClick}
			className="text-2xl font-bold cursor-pointer hover:text-indigo-700 text-neutral-900  transition-colors"
		>
			{label}
		</button>
	);
};

const MenuLink = ({ label, to }: { label: string; to: string }) => {
	return (
		<Link
			to={to}
			className="text-2xl font-bold cursor-pointer hover:text-indigo-700 text-neutral-900 transition-colors flex gap-4"
		>
			<span>{label}</span>
			<LinkIcon />
		</Link>
	);
};

const Navbar = ({
	menuOpened,
	setMenuOpened,
}: {
	menuOpened: boolean;
	setMenuOpened: Dispatch<boolean>;
}) => {
	return (
		<div className="fixed top-0 w-full pr-[17px]">
			<Container>
				<div className="relative">
					<div className="py-7 absolute right-0 z-20">
						<button
							className="p-3 bg-indigo-700 hover:bg-indigo-800 transition-colors rounded text-white"
							onClick={() => setMenuOpened(!menuOpened)}
						>
							<MenuIcon />
						</button>
					</div>

					<div
						className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-100 sm:w-96 xl:w-86" : "w-0"}`}
					>
						<div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
							<MenuButton label="Projects" onClick={() => {}} />
							<MenuButton label="Skills" onClick={() => {}} />
							<MenuLink label={"Contact"} to={"/contact"} />
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
