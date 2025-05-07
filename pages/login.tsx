
import React, { useState } from 'react';
import Head from 'next/head';
import InputField from '@/components/InputFields';
import Button from '@/components/Button';
import LogoGroup from '@/components/LogoGroup';
import RightPanel from '@/components/RightPanel';

export default function Login(): JSX.Element {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <>
      <Head>
        <title>Login | e-BESTRO</title>
      </Head>

      <div className="flex min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-20 bg-[#F8F8F8]">
<<<<<<< HEAD
          <LogoGroup />
=======
          {/* LOGO */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <img
              src="/petrokimia-logo.png"
              alt="Petrokimia Gresik"
              className="h-12"
            />
            <img src="/bestro-logo.png" alt="Bestro" className="h-12" />
          </div>

>>>>>>> 7d2da8098a01aed44b85902d7b65dee42964f79e
          <h1 className="text-3xl font-bold text-[#3A3A3A]">Login</h1>
          <p className="text-gray-500 mb-8">Enter your account details</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              label=""
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <InputField
              label=""
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-sm text-gray-500 cursor-pointer hover:underline text-right">
              Forgot Password?
            </div>
            <Button type="submit" className="bg-secondary hover:bg-green-800">
              Login
            </Button>
          </form>

          <p className="mt-8 text-xs text-gray-500 text-center">
            Dengan menggunakan aplikasi ini, Anda telah membaca dan menyetujui{" "}
            <span className="font-semibold">
              Kebijakan Penanganan Data dan Privasi
            </span>{" "}
            kami.
          </p>
        </div>

<<<<<<< HEAD
        <RightPanel />
=======
        {/* KANAN: WELCOME & ILLUSTRASI */}
        <div className="relative hidden lg:flex w-1/2 items-center justify-center overflow-hidden bg-secondary">
          {/* Decorative Shapes */}
          <div className="absolute w-[300px] h-[309px] bg-primary rounded-full top-[100px] left-[-170px] opacity-90  z-0"></div>
          <div className="absolute   opacity-80 inset-0   z-0">
            <img src="/blob.svg" className="w-full h-full object-cover" />
          </div>
          {/* <div className="absolute w-[180px] h-[180px] bg-primary rounded-full top-[40%] left-[10%] opacity-80   z-0"></div>
  <div className="absolute w-[180px] h-[180px] bg-primary rounded-full top-[40%] left-[10%] opacity-80   z-0"></div>
  <div className="absolute w-[180px] h-[180px] bg-primary rounded-full top-[40%] left-[10%] opacity-80   z-0"></div>
  <div className="absolute w-[180px] h-[180px] bg-primary rounded-full top-[40%] left-[10%] opacity-80   z-0"></div>  */}

          {/* Teks + Ilustrasi */}
          <div className="z-10 text-center text-white px-10">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2 leading-tight">
              Welcome to
              <br />
              <span className="font-bold text-white text-4xl lg:text-5xl">
                e-BESTRO
              </span>
            </h1>
            <p className="text-sm text-gray-100 mt-1">
              Login to access your account
            </p>
            <img
              src="/welcome-illustration.png"
              alt="Ilustrasi"
              className="mt-8 w-[280px] lg:w-[350px] mx-auto"
            />
          </div>
        </div>
>>>>>>> 7d2da8098a01aed44b85902d7b65dee42964f79e
      </div>
    </>
  );
}
