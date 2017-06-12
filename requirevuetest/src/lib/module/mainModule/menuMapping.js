define(function(require){
	var mapping = {
		m_1:
			{	
				title:"设置页",
				url:"src/page/config.html"
			},
		m_1_1:
			{
				title:"child1.1-新建页",
				url:"src/page/new.html"
			},
		m_1_2:
			{
				title:"child1.2-新建页",
				url:"src/page/config.html"
			},
		m_2:
			{	
				'title':"新建页",
				'url':"src/page/new.html"
			},
		m_3:
			{	
				'title':"查询页",
				'url':"src/page/query.html"
			},
		m_3_1:{
			'title':"child3.1-新建页",
			'url':"src/page/query.html"
		},
		m_3_2:{
			'title':"child3.2-新建页",
			'url':"src/page/statistics.html"
		},
		m_4:{'title':"统计页",
			'url':"src/page/statistics.html"
	},	
		m_5:{'title':"评分页",
			'url':"src/page/grade.html"
	}
	};
	
	var menuMappingFunc = function(pageId){
		 var menu = mapping[pageId];
		 return menu ;
	};
	
	return menuMappingFunc;
	
});