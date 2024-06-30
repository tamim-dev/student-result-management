import { useState } from "react";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Rotlayout from "./pages/Rotlayout";
import Result from "./pages/Result";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/" element={<Rotlayout />}>
                    <Route path="home" element={<Home />}></Route>
                    <Route path="result" element={<Result />}></Route>
                </Route>
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
