import React, { useState, useRef } from "react";
import niketext from "../../assets/niketext.png";
import nikeswoosh from "../../assets/nikeswoosh.png";
import nikewhite from "../../assets/nikelogowhite.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import apiService from "../../../services/ApiService";

const Register = () => {
    //NAVIGATION
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/");
    };

    //AXIOS API CREATE-USER
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const password = watch("password");
    const [serverErrors, setServerErrors] = useState({});

    const RegisterUser = (data) => {
        apiService
            .post("/create-user", data)
            .then((response) => {
                console.log(response.data.message);
                console.log(response.data.user);
            })
            .catch((error) => {
                console.log("error ka boi", error);
                const message = error.response.data.message;
                if (message.includes("Name")) {
                    setServerErrors({ name: message });
                    console.log(serverErrors.name);
                } else if (message.includes("Email")) {
                    setServerErrors({ email: message });
                    console.log(serverErrors.name);
                }
            });
    };

    //TOGGLE PASSWORD
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);
    const toggleConfirmPassword = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    return (
        <div className="flex font-inter h-screen">
            {/* LEFT SIDE */}
            <div className="py-4 px-4 md:px-12 md:py-12 w-full md:w-2/3">
                <div className="flex -space-x-3">
                    <img
                        src={nikeswoosh}
                        className="w-16 h-18"
                        alt="nikeswoosh"
                    />
                    <img src={niketext} className="w-16" alt="niketext" />
                </div>

                <div className=" mt-20 md:mt-4 px-6 md:px-32">
                    <h2 className="font-bold text-center text-3xl  md:text-4xl">
                        Create an Account
                    </h2>
                    <p className="text-center text-gray-400 mt-4">
                        Join now to streamline your experience from day one
                    </p>
                    {/* REGISTER FORM */}
                    <form onSubmit={handleSubmit(RegisterUser)}>
                        {/* INPUT NAME */}
                        <div className="mt-8">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Full Name
                                </label>
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                                {serverErrors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {serverErrors.name}
                                    </p>
                                )}
                            </div>
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                className="border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Your Name"
                            />
                        </div>
                        {/* INPUT EMAIL */}
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Email
                                </label>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                                {serverErrors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {serverErrors.email}
                                    </p>
                                )}
                            </div>

                            <input
                                type="text"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email format",
                                    },
                                })}
                                className="border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="nike@gmail.com"
                            />
                        </div>
                        {/* INPUT PASSWORD */}
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={
                                        isPasswordVisible ? "text" : "password"
                                    }
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 111 characters",
                                        },
                                    })}
                                    className="border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="*******"
                                    autoComplete="new-password"
                                />
                                <i
                                    onClick={togglePassword}
                                    className={`fa-solid ${
                                        isPasswordVisible
                                            ? "fa-eye-slash"
                                            : "fa-eye"
                                    } absolute top-3.5 right-4 cursor-pointer`}
                                />
                            </div>
                        </div>
                        {/* INPUT CONFIRM PASSWORD */}
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Confirm Password
                                </label>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    type={
                                        isConfirmPasswordVisible
                                            ? "text"
                                            : "password"
                                    }
                                    {...register("confirmPassword", {
                                        required:
                                            "Please confirm your password",
                                        validate: (value) =>
                                            value === password ||
                                            "Passwords do not match",
                                    })}
                                    className="border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="*******"
                                    autoComplete="new-password"
                                />
                                <i
                                    onClick={toggleConfirmPassword}
                                    className={`fa-solid ${
                                        isConfirmPasswordVisible
                                            ? "fa-eye-slash"
                                            : "fa-eye"
                                    } absolute top-3.5 right-4 cursor-pointer`}
                                />
                            </div>
                        </div>
                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="bg-black w-full mt-4 text-white py-2.5 rounded-md"
                        >
                            Register
                        </button>
                    </form>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        Already Have an account?{" "}
                        <span
                            onClick={goToLogin}
                            className="text-blue-600 cursor-pointer"
                        >
                            Sign in.
                        </span>
                    </p>
                </div>
            </div>
            {/* RIGHT SIDE IMAGE */}
            <div className="w-2/3 hidden md:flex justify-center items-center bg-black">
                <img src={nikewhite} alt="nike logo white" />
            </div>
        </div>
    );
};

export default Register;
