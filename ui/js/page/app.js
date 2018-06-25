'use strict'

function APP_VIEW() {
	this.router = new VueRouter({
		routes:[
			{
				path: '', component: { template: '<router-link to="/home">/home</router-link>' },
			},
			{
				path: '/home', component: com_home,
			},
			{
				path: '/setting/:id', component: com_setting, props: true,
			},
			{
				path: '/test/:id', component: com_test, props: true,
			},
		],
	});
	this.extends = new _VIEW_APP();
	this.data = function () {
		return {
			type: 'APP_VIEW',
		};
	};
}

const app = new Vue(new APP_VIEW()).$mount('#app');