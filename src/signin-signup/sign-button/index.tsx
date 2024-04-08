import Cta from "@/src/common/cta";

import S from "./SignButton.module.scss";

interface SignButtonProps {
  currPage: "signin" | "signup";
}

const TEXT_LIST = {
  signin: "로그인",
  signup: "회원가입",
};

const SignButton = ({ currPage }: SignButtonProps) => {
  return (
    <Cta buttonType="submit">
      <span className={S.text}>{TEXT_LIST[currPage]}</span>
    </Cta>
  );
};

export default SignButton;
