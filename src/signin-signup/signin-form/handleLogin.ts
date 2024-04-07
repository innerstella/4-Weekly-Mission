import axiosInstance from "@/lib/axios";

interface handleLoginProps {
  email: string;
  password: string;
}

const handleLogin = async ({
  email,
  password,
}: handleLoginProps): Promise<boolean> => {
  return await axiosInstance
    .post("/sign-in", {
      email: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem("accessToken", res.data.data.accessToken);
      return true;
    })
    .catch((err) => {
      return false;
    });
};

export default handleLogin;
