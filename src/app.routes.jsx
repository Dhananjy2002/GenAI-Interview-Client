import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./pages/Home";
import Protected from "./features/auth/components/Protected";
import InterviewReport from "./features/ai/components/InterviewReport";
import ReportsList from "./features/ai/components/ReportsList";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import ResetPassword from "./features/auth/pages/ResetPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected> <Home /> </Protected>
    },
    {
        path: "/report",
        element: <Protected> <InterviewReport /> </Protected>
    },
    {
        path: "/report/:id",
        element: <Protected> <InterviewReport /> </Protected>
    },
    {
        path: "/reports",
        element: <Protected> <ReportsList /> </Protected>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/reset-password/:token",
        element: <ResetPassword />,
    },
])