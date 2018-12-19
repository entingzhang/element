import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: 0,
		msg: 'Hello!',
		arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
		tabs: [{
			label: '布局',
			path: '/layout',
			icon: 'fa fa-home'
		}],
		activePath: '/layout'
	},
	getters: {
		// 奇数 
		odd(state) {
			return state.arr.filter(item => item % 2 != 0);
		},
		// 偶数
		even(state) {
			return state.arr.filter(item => item % 2 == 0);
		}
	},
	mutations: {
		add(state, n) {
			this.state.count += n;
		},
		reduce(state, n) {
			this.state.count -= n;
		},
		switchTab(state, path) {
			console.log(path);
			this.state.activePath = path;
		},
		addTab(state, tab) {
			for(let i = 0; i < state.tabs.length; i++) {
				if(state.tabs[i].path == tab.path) {
					this.state.activePath = tab.path;
					return;
				}
			}
			state.tabs.push(tab);
			this.state.activePath = tab.path;
		},
		removeTab(state, path) {
			state.tabs=state.tabs.filter(item=>item.path!=path)
			if(state.activePath==path){
				this.state.activePath ='/layout'
			}
		}
	},
	actions: {
		addAction(content) {
			console.log('start active')
			setTimeout(() => {
				content.commit('add', 10000);
				console.log('activeing')
			}, 2000);
			console.log('end active')
		}
	}
})