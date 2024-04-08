import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import handleLogin from "./handleLogin";
import S from "./SignForm.module.scss";
import SignInInput from "../input/signInInput";
import SignButton from "../sign-button";

export interface SignInFormValues {
  email: string;
  password: string;
}

const SigninForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({ mode: "onBlur" });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [signinError, setSigninError] = useState(false);

  useEffect(() => {
    setSigninError(false);

    errors.email ? setEmailError(true) : setEmailError(false);
    errors.password ? setPasswordError(true) : setPasswordError(false);
  }, [errors.email, errors.password]);

  // 로그인 버튼 클릭 시 이메일, 비밀번호 유효성 검사 후 로그인 API 호출
  const submitSignIn: SubmitHandler<SignInFormValues> = (data) => {
    const email = data.email;
    const password = data.password;

    if (emailError === false && passwordError === false) {
      handleLogin({ email, password }).then((res) => {
        if (res === true) {
          router.push("/folder");
        } else {
          setSigninError(true);
          setEmailError(true);
          setPasswordError(true);
        }
      });
    }
  };

  return (
    <form className={S.container} onSubmit={handleSubmit(submitSignIn)}>
      <label htmlFor="email" className={S.label}>
        이메일
      </label>
      <SignInInput
        id="email"
        inputType="email"
        error={emailError}
        register={register}
      />
      {signinError && (
        <span className={S.errorText}>이메일을 확인해주세요.</span>
      )}
      {errors.email && (
        <span className={S.errorText}>{errors.email?.message}</span>
      )}
      <label htmlFor="password" className={S.label}>
        비밀번호
      </label>
      <SignInInput
        id="password"
        inputType="password"
        error={passwordError}
        register={register}
      />
      {signinError && (
        <span className={S.errorText}>비밀번호를 확인헤주세요.</span>
      )}
      {errors.password && (
        <span className={S.errorText}>{errors.password?.message}</span>
      )}
      <SignButton currPage="signin" />
    </form>
  );
};

export default SigninForm;
