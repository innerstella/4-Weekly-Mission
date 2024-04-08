import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  isEmailUnique,
  validateEmail,
  validatePassword,
} from "@/src/utils/validation";

import handleSignUp from "./handleSignUp";
import SignUpInput from "../input/signUpInput";
import SignButton from "../sign-button";
import S from "../signin-form/SignForm.module.scss";

export interface SignUpFormValues {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignupForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormValues>({ mode: "onBlur" });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);

  useEffect(() => {
    errors.email ? setEmailError(true) : setEmailError(false);
    errors.password ? setPasswordError(true) : setPasswordError(false);
    errors.passwordCheck
      ? setPasswordCheckError(true)
      : setPasswordCheckError(false);
  }, [errors.email, errors.password, errors.passwordCheck]);

  // 회원가입
  const submitSignUp: SubmitHandler<SignUpFormValues> = (data) => {
    const email = data.email;
    const password = data.password;

    if (
      emailError === false &&
      passwordError === false &&
      passwordCheckError === false
    ) {
      handleSignUp({ email, password }).then((res) => {
        if (res === true) {
          router.push("/folder");
        }
      });
    }
  };

  return (
    <form className={S.container} onSubmit={handleSubmit(submitSignUp)}>
      <label htmlFor="email" className={S.label}>
        이메일
      </label>
      <SignUpInput
        id="email"
        inputType="email"
        error={emailError}
        register={register}
      />
      {errors.email && (
        <span className={S.errorText}>{errors.email?.message}</span>
      )}
      <label htmlFor="password" className={S.label}>
        비밀번호
      </label>
      <SignUpInput
        id="password"
        inputType="password"
        error={passwordError}
        register={register}
      />
      {errors.password && (
        <span className={S.errorText}>{errors.password?.message}</span>
      )}
      <label htmlFor="passwordCheck" className={S.label}>
        비밀번호 확인
      </label>
      <SignUpInput
        id="passwordCheck"
        inputType="passwordCheck"
        error={passwordCheckError}
        register={register}
        password={watch("password")}
      />
      <span className={S.errorText}>{errors.passwordCheck?.message}</span>
      <SignButton currPage="signup" />
    </form>
  );
};

export default SignupForm;
