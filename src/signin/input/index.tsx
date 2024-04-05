import Image from "next/image";
import { useState } from "react";

import EYE_OFF from "@/public/assets/signin/eye-off.svg";
import EYE_ON from "@/public/assets/signin/eye-on.svg";

import S from "./Input.module.scss";

interface InputProps {
  id: string;
  inputType: "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | boolean;
  focusOutFunction?: () => void;
}

const Input = ({
  inputType,
  value,
  onChange,
  error,
  focusOutFunction,
}: InputProps) => {
  const [isPwVisible, setIsPwVisible] = useState(false);

  if (inputType === "email") {
    return (
      <>
        <input
          className={`${S.input} ${
            typeof error === "string" && error.length > 0 && S.error
          }`}
          required
          type="email"
          placeholder="이메일을 입력해주세요."
          value={value}
          onChange={onChange}
          onBlur={focusOutFunction}
        />
        {typeof error === "string" && error.length > 0 && (
          <span className={S.errorText}>{error}</span>
        )}
      </>
    );
  } else if (inputType === "password") {
    return (
      <div className={S.pwContainer}>
        <input
          className={S.input}
          required
          type={isPwVisible ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          value={value}
          onChange={onChange}
        />
        <div className={S.eyeContainer}>
          <Image
            className={S.eye}
            src={isPwVisible ? EYE_ON : EYE_OFF}
            alt="비밀번호 보기"
            objectFit="cover"
            fill
            onClick={() => setIsPwVisible(!isPwVisible)}
            onBlur={focusOutFunction}
          />
        </div>
      </div>
    );
  }
};

export default Input;
