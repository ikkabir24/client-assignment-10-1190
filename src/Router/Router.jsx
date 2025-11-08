import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import Courses from "../Components/Courses/Courses";
import Dashboard from "../Components/Dashboard/Dashboard";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    index: true,
                    Component: Home,
                },
                {
                    path: '/courses',
                    Component: Courses
                },
                {
                    path: '/dashboard',
                    Component: Dashboard
                },
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