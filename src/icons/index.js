/*
 * @Author: hongdong.liao
 * @Date: 2021-05-12 11:15:59
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 14:54:41
 * @FilePath: /microDemo/demo-web/demo-web-login/src/icons/index.js
 */
import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';// svg component

// register globally
Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
