import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex)

export default new Vuex.Store({
	state: { // 전역변수 선언
		citylists:[],
	},
	getters, //component들의 변수 요청을 응답하는 객체
	mutations, //변수의 변화를 감지한는 객체
	actions, //변수의 값을 바꾸는 객체
})
