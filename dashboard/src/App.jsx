import { useState } from "react";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
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
