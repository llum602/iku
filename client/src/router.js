import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from './App.vue'
import SecureComponent from "./views/Secure.vue"
import Home from '@/views/Home'

Vue.use(Router)
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/create",
            name: "create",
            component: () => import("./views/Create.vue")
        },
        {
            path: "*",
            name: "error",
            component: () => import("./views/Error.vue")
        }
    ]
}) 