var context_path = '/cmd/JD/';

require.config({
	baseUrl: context_path + "src/lib/",
	paths:{
		jquery:'import/jquery.min',
		vue:'import/vue.min',
		easyui:'import/easyUI/jquery.easyui.min',
		
		//入口
		appEntry:'entry/appEntry',
		
		//模块
		leftMenu:'module/leftMenu'
		
	},
	map:{
		'*':{
			'css':'import/css.min'
		}
	},
	shim:{
		easyui:{
			deps:[
				'jquery',
				'css!import/easyUI/easyui.css',
				'css!import/easyUI/icon.css',
				'css!import/easyUI/color.css'
			]
		},
//		leftMenu:{exports:'$.ajax'}
	}
	
});
