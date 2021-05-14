/*
 * @Author: hongdong.liao
 * @Date: 2021-05-07 17:32:34
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 10:10:25
 * @FilePath: /microDemo/demo-web/demo-web-login/src/router/routes.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    }
];

export default routes;
