import { defineConfig } from 'umi';

export default defineConfig({
  // layout: {},

  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/users', component: '@/pages/users/index' },
  ],
  dva: {
    immer: true,
    hmr: false
  }
});
