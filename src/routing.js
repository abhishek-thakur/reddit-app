import Vue from 'vue'
import PostHome from './components/PostHome'
import Subreddit from './components/Subreddit'
import Comments from './components/Comments'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'post-home',
        component: PostHome
    },
    {
       path: '/:subredditId',
       name: 'subreddit',
       props: true,
       component: Subreddit
    },
    {
        path: '/comments/:cmntId',
        name: 'comments',
        props: true,
        component: Comments
     },
]
const router = new VueRouter({
    mode: 'history',
    routes
})
export default router