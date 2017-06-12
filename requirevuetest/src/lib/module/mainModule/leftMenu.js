define(function(require) {
	require('css!../assets/css/menulists.css');
	var $ = require('jquery');
	var Vue = require('vue');
	var menuMappingFunc = require('menuMapping');
	var centerViewApp = require('centerView');
	
	var getMenuContent = function(){
		var leftMenuContent = [];
		
		$.ajax({
			type: "get",
			url: "src/apidata/left-menus.json",
			async: false,
			dataType: 'json',
			success: function(data) {
				leftMenuContent = data;
			}
		});
		
		return leftMenuContent;
	};

	$('.major-menu').click(function(){
		
//		var siblings = $(this).siblings();
//		var firstSib = $(this).siblings().first();
//		if(firstSib == undefined)
//		{
//			return;
//		}
//		if(firstSib.is(':hidden'))
//		{
//			siblings.show(300);
//		}else
//		{
//			siblings.hide(300);
//		}
		var subMenu = $(this).siblings('li');
		if(subMenu.length == 0){
			return;
		}else if(subMenu.is(":hidden")){
			subMenu.show();
		}else {
			subMenu.hide();
		}
			
		
		 
	});

	
	var leftmenuApp = new Vue({
		el: '#left-menu',
		data: {
			
			menus: getMenuContent()
		},
		
		methods: {
			majorMenuChangePage: function(pageId) {
				var menuObject = menuMappingFunc(pageId);
				centerViewApp.pageUrl = menuObject.url;
			},
			subMenuChangePage: function(pageId) {
				var menuObject = menuMappingFunc(pageId);
				centerViewApp.pageUrl = menuObject.url;
			}
			
		}
	});
	
	
	return leftmenuApp;
});