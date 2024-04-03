import S from "./Cta.module.scss";

interface CtaProps {
  children: React.ReactNode;
}

const Cta = ({ children }: CtaProps) => {
  return <div className={S.container}>{children}</div>;
};

export default Cta;
