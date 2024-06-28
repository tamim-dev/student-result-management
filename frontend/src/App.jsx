import { useState } from "react";
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/result" element={<Result />}></Route>
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
