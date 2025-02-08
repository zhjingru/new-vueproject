import { createRouter, createWebHashHistory } from "vue-router";
import IndexView from "@/views/IndexView2.vue";
import UserProfile from '@/views/UserProfile.vue';
import UpProfile from '@/views/recommend.vue';
import Profile from '@/views/recommend1.vue';
import History from "../views/history.vue";
import Project from "@/views/project.vue";
import HistoryProject from "../views/history.vue"
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
            {
                path: 'up',
                name: 'UpProfile',
                component: UpProfile,
            },
            {
                path: 'recommend1',
                name: 'Profile',
                component: Profile, // 用户个人信息页面组件
            },
            {
                path:'project',
                name:'Project',
                component: Project,
            },
            {
                path:'history',
                name:'History',
                component: HistoryProject,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;