import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import apiService from "../../services/ApiService";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const login = (data) => {
        apiService
            .post("/pasok", data)
            .then((response) => {
                console.log("Login successful", response.data.message);
            })
            .catch((error) => {
                console.log("error ka boi", error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" {...register("name", { required: true })} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
