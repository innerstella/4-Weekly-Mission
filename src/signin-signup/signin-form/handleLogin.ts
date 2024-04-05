import axiosInstance from "@/lib/axios";

interface handleLoginProps {
  email: string;
  password: string;
}

const handleLogin = async ({ email, password }: handleLoginProps) => {
  const result = await axiosInstance
    .post("/sign-in", {
      email: email,
      password: password,
    })
    .then(() => {
      return true;
    })
    .catch((err) => {
      return false;
    });

  return result;
};

export default handleLogin;
