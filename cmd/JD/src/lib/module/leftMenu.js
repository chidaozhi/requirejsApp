define(function(require){
	
	var Vue = require('vue');
	var $ = require('jquery');
	
	var menuContent = [];
	$.ajax({
		type:"get",
		async:false,
		url:"src/apidata/menus.json",
		dataType:'json',
		success:function(data)
		{
			console.log(data);
			menuContent = data;
		}
	});
	
	var leftMenuApp = new Vue({
		el:'#menu',
		data:
		{
			menus:menuContent
		},
		methods:
		{
			doClick:function(){
				alert(this.menus[0].title);
			}
		}
	});
	
	return leftMenuApp;
});