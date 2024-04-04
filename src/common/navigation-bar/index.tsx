import Image from "next/image";
import Link from "next/link";

import LOGO_IMAGE from "@/public/assets/common/linkbrary.svg";
import Cta from "@/src/common/cta";
import Profile from "@/src/common/profile";

import S from "./NavigationBar.module.scss";

interface NavigationBarProps {
  profile: {
    imageSource: string;
    email: string;
  } | null;
}

const NavigationBar = ({ profile }: NavigationBarProps) => {
  return (
    <nav className={S.container}>
      <div className={S.items}>
        <Link href="/" className={S.logo}>
          <Image src={LOGO_IMAGE} alt="서비스 로고" fill objectFit="cover" />
        </Link>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link href="/signin">
            <Cta>
              <span className={S.cta}>로그인</span>
            </Cta>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
