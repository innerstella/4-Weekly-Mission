export const EMAIL_REGREX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGREX = /^(.{1,7}|[a-zA-Z]+|\d+)$/;

/**
 * 이메일 주소의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} email - 입력된 이메일 주소
 * @returns {: boolean } - 이메일 주소의 유효성 검사 결과
 */
export function validateEmail(email: string): boolean {
  if (!EMAIL_REGREX.test(email)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 비밀번호의 유효성을 검사하고 에러 메시지를 표시
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
