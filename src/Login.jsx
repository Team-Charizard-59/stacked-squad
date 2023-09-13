import React from "react";
import logo from "./assets/stackedsquad-logos/ss-full.png";
import discord from "./assets/discord.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const loginAccount = () => {
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((data) => {
        navigate('/')  
      }
      )
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col rounded-lg bg-slate-800 p-8 inline min-w-fit items-center">
      <img
        src={logo}
        className="object-none object-[50%] w-[600px] h-[100px]"
      ></img>
      <p className="mt-1">
        Don't have an account? <Link to={"/signup"}>Create an account.</Link>
      </p>
      <div className="flex flex-col gap-3 mt-3 mb-3">
        <input
          className="h-9 pl-2 w-[482px] rounded-lg"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        ></input>
        <input
          className="h-9 pl-2 w-[482px] rounded-lg"
          placeholder="Password"
          type='password'
          onChange={e => setPassword(e.target.value)}
        ></input>
        <button className="w-[482px] rounded-lg bg-primary h-10" onClick={()=>loginAccount()}>Login</button>
      </div>
      ------------ OR ------------
      <div id="oauth-btns" className="flex flex-col gap-1 mt-2">
        <button
          type="button"
          className="text-white bg-[#4285F4] px-[10rem] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="mr-2 -ml-1 w-4 h-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Login with Google
        </button>
        <button
          type="button"
          className="text-white bg-[#5865F2] px-[10rem] hover:bg-[#5865F2]/90 focus:ring-4 focus:ring-[##5865F2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#5865F2]/55 mr-2 mb-2"
        >
          <img src={discord} className="w-[22px] mr-[6px] -ml-2" />
          Login with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
