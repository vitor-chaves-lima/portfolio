import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
]);

export default router;
