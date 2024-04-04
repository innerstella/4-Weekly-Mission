import Image from "next/image";
import { useRef, useState } from "react";

import EYE_OFF from "@/public/assets/signin/eye-off.svg";
import EYE_ON from "@/public/assets/signin/eye-on.svg";

import S from "./Input.module.scss";

interface InputProps {
  inputType: "email" | "password";
}

const Input = ({ inputType }: InputProps) => {
  const [isPwVisible, setIsPwVisible] = useState(false);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  if (inputType === "email") {
    return (
      <input
        className={S.input}
        required
        type="email"
        placeholder="내용 입력"
      />
    );
  } else if (inputType === "password") {
    return (
      <div className={S.pwContainer}>
        <input
          className={S.input}
          required
          type={isPwVisible ? "text" : "password"}
          placeholder="내용 입력"
          ref={passwordRef}
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

export default Input;
