define(function(require){
	require('css!../assets/css/header.css');
	var Vue = require('vue');
	var header = new Vue({
		el:'.logo',
		data:{
			headertitle:'后台管理系统'
		}
	});
});