import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sign from "./Sign.up";


const Up = ({ onClose }) => {
    const nav = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState("");

    const handleLoginOnChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };

    const loginHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/login", login)
            .then((res) => {
                console.log("Cookie", document.cookie);
                console.log("Data", res.data);
                nav("/user");
            })
            .catch((err) =>
                setErrors({
                    ...errors,
                    login: err.response.data,
                })
            );
    };
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form className="sign-up-form" onSubmit={loginHandler}>
                    {errors.login
                        ? Object.entries(errors.login).map(([key, value], index) =>
                            value ? (
                                <p style={{ color: "red" }} key={index}>
                                    {typeof value === "object" ? value.message : value}
                                </p>
                            ) : null
                        )
                        : null}                    
                        <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={handleLoginOnChange}
                        value={login.email}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="********"
                        onChange={handleLoginOnChange}
                        value={login.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>

    );
};

export default Up;
