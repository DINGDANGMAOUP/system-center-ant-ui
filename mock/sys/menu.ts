import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import { createFakeUserList } from './user';

// single
const dashboardRoute = {
  path: '/dashboard',
  name: 'Welcome',
  component: '/dashboard/welcome/index',
  meta: {
    title: 'routes.dashboard.welcome',
    affix: true,
    icon: 'bx:bx-home',
  },
};

const generator = {
  path: '/factory',
  name: 'Factory',
  component: 'LAYOUT',
  redirect: '/factory/gen',
  meta: {
    title: 'routes.factory.factory',
    icon: 'bx:bx-cube-alt',
  },
  children: [
    {
      path: 'gen',
      name: 'Generator',
      component: '/factory/gen/index',
      meta: {
        title: 'routes.factory.generator',
      },
    },
  ],
};



const sysRoute = {
  path: '/system',
  name: 'System',
  component: 'LAYOUT',
  redirect: '/system/account',
  meta: {
    icon: 'ion:settings-outline',
    title: 'routes.system.system.moduleName',
  },
  children: [
    {
      path: 'account',
      name: 'AccountManagement',
      meta: {
        title: 'routes.system.system.account',
        ignoreKeepAlive: true,
      },
      component: '/system/account/index',
    },
    {
      path: 'role',
      name: 'RoleManagement',
      meta: {
        title: 'routes.system.system.role',
        ignoreKeepAlive: true,
      },
      component: '/system/role/index',
    },

    {
      path: 'menu',
      name: 'MenuManagement',
      meta: {
        title: 'routes.system.system.menu',
        ignoreKeepAlive: true,
      },
      component: '/system/menu/index',
    },
    {
      path: 'dept',
      name: 'DeptManagement',
      meta: {
        title: 'routes.system.system.dept',
        ignoreKeepAlive: true,
      },
      component: '/system/dept/index',
    },
    {
      path: 'changePassword',
      name: 'ChangePassword',
      meta: {
        title: 'routes.system.system.password',
        ignoreKeepAlive: true,
      },
      component: '/system/password/index',
    },
  ],
};

export default [
  {
    url: '/getMenuList',
    timeout: 1000,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) {
        return resultError('Invalid token!');
      }
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid user token!');
      }
      const id = checkUser.userId;
      if (!id || id === '1') {
        return resultSuccess([dashboardRoute, generator, sysRoute]);
      }
      if (id === '2') {
        return resultSuccess([dashboardRoute, generator]);
      }
    },
  },
] as MockMethod[];
