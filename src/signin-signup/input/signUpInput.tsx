import Image from "next/image";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import EYE_OFF from "@/public/assets/signin/eye-off.svg";
import EYE_ON from "@/public/assets/signin/eye-on.svg";
import {
  isEmailUnique,
  validateEmail,
  validatePassword,
} from "@/src/utils/validation";

import S from "./Input.module.scss";
import { SignUpFormValues } from "../signup-form";

interface InputProps {
  id: string;
  inputType: "email" | "password" | "passwordCheck";
  error: boolean;
  register: UseFormRegister<SignUpFormValues>;
  password?: string;
}

/**
 *
 * @param {string} inputType - "email" | "password" | "passwordCheck"
 * @param {boolean} error - 에러 발생 시 true
 * @param {UseFormRegister<SignUpFormValues>} register - react-hook-form의 register
 * @param {string} password - 비밀번호 입력 시 비밀번호 확인과 비교하기 위한 값
 * @returns {JSX.Element} - 회원가입 페이지의 input
 */
const SignUpInput = ({ inputType, error, register, password }: InputProps) => {
  const [isPwVisible, setIsPwVisible] = useState(false);

  if (inputType === "email") {
    return (
      <input
        className={`${S.input} ${error === true && S.error}`}
        type="email"
        placeholder="이메일을 입력해주세요."
        {...register("email", {
          required: "이메일을 입력해주세요.",
          validate: {
            format: (value) =>
              validateEmail(value) || "올바른 이메일 주소가 아닙니다.",
            unique: async (value) =>
              (await isEmailUnique(value)) || "이미 사용 중인 이메일입니다.",
          },
        })}
      />
    );
  } else if (inputType === "password") {
    return (
      <div className={S.pwContainer}>
        <input
          className={`${S.input} ${error === true && S.error}`}
          required
          type={isPwVisible ? "text" : "password"}
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            validate: (value) =>
              validatePassword(value) ||
              "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
          })}
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
    );
  } else if (inputType === "passwordCheck") {
    return (
      <div className={S.pwContainer}>
        <input
          className={`${S.input} ${error === true && S.error}`}
          required
          type={isPwVisible ? "text" : "password"}
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          {...register("passwordCheck", {
            required: "비밀번호를 입력해주세요.",
            validate: (value) =>
              value === password || "비밀번호가 일치하지 않습니다.",
          })}
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
    );
  }
};

export default SignUpInput;
