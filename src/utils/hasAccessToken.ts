/**
 *
 * @returns {boolean} - 엑세스 토큰이 있는지 여부
 */
export function hasAccessToken(): boolean {
  return localStorage.getItem("accessToken") !== null;
}
