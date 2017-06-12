var context_path = '/requirevuetest/';

requirejs.config({
	baseUrl:context_path + 'src/lib/',
	paths:{
		//公共库
		jquery:'import/jquery.min',
		jqueryUI:'import/jquery-ui.min',
		vue:'import/vue.min',
		
		//第三方插件
//		echarts:'import/echarts-2.2.7/src/echarts',
//		zrender:'import/zrender-master/src/zrender',
		chrome:'import/chrome/chrome-tabs',
		dropDownList:'import/dropdownlist/jquery.nice-select.min',
		dropDownFast:'import/dropdownlist/fastclick',
		
		
		//入口
		appEntry:'entry/appEntry',
		statisticEntry:'entry/statisticEntry',
		gradeEntry:'entry/gradeEntry',
		
		//模块
		//主模块
		header:'module/mainModule/header',
		leftMenu:'module/mainModule/leftMenu',
		centerView:'module/mainModule/centerPannel',
		menuMapping:'module/mainModule/menuMapping',
		//统计模块
		statistics:'module/statisticModule/statistics',
		//评分模块
		grade:'module/grademodule/grade',
	},
	packages: [
                {
                    name: 'echarts',
                    location: 'import/echarts-master/src',
                    main: 'echarts'
                },
                {
                    name: 'zrender',
                    location: 'import/zrender-master/src',
                    //location: '../../../zrender/src',
                    main: 'zrender'
                }
            ],
    map:{
	'*': {
	    'css': 'import/css.min'
	  }
	},
	shim:{
		chrome:{
			deps:[
				'jquery',
				'jqueryUI',
				'css!import/chrome/css/normalize.css',
				'css!import/chrome/css/default.css',
				'css!import/chrome/css/chrome-tabs.css',
				'css!import/chrome/css/chrome-tabs-dark-theme.css'
			]
		},
		dropDownList:{
			deps:[
				'jquery',
				'dropDownFast',
				'css!import/dropdownlist/css/normalize.css',
				'css!import/dropdownlist/css/htmleaf-demo.css',
				'css!import/dropdownlist/css/pintsize.min.css',
				'css!import/dropdownlist/css/nice-select.css'
				
			]
		},
		statistics:{
			deps:[
				'jquery',
				'css!import/linetab/css/normalize.css',
				'css!import/linetab/css/htmleaf-demo.css',
				'css!import/linetab/css/style.css',
				'css!import/slidecheck/css/slideCheck.css'
			]
		}
	}
});
