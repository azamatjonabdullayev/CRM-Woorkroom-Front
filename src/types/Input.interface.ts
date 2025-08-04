import type { HTMLAttributes } from "react";

export default interface IInput extends HTMLAttributes<HTMLInputElement> {
  forLabel: string;
  placeholder: string;
  eyeIcon?: boolean;
}
