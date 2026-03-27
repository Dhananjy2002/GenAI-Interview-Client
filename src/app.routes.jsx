import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Home from "./pages/Home";
import Protected from "./features/auth/components/Protected";
import InterviewReport from "./features/ai/components/InterviewReport";
import ReportsList from "./features/ai/components/ReportsList";
import ForgotPassword from "./features/auth/pages/ForgotPassword";
import ResetPassword from "./features/auth/pages/ResetPassword";
import AppLayout from "./components/layout/AppLayout";
import AboutUs from "./pages/AboutUs";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import HelpCenter from "./pages/HelpCenter";

const withLayout = (Component) => (
    <AppLayout>
        {Component}
    </AppLayout>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected> {withLayout(<Home />)} </Protected>
    },
    {
        path: "/report",
        element: <Protected> {withLayout(<InterviewReport />)} </Protected>
    },
    {
        path: "/report/:id",
        element: <Protected> {withLayout(<InterviewReport />)} </Protected>
    },
    {
        path: "/reports",
        element: <Protected> {withLayout(<ReportsList />)} </Protected>
    },
    {
        path: "/about",
        element: withLayout(<AboutUs />)
    },
    {
        path: "/terms",
        element: withLayout(<Terms />)
    },
    {
        path: "/privacy",
        element: withLayout(<PrivacyPolicy />)
    },
    {
        path: "/contact",
        element: withLayout(<ContactUs />)
    },
    {
        path: "/help",
        element: withLayout(<HelpCenter />)
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