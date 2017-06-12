define(function(require){
	require('css!../assets/css/reset.css');
	require('css!../assets/css/statistics/statistics.css');
	var dropDownList = require('dropDownList');
	require(
            [
                'echarts',
                'echarts/chart/line',
                'echarts/chart/gauge'
            ],function(ec) {
            	var myChartCPU = ec.init(document.getElementById('countCPU'));
            	var myChartRAM = ec.init(document.getElementById('countRAM'));
            	var optionCPU = {
            		tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            detail: {formatter:'{value}%'},
			            data: [{value: 50, name: 'CPU占用率'}]
			        }
			    ]
            	}
            	var optionRAM = {
            		tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            detail: {formatter:'{value}%'},
			            data: [{value: 50, name: 'RAM占用率'}]
			        }
			    ]
            	}
            	
			    
			   	
			   	setInterval(function () {
				    optionCPU.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
				    optionRAM.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
				    myChartCPU.setOption(optionCPU, true);
				    myChartRAM.setOption(optionRAM, true);
				},2000);
				
			   	
            });
	
	$(function(){
		$('select:not(.ignore)').niceSelect();
		FastClick.attach(document.body);
	});
	
	 
	
});