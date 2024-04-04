import Cta from "@/src/common/cta";

import S from "./SigninButton.module.scss";

const SigninButton = () => {
  return (
    <Cta buttonType="submit">
      <span className={S.text}>로그인</span>
    </Cta>
  );
};

export default SigninButton;
