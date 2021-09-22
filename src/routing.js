import Vue from 'vue'
import PostHome from './components/PostHome'
import Subreddit from './components/Subreddit'
import VueRouter from 'vue-router'
// import { Subreddit } from 'snoowrap'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'PostHome',
        component: PostHome
    },
    {
       path: '/:subredditId',
       name: 'subreddit',
       props: true,
       component: Subreddit
    },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router