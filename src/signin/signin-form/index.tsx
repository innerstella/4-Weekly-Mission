import Image from "next/image";
import { useRef, useState } from "react";

import EYE_OFF from "@/public/assets/signin/eye-off.svg";
import EYE_ON from "@/public/assets/signin/eye-on.svg";
import { validateEmail, validatePassword } from "@/src/utils/validation";

import I from "./Input.module.scss";
import S from "./SigninForm.module.scss";
import SigninButton from "../signin-button";

const SigninForm = () => {
  const [isPwVisible, setIsPwVisible] = useState(false);

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const validateEmailResult = validateEmail(email as string);
    const validatePasswordResult = validatePassword(password as string);

    setEmailError(validateEmailResult as string);
    setPasswordError(validatePasswordResult as string);

    if (validateEmailResult !== true || validatePasswordResult !== true) {
      return;
    } else {
      // TODO: 로그인 API 호출
      alert("로그인 성공");
    }
  };

  const handleFocusOut = () => {
    alert("focus out");
  };

  return (
    <form className={S.container} onSubmit={handleSubmit}>
      <label htmlFor="email" className={S.label}>
        이메일
      </label>
      <input
        id="email"
        className={`${I.input} ${emailError.length > 0 && I.error}`}
        required
        type="email"
        placeholder="내용 입력"
        ref={emailRef}
        onBlur={handleFocusOut}
      />
      {emailError.length > 0 && (
        <span className={I.errorText}>{emailError}</span>
      )}
      <label htmlFor="password" className={S.label}>
        비밀번호
      </label>
      <div className={I.pwContainer}>
        <input
          id="password"
          className={`${I.input} ${passwordError.length > 0 && I.error}`}
          required
          type={isPwVisible ? "text" : "password"}
          placeholder="내용 입력"
          ref={passwordRef}
        />
        <div className={I.eyeContainer}>
          <Image
            className={I.eye}
            src={isPwVisible ? EYE_ON : EYE_OFF}
            alt="비밀번호 보기"
            objectFit="cover"
            fill
            onClick={() => setIsPwVisible(!isPwVisible)}
          />
        </div>
      </div>
      {passwordError.length > 0 && (
        <span className={I.errorText}>{passwordError}</span>
      )}
      <SigninButton />
    </form>
  );
};

export default SigninForm;
