import React from "react";
import nikelogo from "../../assets/nikelogo.jpg";
import nikeswoosh from "../../assets/nikeswoosh.png";

const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="w-2/3 flex items-center justify-center">
                <img src={nikelogo} alt="Nike logo" />
            </div>
            <div className="w-2/4 py-8 px-28">
                <form action="" className="mt-4">
                    <div className="flex justify-center">
                        <img
                            src={nikeswoosh}
                            className="w-24"
                            alt="nike soowhs"
                        />
                    </div>
                    <h1 className="font-cal tracking-wider text-center -mt-1">
                        YOUR ACCOUNT FOR <br /> EVERYTHING NIKE
                    </h1>
                    {/* EMAIL AND PASSWORD INPUT */}
                    <div className="space-y-4 font-inter font-medium">
                        <input
                            type="text"
                            className="w-full border-2 border-gray-200 py-3 px-2 rounded-sm  focus:border-2"
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="w-full border-2 border-gray-200 py-3 px-2 rounded-sm  focus:border-2"
                            placeholder="Password"
                        />
                    </div>
                    <div className="py-4 font-inter tracking-tighter flex justify-between items-center">
                        <div className="flex space-x-1 items-center">
                            <input
                                type="checkbox"
                                className="checkbox rounded-md checkbox-sm"
                            />
                            <h2 className="tracking-tight text-black/70">
                                Remember me
                            </h2>
                        </div>
                        <a href="" className="text-black/70">
                            Forgot Password?
                        </a>
                    </div>
                    {/* LOGIN AND REGSITER BUTTON */}
                    <div className="space-y-2 font-inter">
                        <button className="w-full py-3 bg-black/95 text-white rounded-md font-medium">
                            LOGIN
                        </button>
                        <button className="w-full py-3 bg-black/95 text-white rounded-md font-medium">
                            REGISTER
                        </button>
                    </div>
                    <p className="mt-3 text-gray-500">
                        By logging in, you agree to Nike's
                        <span className="underline">
                            Privacy Policy
                        </span> and{" "}
                        <span className="underline"> Terms of Use.</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
