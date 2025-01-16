import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/login/LoginView.vue"),
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/index.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;