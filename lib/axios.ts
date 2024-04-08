import axios from "axios";

/**
 * axios 인스턴스 생성
 * 이 인스턴스를 실행할 때는 baseURL을 일일히 써줄 필요 없이 경로만 써주면 됨
 */
const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

export default axiosInstance;
