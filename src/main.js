/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 17:32:34
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-11 18:06:26
 * @FilePath: /microDemo/demo-web/demo-web-login/src/main.js
 */
import { loadPublicPath, } from '@fe-micro/micro-core';
import { lifeCycle, render, } from '@/core/life-cycle';

loadPublicPath();

import '@/core/install';

const { bootstrap, mount, unmount, } = lifeCycle();
export { bootstrap, mount, unmount };

const __qiankun__ = window.__POWERED_BY_QIANKUN__;
if (!__qiankun__) {
    render();
}
