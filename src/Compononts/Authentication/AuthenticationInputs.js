import React, { useState } from "react";

import AuthenticationInput from "./AuthenticationInput/AuthenticationInput";
import { FaUser, FaLock } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";

const AuthenticationInputs = (props) => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleClick = () => {
    if (haveAccount) {
      setHaveAccount(false);
    } else {
      setHaveAccount(true);
    }

    console.log(haveAccount);
  };
  return (
    <div className="h-screen w-full flex justify-center flex-col items-center relative">
      <div className={`absolute top-0 left-0 w-full h-full z-0 blur-sm`}>
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[#030303] z-10 blur-sm`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-fit">
            <div className="absolute top-[50%] left-1/4 w-0 h-0 shadow-blue10xl"></div>
            <div className="absolute top-[10%] left-1/3 w-0 h-0 shadow-pink10xl"></div>
          </div>
        </div>
      </div>
      <div className="glassBg md:w-96 w-4/5 h-fit pb-9 pt-[93px] relative z-50">
        <LuUser2 className="absolute text-white bg-slate-950 md:w-40 md:h-40 w-32 h-32 rounded-full p-8 top-[-64px] md:-top-20 left-1/2 -translate-x-1/2 shadow-2xl" />
        {haveAccount ? (
          <div className="w-full h-full flex gap-y-5 flex-col justify-center items-center">
            <AuthenticationInput type="text" placeholder="Email ID">
              <FaUser className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>
            <AuthenticationInput type="password" placeholder="Password">
              <FaLock className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>

            <div className="flex flex-row md:text-sm text-xs w-4/5 mt-3 justify-between text-gray-300">
              <div className="flex flex-row gap-x-2 justify-center items-center">
                <input type="checkbox" className="accent-slate-950" />
                <label>Remember me</label>
              </div>

              <div>Forget password</div>
            </div>
            <button className="pointer text-gray-300" onClick={handleClick}>
              Create account
            </button>
          </div>
        ) : (
          <div className="w-full h-full flex gap-y-2 flex-col justify-center items-center">
            <AuthenticationInput type="text" placeholder="First Name">
              <FaUser className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>
            <AuthenticationInput type="text" placeholder="Sec Name">
              <FaUser className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>
            <AuthenticationInput type="text" placeholder="Email Address">
              <FaUser className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>
            <AuthenticationInput type="password" placeholder="Password">
              <FaLock className="absolute left-0 top-0 w-12 h-12  p-[15px] text-white bg-slate-950" />
            </AuthenticationInput>

            <button className="pointer text-gray-300" onClick={handleClick}>
              Have account ?
            </button>
          </div>
        )}
      </div>

      <button
        onClick={props.Auth}
        className="glassBg text-white z-30 px-4 py-2 md:w-80 w-3/5 mt-5 shadow-2xl"
      >
        {haveAccount ? "Log in" : "Create Account"}
      </button>
    </div>
  );
};

export default AuthenticationInputs;
