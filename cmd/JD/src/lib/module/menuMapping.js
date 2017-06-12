define(function(require){
	
	var configPage = 'src/page/config.html';
	var newPage = 'src/page/new.html';
	var queryPage = 'src/page/query.html';
	var statisticsPage = 'src/page/statistics.html';
	var gradePage = 'src/page/grade.html';
	
	var mapping = 
	{
		m_1:{
			title:'设置页',
			url:"src/page/conifg.html",
		},
		m_2:{
			title:'新建页',
			url:'src/page/new.html'
		},
		m_3:{
			title:'查询页',
			url:"src/page/query.html"
		},
		m_4:{
			title:'统计页',
			url:"src/page/statistics.html"
		},
		m_5:{
			title:'评分页',
			url:"src/page/grade.html"
		}
	}
	
	var doMenuMapping = function(pageId){
		var menu = mapping[pageId];
		console.log(menu);
		if(menu == undefined)
		{
			return null;	
		}
		return menu;
	};
	
	
	return doMenuMapping;
});