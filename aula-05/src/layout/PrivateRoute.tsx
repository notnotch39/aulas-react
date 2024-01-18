import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
    const user = false

    return (
        <>
            {!user && <Navigate to="/login" />}
            <Outlet />
        </>
    )
}