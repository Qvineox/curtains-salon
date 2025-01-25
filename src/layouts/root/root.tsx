import {Fragment} from "react";
import {Outlet} from "react-router";
import Navbar from "../navbar/navbar.tsx";

export default function Root() {
    return <Fragment>
        <Outlet/>
        <Navbar/>
    </Fragment>
}