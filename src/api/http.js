/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 16:00:33
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 18:12:23
 * @FilePath: /microDemo/demo-web/demo-web-login/src/api/http.js
 */
import BasicHTTP from '@fe-micro/micro-http';

// 非 production 使用配置的 baseURL
const { NODE_ENV, VUE_APP_BASE_API_GW, } = process.env;
if (NODE_ENV && NODE_ENV !== 'production' && VUE_APP_BASE_API_GW) {
    BasicHTTP.__http__.defaults.baseURL = VUE_APP_BASE_API_GW;
}

export { BasicHTTP };
