import Image from "next/image";

import GOOGLE_IMAGE from "@/public/assets/signin/google.png";
import KAKAO_IMAGE from "@/public/assets/signin/kakao.svg";

import S from "./SocialLogin.module.scss";

const SocialLogin = () => {
  return (
    <div className={S.container}>
      <span className={S.text}>소셜 로그인</span>
      <div className={S.sns}>
        <div className={S.google}>
          <Image src={GOOGLE_IMAGE} alt="google login" />
        </div>
        <div className={S.kakao}>
          <Image src={KAKAO_IMAGE} alt="kakao login" />
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
