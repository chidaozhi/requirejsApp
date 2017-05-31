define(function(require){
	require('css!../assets/css/rightContent.css');
	var Vue = require('vue');

	var centerViewApp = new Vue({
		el:'#center-view',
		data:{
			pageUrl:"src/page/grade.html"
		}
	});
	
	return centerViewApp;
});