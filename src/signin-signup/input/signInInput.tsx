import Image from "next/image";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import EYE_OFF from "@/public/assets/signin/eye-off.svg";
import EYE_ON from "@/public/assets/signin/eye-on.svg";
import { validateEmail } from "@/src/utils/validation";

import S from "./Input.module.scss";
import { SignInFormValues } from "../signin-form";

interface InputProps {
  id: string;
  inputType: "email" | "password";
  error: boolean;
  register: UseFormRegister<SignInFormValues>;
}

/**
 *
 * @param {string} inputType - "email" | "password"
 * @param {boolean} error - 에러 발생 시 true
 * @param {UseFormRegister<SignInFormValues>} register - react-hook-form의 register
 * @returns {JSX.Element} - 로그인 페이지의 input
 */
const SignInInput = ({ inputType, error, register }: InputProps) => {
  const [isPwVisible, setIsPwVisible] = useState(false);

  if (inputType === "email") {
    return (
      <>
        <input
          className={`${S.input} ${error === true && S.error}`}
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요.",
            validate: (value) =>
              validateEmail(value) || "올바른 이메일 주소가 아닙니다.",
          })}
        />
      </>
    );
  } else if (inputType === "password") {
    return (
      <>
        <div className={S.pwContainer}>
          <input
            className={`${S.input} ${error === true && S.error}`}
            required
            type={isPwVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요."
            {...register("password", { required: "비밀번호를 입력해주세요." })}
          />
          <div className={S.eyeContainer}>
            <Image
              className={S.eye}
              src={isPwVisible ? EYE_ON : EYE_OFF}
              alt="비밀번호 보기"
              objectFit="cover"
              fill
              onClick={() => setIsPwVisible(!isPwVisible)}
            />
          </div>
        </div>
      </>
    );
  }
};

export default SignInInput;
