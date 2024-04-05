import { useRouter } from "next/router";
import { useState } from "react";

import { validateEmail, validatePassword } from "@/src/utils/validation";

import handleLogin from "./handleLogin";
import S from "./SigninForm.module.scss";
import Input from "../input";
import SigninButton from "../signin-button";

const SigninForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | boolean>("");
  const [passwordError, setPasswordError] = useState<string | boolean>("");

  // 로그인 버튼 클릭 시 이메일, 비밀번호 유효성 검사 후 로그인 API 호출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateEmailResult = validateEmail(email);
    const validatePasswordResult = validatePassword(password);

    setEmailError(validateEmailResult);
    setPasswordError(validatePasswordResult);

    if (validateEmailResult !== true || validatePasswordResult !== true) {
      return;
    } else {
      handleLogin({ email, password }).then((res) => {
        if (res === true) {
          router.push("/folder");
        } else {
          setEmailError("이메일을 확인해주세요.");
          setPasswordError("비밀번호를 확인해주세요.");
        }
      });
    }
  };

  // 이메일 입력창 focus out 시 이메일 유효성 검사
  const handleEmailFocusOut = () => {
    if (email.length === 0) {
      setEmailError("이메일을 입력해주세요.");
    } else if (validateEmail(email) !== true) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
    } else {
      setEmailError("");
    }
  };

  // 비밀번호 입력창 focus out 시 비밀번호 유효성 검사
  const handlePasswordFocusOut = () => {
    if (password.length === 0) {
      setPasswordError("비밀번호를 입력해주세요.");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form className={S.container} onSubmit={handleSubmit}>
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
      />
      <SigninButton />
    </form>
  );
};

export default SigninForm;
