import Image from "next/image";

import LOGO_IMAGE from "@/public/assets/common/linkbrary.svg";

import S from "./ChangeSigninUp.module.scss";

interface ChangeSignInUpProps {
  currPage: "signin" | "signup";
}

const ChangeSignInUp = ({ currPage }: ChangeSignInUpProps) => {
  return (
    <div className={S.container}>
      <div className={S.logo}>
        <Image src={LOGO_IMAGE} alt="서비스 로고" fill objectFit="cover" />
      </div>
      {currPage === "signin" ? (
        <div className={S.texts}>
          <span className={S.text}>회원이 아니신가요?</span>
          <button className={S.button}>
            <span>회원 가입하기</span>
          </button>
        </div>
      ) : (
        <div>
          <span>이미 회원이신가요?</span>
          <div>
            <span>로그인 하기</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeSignInUp;
