import React, { useState } from "react";
import type IInput from "../../types/Input.interface";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export const MyInput: React.FC<IInput> = ({
  forLabel,
  id,
  eyeIcon,
  placeholder,
}) => {
  const [isPasswordShown, setPasswordState] = useState(false);
  const [inputType, setInputType] = useState("text");

  const handleEyeBtnClick = () => {
    if (isPasswordShown) {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const inputWidthClass = eyeIcon ? "w-[90%]" : "w-full";

  return (
    <div>
      <label
        htmlFor={id}
        className="font-bold text-sm text-[#7d8592] select-none"
      >
        {forLabel}
      </label>
      <div className="rounded-2xl border-[0.3px] border-[#7d8592] flex items-center justify-center">
        <input
          className={`${inputWidthClass} h-12 outline-none pl-3.5 py-3`}
          type={inputType}
          id={id}
          placeholder={placeholder}
        />
        {eyeIcon ? (
          <button
            onClick={() => {
              setPasswordState(!isPasswordShown);
              handleEyeBtnClick();
            }}
            type="button"
          >
            {isPasswordShown ? (
              <IoEyeOff className="size-6 text-[#7d8592]" />
            ) : (
              <IoEye className="size-6 text-[#7d8592]" />
            )}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
