import { Link } from "react-router-dom";
import Container from "./Container.tsx";

const Navbar = () => {
	return (
		<div className="fixed top-0 w-full pr-[17px]">
			<Container>
				<div className="relative">
					<div className="py-4 absolute right-0">
						<Link to="/">
							<h1>Logo</h1>
						</Link>
					</div>

					<div className="py-4 right-0">
						<Link to="/">
							<h1>Logo</h1>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
