import React from "react";
import logo from "../../../assets/logo.png";

export default function Signup() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden loginBg">
      <div className="max-w-sm  p-6 m-auto bg-[#181818] border border-[#b4903a] rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-1/2 " />
        </div>
        <h1 className="text-3xl font-semibold text-center login_head underline">
          Sign Up
        </h1>
        <p className="signUp text-2xl">
          Create account to get ฿ 555 free ! to play and enjoy.
        </p>

        <div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md text-white  px-1">
                First name
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md  text-white px-1">
                Last name
              </label>
              <div className="flex">
            
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md text-white  px-1">
             Date of Birth
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="mm/dd/yyyy"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md  text-white px-1">
Country
              </label>
              <div className="flex">
            
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="India"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md text-white  px-1">
                City
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md  text-white px-1">
                Phone No
              </label>
              <div className=" flex border-[#b4903a] border  focus:border-[#b4903a] ">
<span className="bg-[#b4903a] text-white   p-2 ">+91</span>
                <input
                  type="number"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border  "
                  placeholder="Phone No" 
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md text-white  px-1">
                Username
              </label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md  text-white px-1">
                Email
              </label>
              <div className="flex">
            
                <input
                  type="text"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md text-white  px-1">
                Password
              </label>
              <div className="flex">
                <input
                  type="password"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="w-1/2 px-3 mb-5">
              <label htmlFor="" className="text-md  text-white px-1">
                Confirm Password
              </label>
              <div className="flex">
            
                <input
                  type="Password"
                  className="w-full  pl-5 pr-3 py-2 bg-transparent border border-[#b4903a] focus:border focus:border-[#b4903a]"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
          </div>



          {/* <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Email
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="email"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="johnsmith@example.com"
                />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-12">
              <label htmlFor="" className="text-xs font-semibold px-1">
                Password
              </label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                  <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                </div>
                <input
                  type="password"
                  className="w-full -ml-10 pl-5 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                  placeholder="************"
                />
              </div>
            </div>
          </div> */} <a href="#" className="text-[14px] text-white ">
            <label>
              {" "}
              <input type="checkbox" name="remember me" id="" /> I agree with Promotions Details , Payment Guaranteed Policy , Privacy and Policy , Terms and Condition
            </label>
          </a>
          <div className="flex ">
            <div className="w-full px-3 mb-5">
                
              <button className="block  max-w-xs w-full  mx-auto loginbtn">
                Sign Up
              </button>
            </div>
          </div>
        </div>

      

        <p className=" text-md font-light text-center text-white">
          {" "}
       Have an account?{" "}
          <a href="#" className=" text-[#b4903a] hover:underline">
            Sign in here
          </a>
        </p>
        <p className=" text-md font-light text-center text-white">
          {" "}
       
          <a href="#" className=" text-[#b4903a] hover:underline">
            Forgot password?
          </a>
        </p>
      </div>
    </div>
  );
}
