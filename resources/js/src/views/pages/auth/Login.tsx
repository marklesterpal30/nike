import React, { useState } from "react";
import nikelogo from "../../assets/nikelogo.jpg";
import nikeswoosh from "../../assets/nikelogowhite.jpg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import apiService from "../../../services/ApiService";

const Login = () => {
    //NAVIGATTION
    const navigate = useNavigate();
    const goToRegister = () => {
        navigate("/register");
    };

    //TOGGLE PASSWORD
    const [isPassswordVisible, setIsPasswordVisible] = useState(false);
    const togglePassword = () => {
        setIsPasswordVisible(!isPassswordVisible);
    };

    //AXIOS API LOGIN
    const { register, handleSubmit } = useForm();
    const Login = (data) => {
        apiService;
        apiService
            .post("auth/login", data)
            .then((response) => {
                console.log(response.data.message);
                if ((response.status = 200)) {
                    navigate("/home");
                }
            })
            .catch((error) => {
                console.log("error k boi");
            });
    };

    return (
        <div className="flex h-screen">
            {/* LEFT SIDE IMAGE */}
            <div className="w-1/2 hidden md:flex items-center justify-center">
                <img src={nikelogo} alt="Nike logo" />
            </div>
            {/* RIGHT SIDE IMAGE */}
            <div className="w-full md:w-1/2 bg-black">
                <form
                    onSubmit={handleSubmit(Login)}
                    className="mt-4 px-4 md:p-6 md:px-32 rounded-md text-white"
                >
                    <div className="flex justify-center">
                        <img
                            src={nikeswoosh}
                            className="w-24"
                            alt="nike swoosh"
                        />
                    </div>
                    <h1 className="font-cal tracking-wider text-center -mt-1">
                        YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
                    </h1>

                    {/* EMAIL AND PASSWORD INPUT */}
                    <div className="space-y-4 font-inter font-medium mt-20 md:mt-4">
                        {/* INPUT EMAIL */}
                        <div>
                            <input
                                {...register("email")}
                                type="text"
                                className="w-full border border-white py-3 px-2 rounded-sm bg-black text-white placeholder-white focus:outline-none"
                                placeholder="Email"
                            />
                        </div>

                        {/* INPUT PASSWORD */}
                        <div className="relative">
                            <input
                                {...register("password")}
                                type={isPassswordVisible ? "text" : "password"}
                                className="w-full border border-white py-3 px-2 rounded-sm bg-black text-white placeholder-white focus:outline-none"
                                placeholder="Password"
                            />
                            <i
                                onClick={togglePassword}
                                className={`fa-solid  ${
                                    isPassswordVisible
                                        ? "fa-eye-slash"
                                        : "fa-eye"
                                } absolute top-4 right-5`}
                            ></i>
                        </div>
                    </div>

                    <div className="py-6 font-inter tracking-tighter flex justify-between items-center">
                        <div className="flex space-x-1 items-center">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-sm rounded-md bg-white"
                            />
                            <h2 className="tracking-tight text-white">
                                Remember me
                            </h2>
                        </div>
                        <a href="" className="text-white underline">
                            Forgot Password?
                        </a>
                    </div>

                    {/* LOGIN AND REGISTER BUTTONS */}
                    <div className="space-y-2 font-inter">
                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-black rounded-md font-medium"
                        >
                            LOGIN
                        </button>
                        <button
                            type="button"
                            onClick={goToRegister}
                            className="w-full py-3 bg-white text-black rounded-md font-medium"
                        >
                            REGISTER
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-6 md:mt-3">
                        <div className="bg-white/90 h-0.5 w-full"></div>
                        <p className="w-full text-center">Or Register With</p>
                        <div className="bg-white/90 h-0.5 w-full"></div>
                    </div>

                    <div className="flex justify-evenly mt-6 md:mt-3 items-center">
                        <button className="flex items-center justify-center space-x-1 bg-white w-28 px-4 py-2 rounded-sm">
                            <i className="fa-brands fa-google text-black"></i>
                            <p className="text-black font-semibold">Google</p>
                        </button>
                        <button className="flex items-center justify-center space-x-1 bg-white w-28 px-4 py-2 rounded-sm">
                            <i className="fa-brands fa-apple text-black"></i>
                            <p className="text-black font-semibold">Apple</p>
                        </button>
                    </div>

                    <p className="mt-3 text-white text-sm text-center">
                        By logging in, you agree to Nike's
                        <span className="underline"> Privacy Policy </span> and
                        <span className="underline"> Terms of Use.</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
