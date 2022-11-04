import React from "react"
import {AppRoutes} from "../../../views";
import {Header} from "../header";

export const Layout = () => {
    return (
        <>
            <Header/>
            <main className='container'>
                <AppRoutes/>
            </main>
        </>
    )
}