import Image from "next/image";
import Link from "next/link";

import { SOCIAL_LOGIN_LIST } from "./constants";
import S from "./SocialLogin.module.scss";

interface SocialLoginProps {
  currPage: "signin" | "signup";
}

const INFO_TEXT = {
  signin: "소셜 로그인",
  signup: "다른 방식으로 가입하기",
};

const SocialLogin = ({ currPage }: SocialLoginProps) => {
  return (
    <div className={S.container}>
      <span className={S.text}>{INFO_TEXT[currPage]}</span>
      <div className={S.sns}>
        {SOCIAL_LOGIN_LIST.map((sns) => {
          return (
            <Link href={sns.url} key={sns.name} className={S[sns.name]}>
              <Image src={sns.image} alt={`${sns.name} login`} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLogin;
