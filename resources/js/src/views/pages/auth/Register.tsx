import React from "react";
import niketext from "../../assets/niketext.png";
import nikeswoosh from "../../assets/nikeswoosh.png";
import nikewhite from "../../assets/nikelogowhite.jpg";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/");
    };

    return (
        <div className="flex  font-inter h-screen">
            <div className="px-12 py-12 w-2/3 ">
                <div className="flex -space-x-3">
                    <img
                        src={nikeswoosh}
                        className="w-16 h-18"
                        alt="nikeswoosh"
                    />
                    <img src={niketext} className="w-16" alt="niketext" />
                </div>
                <div className="mt-4 px-32">
                    <h2 className="font-bold text-center text-4xl">
                        Create an Account
                    </h2>
                    <p className="text-center text-gray-400 mt-4">
                        Join now to streamline your experience from day one
                    </p>
                    <div className="mt-8">
                        <label
                            for="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            className=" border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label
                            for="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            className=" border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="nike@gmil.com"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className=" border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="*******"
                            required
                        />
                    </div>
                    <div className="mt-4">
                        <label
                            for="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className=" border border-black/95 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="*******"
                            required
                        />
                    </div>
                    <button className="bg-black w-full mt-4 text-white py-2.5 rounded-md">
                        Register
                    </button>
                    <p className="text-gray-500 text-sm text-center mt-4">
                        Already Have an account?{" "}
                        <span onClick={goToLogin} className="text-blue-600">
                            Sign in.
                        </span>
                    </p>
                </div>
            </div>
            <div className=" w-2/3 flex justify-center items-center bg-black/95">
                <img src={nikewhite} alt="" />
            </div>
        </div>
    );
};

export default Register;
