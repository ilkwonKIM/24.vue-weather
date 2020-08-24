import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Daily from '../views/Daily.vue'
import Weekly from '../views/Weekly.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/daily',
		name: 'Daily',
		component: Daily
	},
	{
		path: '/weekly',
		name: 'Weekly',
		component: Weekly
	},
	{
		path: '/test/:id',
		name: 'test',
		component: Weekly
		// this.$route.params.id
		// this.$route.query.id
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next)=> {
  to.name != 'Home' && !from.name ? next({path: '/'}) : next();
}); // Daily에서 새로고침시 Daily에 요청하는 값이 없어 오류가 나는것을 루트로 보내서 오류를 잡음

export default router