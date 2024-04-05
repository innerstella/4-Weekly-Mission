import ChangeSignInUp from "@/src/signin/change-signin-up";
import Layout from "@/src/signin/layout";

export default function SignupPage() {
  return (
    <Layout>
      <ChangeSignInUp currPage="signup" />
      <span>회원가입</span>
    </Layout>
  );
}
