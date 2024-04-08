import { useRouter } from "next/router";
import { useEffect } from "react";

import ChangeSignInUp from "@/src/signin-signup/change-signin-up";
import Layout from "@/src/signin-signup/layout";
import SignupForm from "@/src/signin-signup/signup-form";
import SocialLogin from "@/src/signin-signup/social-login";
import { hasAccessToken } from "@/src/utils/hasAccessToken";

export default function SignupPage() {
  const router = useRouter();

  useEffect(() => {
    hasAccessToken() && router.push("/folder");
  }, []);
  return (
    <Layout>
      <ChangeSignInUp currPage="signup" />
      <SignupForm />
      <SocialLogin currPage="signup" />
    </Layout>
  );
}
