import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Outlet } from "react-router-dom";

const Rotlayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Home /> */}
        </>
    );
};

export default Rotlayout;
