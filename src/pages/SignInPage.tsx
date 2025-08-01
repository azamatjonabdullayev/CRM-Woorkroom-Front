import React, { type JSX } from "react";
import logo from "../assets/logWhitVersione.svg";
import signInSVG from "../assets/signinIllustration.svg";

const SignInPage: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex items-center h-screen w-screen px-10 py-5">
        <section className="left-section w-1/2 h-full bg-[#3f8cff] flex flex-col justify-around items-center rounded-tl-4xl rounded-bl-4xl">
          <div className="logo-container flex items-center w-fit gap-6 text-white">
            <img src={logo} alt="logo" />
            <span className="text-3xl font-bold">Woorkroom</span>
          </div>

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
      </div>
    </>
  );
};

export default SignInPage;
