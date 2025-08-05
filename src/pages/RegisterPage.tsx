import React from "react";
import { Camera } from "lucide-react";

const RegisterPage: React.FC = () => {
  return (
    <div className="h-screen bg-[#f3f9fd] py-5 pl-5 pr-10 flex items-center gap-7">
      <section className="left-side w-[30%] h-full bg-[#3f8cff] rounded-3xl"></section>

      <section className="right-side w-full h-full bg-white rounded-3xl">
        <Camera color="red" />
      </section>
    </div>
  );
};

export default RegisterPage;
