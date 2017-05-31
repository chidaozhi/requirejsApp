var context_path = '/requirevuetest/';

requirejs.config({
	baseUrl:context_path + 'src/lib/',
	paths:{
		//公共库
		jquery:'import/jquery.min',
		vue:'import/vue.min',
		
		//入口
		appEntry:'entry/appEntry',
		
		//模块
		leftMenu:'module/leftMenu',
		centerView:'module/centerPannel',
		menuMapping:'module/menuMapping'
	},
    map:{
	'*': {
	    'css': 'import/css.min'
	  }
	},
});
