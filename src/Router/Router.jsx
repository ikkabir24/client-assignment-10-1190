import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import AllCourses from "../Components/AllCourses/AllCourses";
import LoadingPage from "../Components/LoadingPage/LoadingPage";
import PrivateRoute from "../provider/PrivateRoute";
import MyCreations from "../Components/MyCreations/MyCreations";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import CreateCourse from "../Components/MyCreations/CreateCourse";
import UpdateCourse from "../Components/MyCreations/UpdateCourse";
import MyEnrolements from "../Components/MyEnrolements/MyEnrolements";

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
                    path: '/allCourses',
                    Component: AllCourses,
                    loader: ()=> fetch('http://localhost:3000/categories'),
                    HydrateFallback: LoadingPage
                },
                {
                    path: '/myCreations',
                    element: <PrivateRoute><MyCreations></MyCreations></PrivateRoute>
                },
                {
                    path: '/myEnrolements',
                    element: <PrivateRoute><MyEnrolements></MyEnrolements></PrivateRoute>
                },
                {
                    path: '/createCourse',
                    element: <PrivateRoute><CreateCourse></CreateCourse></PrivateRoute>
                },
                {
                    path: '/updateCourse/:id',
                    loader:({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
                    HydrateFallback: LoadingPage,
                    element: <PrivateRoute><UpdateCourse></UpdateCourse></PrivateRoute>
                },
                {
                    path: '/courseDetails/:id',
                    loader: ({params})=>fetch(`http://localhost:3000/courses/${params.id}`),
                    HydrateFallback:LoadingPage,
                    element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
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