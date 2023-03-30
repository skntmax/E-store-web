import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Login' 

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
]
 
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router