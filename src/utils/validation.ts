import axiosInstance from "@/lib/axios";

export const EMAIL_REGREX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGREX = /^(.{1,7}|[a-zA-Z]+|\d+)$/;

/**
 * 이메일 주소의 유효성을 검사
 *
 * @param {string} email - 입력된 이메일 주소
 * @returns { boolean } - 이메일 주소의 유효성 검사 결과
 */
export function validateEmail(email: string): boolean {
  if (!EMAIL_REGREX.test(email)) {
    return false;
  } else {
    return true;
  }
}

/**
 *  중복된 이메일 주소인지 검사
 *
 * @param {string} email - 입력된 이메일 주소
 * @returns  {Promise<boolean>} - 이메일 주소의 중복 검사 결과
 */
export async function isEmailUnique(email: string): Promise<boolean> {
  return await axiosInstance
    .post("/check-email", { email: email })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
}

/**
 * 비밀번호의 유효성을 검사
 *
 * @param {string} password
 * @returns {boolean } - 비밀번호의 유효성 검사 결과
 */
export function validatePassword(password: string): boolean {
  if (PASSWORD_REGREX.test(password)) {
    return false;
  } else {
    return true;
  }
}
