
import React, { useEffect, useState } from "react";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Up =()=>{
    const nav = useNavigate();
    const [login, setLogin] = useState({
    email: "",
    password: "",
});
const [errors, setErrors] = useState({
    login: {
        email: "",
        password: "",
    },
});
const handleLoginonChange = (e) => {
    e.preventDefault();
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
            nav("/");
        })
        .catch((err) =>
            setErrors({
                ...errors,
                login: err.response.data,
            })
        );
};




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
                    onChange={handleLoginonChange}
                    value={login.email}
                />
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    type="password"
                    placeholder="********"
                    onChange={handleLoginonChange}
                    value={login.password}
                />
                <button type="submit">Login</button>
            </form>
}

export default Up;