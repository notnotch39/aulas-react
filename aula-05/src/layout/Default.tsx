import { Outlet } from "react-router-dom";

export function DefaultLayout() {
    return (
        <>
            <header>
                <h1>Alou</h1>
            </header>
            <Outlet />
        </>
    )
}