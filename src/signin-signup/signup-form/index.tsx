import { useState } from "react";

import {
  isEmailUnique,
  validateEmail,
  validatePassword,
} from "@/src/utils/validation";

import Input from "../input";
import SignButton from "../sign-button";
import S from "../signin-form/SignForm.module.scss";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [emailError, setEmailError] = useState<string | boolean>("");
  const [passwordError, setPasswordError] = useState<string | boolean>("");
  const [passwordCheckError, setPasswordCheckError] = useState<
    string | boolean
  >("");

  // 이메일 입력창 focus out 시 이메일 유효성 검사
  const handleEmailFocusOut = async () => {
    if (email.length === 0) {
      setEmailError("이메일을 입력해주세요.");
    } else if (validateEmail(email) !== true) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else if ((await isEmailUnique(email)) === false) {
      setEmailError("이미 사용 중인 이메일입니다.");
    } else {
      setEmailError("");
    }
  };

  // 비밀번호 입력창 focus out 시 비밀번호 유효성 검사
  const handlePasswordFocusOut = () => {
    if (password.length === 0) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (validatePassword(password) === false) {
      setPasswordError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
    } else {
      setPasswordError("");
    }
  };

  // 비밀번호 확인 유효성 검사
  const handlePasswordCheck = () => {
    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않아요.");
    } else {
      setPasswordCheckError("");
    }
  };

  return (
    <form className={S.container}>
      <label htmlFor="email" className={S.label}>
        이메일
      </label>
      <Input
        id="email"
        inputType="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        focusOutFunction={handleEmailFocusOut}
      />
      <label htmlFor="password" className={S.label}>
        비밀번호
      </label>
      <Input
        id="password"
        inputType="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        focusOutFunction={handlePasswordFocusOut}
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
      />
      <label htmlFor="password-check" className={S.label}>
        비밀번호 확인
      </label>
      <Input
        id="password-check"
        inputType="passwordCheck"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        error={passwordCheckError}
        focusOutFunction={handlePasswordCheck}
      />
      <SignButton currPage="signup" />
    </form>
  );
};

export default SignupForm;
