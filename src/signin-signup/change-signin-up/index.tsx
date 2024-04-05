import Image from "next/image";
import Link from "next/link";

import LOGO_IMAGE from "@/public/assets/common/linkbrary.svg";

import S from "./ChangeSigninUp.module.scss";
import { SIGN_TEXT_LIST } from "./constants";

interface ChangeSignInUpProps {
  currPage: "signin" | "signup";
}

const ChangeSignInUp = ({ currPage }: ChangeSignInUpProps) => {
  return (
    <div className={S.container}>
      <div className={S.logo}>
        <Image src={LOGO_IMAGE} alt="서비스 로고" fill objectFit="cover" />
      </div>
      <div className={S.texts}>
        <span className={S.text}>{SIGN_TEXT_LIST[currPage].infoText}</span>
        <Link href={SIGN_TEXT_LIST[currPage].to}>
          <button className={S.button}>
            <span>{SIGN_TEXT_LIST[currPage].buttonText}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChangeSignInUp;
