import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PageLoader from "components/PageLoader/PageLoader";
import SharedLayot from "components/SharedLayout/SharedLayout";

import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import PublicRoute from "components/PublicRoute/PublicRoute";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));


export default function UserRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            <Route path="/" element={<SharedLayot />}>
                <Route element={<PublicRoute />}>
                    <Route index element={<HomePage />}/>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    </Suspense>
  )
}
