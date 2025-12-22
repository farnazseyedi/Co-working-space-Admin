"use client";

import { useState } from "react";
import Image from "next/image";
import forlogin from "../../public/Home/forlogin.png"

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ username, password });
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-6 sm:px-10 lg:px-24">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

                <div className=" w-full lg:w-1/2 flex flex-col justify-center lg:justify-end">
                    <div className="flex text-3xl font-black text-white text-right mb-6">
                        فضای کار اشتراکی آکادمی مکین
                    </div>
                    <div className="bg-white w-full max-w-[500px] rounded-3xl shadow-2xl p-16 flex flex-col justify-center"
                        style={{ minHeight: "650px" }}>

                        <div>

                            <h2 className="text-3xl font-extrabold text-right mb-4">
                                ورود
                            </h2>

                            <p className="text-xl text-right mb-10">
                                نام کاربری و کلمه عبور خود را وارد نمایید.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-7">
                                <input
                                    type="text"
                                    placeholder="نام کاربری"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl py-3 px-5 text-right
                  focus:outline-none focus:ring-2 focus:ring-black"
                                />

                                <input
                                    type="password"
                                    placeholder="کلمه عبور"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-300 rounded-xl py-3 px-5 text-right
                  focus:outline-none focus:ring-2 focus:ring-black"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-blue-900 text-white py-3.5 rounded-xl
                  font-semibold hover:bg-blue-800 transition"
                                    style={{ marginTop: "80px" }}
                                >
                                    ورود
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={forlogin}
                        alt="Login Illustration"
                        className="w-[320px] sm:w-[420px] lg:w-[540px] h-auto"
                        priority
                    />
                </div>

            </div>
        </div>
    );
}