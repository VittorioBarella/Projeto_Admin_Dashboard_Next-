/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import useAuth from "../data/hook/useAuth";
import { IconAttention } from "../icons/index";

export default function Authentication() {
  const { register, login, loginGoogle } = useAuth();
  const [error, setError] = useState(null);
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function displayError(msg, timeInSeconds = 5) {
    setError(msg);
    setTimeout(() => setError(null), timeInSeconds * 1000);
  }

  async function submit() {
    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch (e) {
      displayError(e?.message ?? "Unknown error");
    }
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='hidden md:block md:w-1/2 lg:w-2/3'>
        <img
          src='https://source.unsplash.com/random'
          alt='Authentication Screen Image'
          className='h-screen w-full object-cover'
        />
      </div>
      <div className='m-10 w-full md:w-1/2 lg:w-1/3'>
        <h1
          className={`
                text-3xl font-bold mb-5
            `}
        >
          {mode === "login"
            ? "Login with your Account"
            : "Register on the Platform"}
        </h1>

        {error ? (
          <div
            className={`
                flex items-center
                bg-red-400 text-white py-3 px-5 my-2
                border border-red-700 rounded-lg
            `}
          >
            {IconAttention(7)}
            <span className='ml-3'>{error}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label='Email'
          type='email'
          value={email}
          valorMudou={setEmail}
          required
        />
        <AuthInput
          label='Password'
          type='password'
          value={password}
          valorMudou={setPassword}
          required
        />
        <button
          onClick={submit}
          className={`
                w-full bg-indigo-500 hover:bg-indigo-400
                text-white rounded-lg px-4 py-3 mt-6
            `}
        >
          {mode === "login" ? "Log in" : "Register"}
        </button>

        <hr className='my-6 border-gray-300 w-full' />

        <button
          onClick={loginGoogle}
          className={`
                w-full bg-red-500 hover:bg-red-400
                text-white rounded-lg px-4 py-3
            `}
        >
          Login with Google
        </button>
        {mode === "login" ? (
          <p className='mt-8'>
            New around here?
            <a
              onClick={() => setMode("register")}
              className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer ml-2
                `}
            >
              Create an account for free
            </a>
          </p>
        ) : (
          <p className='mt-8'>
            Already part of our community?
            <a
              onClick={() => setMode("login")}
              className={`
                text-blue-500 hover:text-blue-700 font-semibold
                cursor-pointer ml-2
            `}
            >
              Login with your Credentials
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
