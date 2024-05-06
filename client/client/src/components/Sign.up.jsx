import React, { useEffect, useState } from "react";
import "../css/login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Sign = ({ onClose }) => {
    const nav = useNavigate();

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        points: 0,
    });


    const [errors, setErrors] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },

    });

    const handleRegisteronChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value,
        });
    };


    const registerHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/register", register)
            .then((res) => {
                console.log(res.data.user);
                setRegister(res.data.user);
                nav("/user");
                onClose();
            })
            .catch((err) =>
                setErrors({
                    ...errors,
                    register: err.response.data,
                })
            );
    };



    return (
        <div className="modal">
            <div className="modal-content">
                <div className="sign-up-container">
                    <span className="close" onClick={onClose}>&times;</span>
                    <form className="sign-up-form" onSubmit={registerHandler}>
                        <h2>Sign Up</h2>
                        {errors.register
                    ? Object.entries(errors.register).map(([key, value], index) =>
                        value ? (
                            <p style={{ color: "red" }} key={index}>
                                {typeof value === "object" ? value.message : value}
                            </p>
                        ) : null
                    )
                    : null}
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            onChange={handleRegisteronChange}
                            value={register.firstName}
                        />
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            onChange={handleRegisteronChange}
                            value={register.lastName}
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            name="email"
                            type="email"
                            autoComplete="off"
                            placeholder="Email"
                            onChange={handleRegisteronChange}
                            value={register.email}
                        />
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="********"
                            onChange={handleRegisteronChange}
                            value={register.password}
                        />
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="********"
                            onChange={handleRegisteronChange}
                            value={register.confirmPassword}
                        />
                        <input
                            name="points"
                            type="hidden"
                            onChange={handleRegisteronChange}
                            value={register.points}
                        />
                        <button type="submit" className="btn-s">Sign Up</button>
                    </form>
                    {/* *********************************************************************** */}
                </div>

            </div>
        </div>
    );
};

export default Sign;
