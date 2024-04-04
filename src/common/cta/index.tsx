import S from "./Cta.module.scss";

interface CtaProps {
  children: React.ReactNode;
  buttonType?: "button" | "submit";
}

const Cta = ({ children, buttonType = "button" }: CtaProps) => {
  return (
    <button type={buttonType} className={S.container}>
      {children}
    </button>
  );
};

export default Cta;
