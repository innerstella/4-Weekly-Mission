import Footer from "@/src/common/footer";
import NavigationBar from "@/src/common/navigation-bar";

import S from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const profile = null; // dummmy data

  return (
    <div>
      <NavigationBar profile={profile} />
      <main className={S.container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
