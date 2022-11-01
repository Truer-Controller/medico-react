import React from "react";
import FormLogin from "../../components/login/FormLogin";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-indigo-300">
      <div className="bg-white mx-auto max-w-md py-8 px-10 shadow-lg rounded-lg border-2 border-[#000]">
        <div className="flex flex-row justify-center mb-4">
          <p>Bem vindo ao Login</p>
        </div>
        <FormLogin />
      </div>
    </div>
  );
}