import React from "react";
import logo from './assets/stackedsquad-logos/ss-full.png'
import discord from "./assets/discord.png";

function Login() {
  return (
    <div className="flex flex-col rounded-lg bg-slate-800 p-8 inline">
      <img src={logo} className='object-fill w-[500px]'></img>
      <p className='mt-1'>
        Don't have an account? <a>Sign up.</a>
      </p>
      <div className="flex flex-col gap-3 mt-3 mb-3">
        <input className="h-9 pl-2" placeholder="Username/Email"></input>
        <input className="h-9 pl-2" placeholder="Password"></input>
        <button>Sign In</button>
      </div>
      ------------ OR ------------
      <div id='oauth-btns' className='flex flex-col gap-1 mt-2'>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            class="mr-2 -ml-1 w-4 h-4"
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
          Sign in with Google
        </button>
        <button
          type="button"
          className="text-white bg-[#5865F2] hover:bg-[#5865F2]/90 focus:ring-4 focus:ring-[##5865F2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#5865F2]/55 mr-2 mb-2"
        >
          <img src={discord} className="w-[22px] mr-[6px] -ml-2" />
          Sign in with Discord
        </button>
      </div>
    </div>
  );
}

export default Login;
