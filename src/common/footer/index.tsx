import Image from "next/image";
import Link from "next/link";

import { LINK_LIST, SNS_LIST } from "./constants";
import S from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={S.container}>
      <div className={S.items}>
        <span className={S.copyright}>©codeit - 2023</span>
        <div className={S.links}>
          {LINK_LIST.map((link) => {
            return (
              <Link key={link.id} href={link.link} className="link">
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={S.icons}>
          {SNS_LIST.map((sns) => {
            return (
              <Link key={sns.id} href={sns.link} className={S.icon}>
                <Image src={sns.src} alt={sns.name} fill objectFit="cover" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
