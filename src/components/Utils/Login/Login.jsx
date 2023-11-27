import React from "react";
import logo from "../../../assets/logo.png";

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden loginBg">
      <div className="max-w-sm  p-6 m-auto bg-[#181818] border border-[#b4903a] rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-1/2 " />
        </div>
        <h1 className="text-3xl font-semibold text-center login_head underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Username or Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
              placeholder="Username or Email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-white"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 bg-transparent border border-[#b4903a] "
              placeholder="Password"
            />
          </div>
          <a href="#" className="text-[14px] text-white ">
            <label>
              {" "}
              <input type="checkbox" name="remember me" id="" /> Remember Me
            </label>
          </a>
          <div className="mt-6">
            <button className="w-full px-4 py-2 loginbtn">Login</button>
          </div>
        </form>

        <p
          className=" text-md mt-3 text-center text-white
                font-normal"
        >
          {" "}
          Haven&#39;t an account?{" "}
          <a href="#" className="font-medium text-[#b4903a] hover:underline">
            Sign up
          </a>
        </p>
        <p
          className=" text-sm mt-3 text-center  text-[#b4903a]
                "
        >
          {" "}
          Forget Password
        </p>
      </div>
    </div>
  );
}
