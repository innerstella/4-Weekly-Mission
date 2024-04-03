import Footer from "@/src/common/footer";
import NavigationBar from "@/src/common/navigation-bar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const profile = null;

  return (
    <div>
      <NavigationBar profile={profile} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
