import React from "react";
import logo from "../assets/logo.svg";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header style={{ background: "#f56831" }}>
            <nav className="nav_bar">
                <img src={logo} width={60} />

                <ul className="nav_bar_list">
                    <Link style={{ textDecoration: "none" }} to="/home">
                        <li
                            style={{
                                fontSize: "18px",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Home
                        </li>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/result">
                        <li
                            style={{
                                fontSize: "18px",
                                color: "white",
                                cursor: "pointer",
                            }}
                        >
                            Result
                        </li>
                    </Link>

                    <li>
                        <LogoutOutlined
                            style={{
                                fontSize: "24px",
                                color: "white",
                                cursor: "pointer",
                            }}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
