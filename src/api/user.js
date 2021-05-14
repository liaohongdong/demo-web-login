/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 16:00:33
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-13 12:15:58
 * @FilePath: /microDemo/demo-web/demo-web-login/src/api/user.js
 */
import { BasicHTTP as http, } from '@/api/http';

export const loginByUsername = params => http.post('/user/login', params);
