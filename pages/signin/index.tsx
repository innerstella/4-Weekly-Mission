import { useRouter } from "next/router";
import { useEffect } from "react";

import ChangeSignInUp from "@/src/signin-signup/change-signin-up";
import Layout from "@/src/signin-signup/layout";
import SigninForm from "@/src/signin-signup/signin-form";
import SocialLogin from "@/src/signin-signup/social-login";
import { hasAccessToken } from "@/src/utils/hasAccessToken";

export default function SigninPage() {
  const router = useRouter();

  useEffect(() => {
    hasAccessToken() && router.push("/folder");
  }, []);

  return (
    <Layout>
      <ChangeSignInUp currPage="signin" />
      <SigninForm />
      <SocialLogin currPage="signin" />
    </Layout>
  );
}
