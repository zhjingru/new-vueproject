import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/IndexView2.vue";
import UserProfile from '@/views/UserProfile.vue';
import History from "../views/history.vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";

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
        children:[
            {
                path:'',
                component: IndexView,
            },
            {
                path: 'person',
                name: 'UserProfile',
                component: UserProfile, // 用户个人信息页面组件
            },
            {
                path:'1-1',
                component:History,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;