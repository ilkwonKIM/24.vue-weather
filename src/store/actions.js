import { axCity } from '../api'

const cityLists =  [
		 {
			 id: 1,
				name: 'seoul'
			},
		 {
			 id: 2,
				name: 'Busan'
			},
		]

export default {
	ACT_CITY({commit}) {
		axCity();
		commit('MUT_CITY',cityLists)
	}
}