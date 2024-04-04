import S from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={S.background}>
      <div className={S.container}>{children}</div>
    </div>
  );
};

export default Layout;
