import axiosInstance from "@/lib/axios";

interface handleSignUpProps {
  email: string;
  password: string;
}

const handleSignUp = async ({
  email,
  password,
}: handleSignUpProps): Promise<boolean> => {
  return await axiosInstance
    .post("/sign-up", {
      email: email,
      password: password,
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export default handleSignUp;
