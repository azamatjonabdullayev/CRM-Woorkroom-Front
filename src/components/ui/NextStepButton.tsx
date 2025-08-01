import React, { type JSX } from "react";
import type INextBtn from "../../types/NextStepBtn.interface";
import { GrFormNextLink } from "react-icons/gr";

export const NextStepButton: React.FC<INextBtn> = ({
  btnText,
  ...rest
}): JSX.Element => {
  return (
    <button
      {...rest}
      className={`bg-[#3f8cff] text-white h-12 py-3.5 px-10 rounded-2xl flex items-center justify-center gap-1.5 font-extrabold cursor-pointer text-base ${
        rest.className ?? ""
      }`}
    >
      {btnText}
      <GrFormNextLink className="size-6" />
    </button>
  );
};
