export const EMAIL_REGREX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
export const PASSWORD_REGREX = /^(.{1,7}|[a-zA-Z]+|\d+)$/;

/**
 * 이메일 주소의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} email - 입력된 이메일 주소
 * @returns {: boolean | string } - 이메일 주소의 유효성 검사 결과
 */
export function validateEmail(email: string): boolean | string {
  if (!EMAIL_REGREX.test(email)) {
    return "올바른 이메일 주소가 아닙니다.";
  } else {
    return true;
  }
}

/**
 * 비밀번호의 유효성을 검사하고 에러 메시지를 표시
 *
 * @param {string} password
 * @returns {boolean | string} - 비밀번호의 유효성 검사 결과
 */
export function validatePassword(password: string): boolean | string {
  if (PASSWORD_REGREX.test(password)) {
    return "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.";
  } else {
    return true;
  }
}
