import Vue from 'vue';
import VueRouter from 'vue-router';
import auth from './untils/auth'
Vue.use(VueRouter);

import Home from './views/Home';


const routes = [
    {
        path:'/Login',
        component:()=>import('./views/Login')
    },
    {
        path: '',
        component: Home,
        redirect: '/Home'
    },
    {
        path: '/Home',
        component: Home,

    },
    {
        path: '/Learn',
        component: () => import('./views/Learn'),
    },
    {
        path: '/Student',
        component: () => import('./views/Student'),
        meta: {
            requireLogin: true
        }
    },
    {
        path: '/About',
        components: {
            'student': () => import('./views/Student'),
            default: () => import('./views/About'),
        }
        // component: () => import('./views/About'),
    },
    {
        path: '/Community',
        redirect: '/Community/Academic',
        component: () => import( /*webpackChunkName:'academic'*/'./views/Community'),
        meta: {
            requireLogin: true
        },
        children: [
            {
                path: 'Academic',
                name: 'Academic',
                component: () => import( /*webpackChunkName:'academic'*/'./views/Academic')
            },
            {
                path: 'Personal',
                name: 'Personal',
                component: () => import('./views/Personal'),

            },
            {
                path: 'Download',
                name: 'Download',
                component: () => import('./views/Download')
            }
        ]
    },
    {
        path: '/question/:id',
        name: 'question',
        component: () => import('./views/Question'),
        props: route => ({
            id: route.params.id
        })
    },

];

const router = new VueRouter({
    routes,
    mode: 'history',
    // scrollBehavior(){
    //     return {
    //         x:0,
    //         y:0,
    //     }
    // }
})

router.beforeEach((to, from, next) => {
    const isRequireLogin = to.matched.some(item => item.meta.requireLogin)
    if (isRequireLogin) {
        if(auth.isLogin()){
            next()
        }else{
            const isToLogin = window.confirm('需要登陆，要去吗？');
            if(isToLogin){
                next('/Login');
            }else{
                next(false)
            }
            
        }    
    } else {
        next()
    }
})
export default router