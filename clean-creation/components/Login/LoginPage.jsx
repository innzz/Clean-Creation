import React from "react";
import styles from "../../styles/component-styles/Login-styles/loginPage.module.css";
import Image from "next/image";
import { TextField } from "@mui/material"
import Link from "next/link"

function LoginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="w-0 lg:w-full h-0 lg:h-full">
        <img
          className="h-[40rem] w-[90rem] object-cover"
          src="https://cleancreations.com/data/config/login_image.jpg?md=5aa06eb7aa5a83d1992520b885d63182"
          alt=""
        />
      </div>
      <div className="">
        <div className="lg:ml-40 lg:mr-20  ml-5 mr-5 mt-32">
          <p className="text-xl text-gray-700 font-semibold">Login to BookOnePos</p>
          <p className="text-gray-400">To access your account please login with your email address and password.</p>
          <div className="border rounded-t-lg p-3 lg:mr-20">
            <label className="text-xs">Your Email</label>
            <TextField id="standard-basic" label="Your registered email" variant="standard" fullWidth />
          </div>
          <div className="border rounded-b-lg p-3 lg:mr-20 mb-3">
            <label className="text-xs">Password</label>
            <TextField id="standard-basic" label="" variant="standard" fullWidth />
          </div>
          <Link href="#">
            <a className="text-gray-400 hover:text-gray-400 lg:text-base text-xs">Dont have an account?</a>
          </Link>
          <Link href="#">
            <a className="text-gray-400 hover:text-gray-400 text-xs lg:text-base lg:ml-40 ml-32">Forgot password?</a>
          </Link><br />
          <div className="grid place-content-center mb-5 lg:mr-20">
            <button className="bg-lime-500 mt-5  rounded-2xl">
              <p className=" text-white lg:mx-44 mx-40 my-3">Login</p>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
