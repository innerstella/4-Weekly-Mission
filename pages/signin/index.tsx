import ChangeSignInUp from "@/src/signin-signup/change-signin-up";
import Layout from "@/src/signin-signup/layout";
import SigninForm from "@/src/signin-signup/signin-form";
import SocialLogin from "@/src/signin-signup/social-login";

export default function SigninPage() {
  return (
    <Layout>
      <ChangeSignInUp currPage="signin" />
      <SigninForm />
      <SocialLogin currPage="signin" />
    </Layout>
  );
}
