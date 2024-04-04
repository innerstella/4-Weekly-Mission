import { useState } from "react";

import { validateEmail, validatePassword } from "@/src/utils/validation";

import S from "./SigninForm.module.scss";
import Input from "../input";
import SigninButton from "../signin-button";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState<string | boolean>("");
  const [passwordError, setPasswordError] = useState<string | boolean>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validateEmailResult = validateEmail(email);
    const validatePasswordResult = validatePassword(password);

    setEmailError(validateEmailResult);
    setPasswordError(validatePasswordResult);

    if (validateEmailResult !== true || validatePasswordResult !== true) {
      return;
    } else {
      // TODO: 로그인 API 호출 (week15?)
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
      <Input
        id="email"
        inputType="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
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
      />
      <SigninButton />
    </form>
  );
};

export default SigninForm;
