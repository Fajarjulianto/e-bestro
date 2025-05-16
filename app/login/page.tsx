"use client";

import "@/styles/globals.css";

import React, { JSX } from "react";
import Head from "next/head";

//conmponents
import LogoGroup from "@/components/LogoGroup";
import RightPanel from "@/components/RightPanel";
import InputField from "@/components/login/inputField";

//supabase
import { login } from "./action";

export default function Page(): JSX.Element {
  return (
    <>
      <Head>
        <title>Login | e-BESTRO</title>
      </Head>

      <div className="flex min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-20 bg-[#F8F8F8]">
          <LogoGroup />
          <h1 className="text-3xl font-bold text-[#3A3A3A]">Login</h1>
          <p className="text-gray-500 mb-8">Enter your account details</p>

          <form className="space-y-5">
            <InputField
              name="email"
              placeholder="Email"
              type="text"
              required={true}
            />

            <InputField
              name="password"
              placeholder="Password"
              type="password"
              required={true}
            />

            <div className="text-sm text-gray-500 cursor-pointer hover:underline text-right">
              Forgot Password?
            </div>
            <button
              formAction={login}
              className="bg-secondary hover:bg-green-800 w-full p-4 rounded-2xl"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-xs text-gray-500 text-center">
            Dengan menggunakan aplikasi ini, Anda telah membaca dan menyetujui{" "}
            <span className="font-semibold">
              Kebijakan Penanganan Data dan Privasi
            </span>
            kami.
          </p>
        </div>

        <RightPanel />
      </div>
    </>
  );
}
