import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import one from '../pages/1'
import two from '../pages/2'
import tri from '../pages/3'
import fo from '../pages/4'

const routes = [
    {
        path: '/1',
        component: one
    },
    {
        path: '/2',
        component: two
    },
    {
        path: '/3',
        component: tri
    },
    {
        path: '/4',
        component: fo
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
