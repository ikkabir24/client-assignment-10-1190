import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/login",
                    Component: Login,
                },
                {
                    path: "/register",
                    Component: Register,
                },
            ]
        }
    ]
)

export default router;