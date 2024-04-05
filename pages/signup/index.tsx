import ChangeSignInUp from "@/src/signin-signup/change-signin-up";
import Layout from "@/src/signin-signup/layout";
import SignupForm from "@/src/signin-signup/signup-form";
import SocialLogin from "@/src/signin-signup/social-login";

export default function SignupPage() {
  return (
    <Layout>
      <ChangeSignInUp currPage="signup" />
      <SignupForm />
      <SocialLogin currPage="signup" />
    </Layout>
  );
}
