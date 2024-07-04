import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue';
import Signin from '../views/Signin.vue';
import Signup from '../views/Signup.vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import MainLayout from '../layouts/MainLayout.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomeView,
        meta: {
            title: 'Home',
            layout: MainLayout,
            public: true
        }
    },
    {
        path: '/signin',
        name: 'SigninPage',
        component: Signin,
        meta: {
            title: 'Sign in',
            layout: AuthLayout,
            public: true
        }
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: Signup,
        meta: {
            title: 'Sign up',
            layout: AuthLayout,
            public: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = 'CodeCal | ' + to.meta.title;
    next();
});

export default router;