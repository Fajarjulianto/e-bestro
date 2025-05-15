
import React, { JSX,useState } from 'react';
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
          <LogoGroup />
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
        <RightPanel />
      </div>
    </>
  );
}
