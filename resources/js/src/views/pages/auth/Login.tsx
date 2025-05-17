import React, { useRef } from "react";
import nikelogo from "../../assets/nikelogo.jpg";
import nikeswoosh from "../../assets/nikelogowhite.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const goToRegister = () => {
        navigate("/register");
    };

    const passwordRef = useRef();
    const eyeRef = useRef();

    const togglePassword = () => {
        const input = passwordRef.current;
        const eye = eyeRef.current;

        if (input.type === "password") {
            input.type = "text";
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    };
    return (
        <div className="flex h-screen">
            <div className="w-1/2 flex items-center justify-center">
                <img src={nikelogo} alt="Nike logo" />
            </div>
            <div className="w-1/2 bg-black/95">
                <form
                    action=""
                    className="mt-4  p-6 px-32 rounded-md text-white"
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
                    <div className="space-y-4 font-inter font-medium mt-4">
                        <input
                            type="text"
                            className="w-full border border-white py-3 px-2 rounded-sm bg-black text-white placeholder-white focus:outline-none"
                            placeholder="Email"
                        />
                        <div className="relative">
                            <input
                                type="password"
                                ref={passwordRef}
                                className="w-full border border-white py-3 px-2 rounded-sm bg-black text-white placeholder-white focus:outline-none"
                                placeholder="Password"
                            />
                            <i
                                ref={eyeRef}
                                onClick={togglePassword}
                                className="fa-solid fa-eye absolute top-4 right-5"
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
                        <button className="w-full py-3 bg-white text-black rounded-md font-medium">
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

                    <div className="flex items-center justify-between mt-3">
                        <div className="bg-white/90 h-0.5 w-full"></div>
                        <p className="w-full text-center">Or Register With</p>
                        <div className="bg-white/90 h-0.5 w-full"></div>
                    </div>

                    <div className="flex justify-evenly  mt-3 items-center">
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
