import React, { type JSX } from "react";
import logo from "../assets/logWhitVersione.svg";
import signInSVG from "../assets/signinIllustration.svg";
import { MyInput } from "../components/ui/Input";
import { NextStepButton } from "../components/ui/NextStepButton";
import { Link } from "react-router-dom";

const SignInPage: React.FC = (): JSX.Element => {
  return (
    <div className="flex items-center h-screen w-screen px-10 py-5 bg-[#f4f9fd]">
      <section className="left-section w-1/2 h-full bg-[#3f8cff] flex flex-col justify-around items-center rounded-tl-4xl rounded-bl-4xl">
        <Link
          to={"/"}
          className="logo-container flex items-center w-fit gap-6 text-white"
        >
          <img src={logo} alt="logo" />
          <span className="text-3xl font-bold">Woorkroom</span>
        </Link>

        <p className="font-bold text-[40px] text-white">
          Your place to work
          <br />
          <span>Plan. Create. Control.</span>
        </p>

        <img
          src={signInSVG}
          alt="picture"
          className="pointer-events-none select-none"
        />
      </section>

      <section className="right-section w-1/2 h-full bg-white rounded-tr-4xl rounded-br-4xl flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Sign In to Woorkroom</h1>

        <form className="w-100 flex flex-col gap-2.5 mt-[30px]">
          <MyInput forLabel="Email" id="email" placeholder="Email" />

          <MyInput
            forLabel="Password"
            id="password"
            placeholder="••••••••"
            eyeIcon
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-3.5 w-fit">
              <input
                type="checkbox"
                id="rememberMe"
                className="size-5 rounded-2xl"
              />
              <label
                htmlFor="rememberMe"
                className="select-none text-[#7D8592]"
              >
                Remember me
              </label>
            </div>

            <button className="text-[#7D8592] cursor-pointer" type="button">
              Forgot password?
            </button>
          </div>
        </form>

        <NextStepButton btnText="Sign In" className="mt-12" />
        <Link
          to={"/register"}
          className="mt-5 font-semibold text-[#3f8cff] text-base"
        >
          <p>Don't have an account?</p>
        </Link>
      </section>
    </div>
  );
};

export default SignInPage;
