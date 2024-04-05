import Image from "next/image";
import Link from "next/link";

import { SOCIAL_LOGIN_LIST } from "./constants";
import S from "./SocialLogin.module.scss";

const SocialLogin = () => {
  return (
    <div className={S.container}>
      <span className={S.text}>소셜 로그인</span>
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
