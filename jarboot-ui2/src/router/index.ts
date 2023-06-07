import { createRouter, createWebHashHistory } from 'vue-router';
import OAuthService from '@/services/OAuthService';
import StringUtil from '@/common/StringUtil';
import { useUserStore } from '@/stores';
import { PAGE_LOGIN, PAGE_SERVICE } from '@/common/route-name-constants';
import routesConfig from '@/router/routes-config';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: PAGE_LOGIN,
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/home.vue'),
      children: routesConfig,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (PAGE_LOGIN === to.name) {
    next();
    return;
  }
  const user = (await OAuthService.getCurrentUser()) as any;
  if (StringUtil.isEmpty(user?.username)) {
    next({ name: PAGE_LOGIN, force: true });
    return;
  }
  if ('/' === to.path) {
    next({ name: PAGE_SERVICE, force: true });
    return;
  }
  const userStore = useUserStore();
  userStore.setCurrentUser(user);
  next();
  // 权限检验
});

export default router;