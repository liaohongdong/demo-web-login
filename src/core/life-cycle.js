/*
 * @Author: hongdong.liao
 * @Date: 2021-05-11 17:12:28
 * @LastEditors: hongdong.liao
 * @LastEditTime: 2021-05-12 10:17:42
 * @FilePath: /microDemo/demo-web/demo-web-login/src/core/life-cycle.js
 */
import { renderSubchild, } from '@fe-micro/micro-core';
import { routeMatch, } from '@fe-micro/micro-router';
import App from '@/App.vue';

import store from '@/store';
import selfRoutes from '@/router/routes';

import appStore from '@/utils/app-store';

const __qiankun__ = window.__POWERED_BY_QIANKUN__;
let instance = null;
let parentStore = null;

// 导出生命周期
const lifeCycle = () => ({
    async bootstrap() {
        //
    },
    async mount(props) {
        props.parentStore.dispatch('appstore/setAppName', 'login');
        appStore(props);
        parentStore = props.parentStore;
        render(props);
    },
    async unmount() {
        // 子应用 应用级的 keep-alive 其实 login 应用不需要这个的 其他应用可以照抄以下内容
        const cachedInstance = instance.cachedInstance || instance;
        window.__CACHE_INSTANCE_BY_QIAN_KUN_FOR_VUE__ = cachedInstance;
        const cachedNode = cachedInstance._vnode;
        if (!cachedNode.data.keepAlive) cachedNode.data.keepAlive = true;
        cachedInstance.catchRoute = {
            apps: [...instance.$router.apps],
        };
        if (instance.cachedInstance || instance) {
            instance.$destroy();
            instance = null;
        }
    },
});

const render = ({ routes, routerBase, container, i18n, }) => {
    const macthRoutes = routeMatch(routes, routerBase);
    const fullMacth = [...macthRoutes, ...selfRoutes];
    const fullSelf = [...selfRoutes];
    const routeBase = __qiankun__ ? routerBase : '/';
    const __routes = __qiankun__ ? fullMacth : fullSelf;
    const { originInstance, } = renderSubchild({
        routes: __routes,
        routerBase: routeBase,
        store,
        parentStore,
        container,
        i18n,
        subappKey: '#app-login',
        mountPoint: App,
    });
    instance = originInstance;
};

export { lifeCycle, render };
