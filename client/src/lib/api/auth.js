import client from './client';

/* 로그인 */
export const login = ({ username, password }) => client.post('/api/auth/login', { username, password });

/* 로그아웃 */
export const logout = () => client.post('/api/auth/logout');

/* 회원 가입 */
export const register = ({ username, password, email }) => client.post('/api/auth/register', { username, password, email });

/* 로그인 상태 확인 */
export const check = () => client.get('/api/auth/check');