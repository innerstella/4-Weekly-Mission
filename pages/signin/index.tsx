import ChangeSignInUp from "@/src/signin/change-signin-up";
import Layout from "@/src/signin/layout";
import SigninForm from "@/src/signin/signin-form";
import SocialLogin from "@/src/signin/social-login";

export default function SigninPage() {
  return (
    <Layout>
      <ChangeSignInUp currPage="signin" />
      <SigninForm />
      <SocialLogin />
    </Layout>
  );
}
