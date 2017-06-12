define(function(require){
	var chrome = require('chrome');
	require('css!../assets/css/reset.css');
	$(function(){
		var $chromeTabsExampleShell = $('.chrome-tabs-shell');
        chromeTabs.init({
            $shell: $chromeTabsExampleShell,
            minWidth: 45,
            maxWidth: 160
        });
        chromeTabs.addNewTab($chromeTabsExampleShell, {
            favicon: '/requirevuetest/src/lib/import/chrome/img/3.ico',
            title: 'jQuery之家',
            data: {
                timeAdded: +new Date()
            }
        });
        $chromeTabsExampleShell.bind('chromeTabRender', function(){
            var $currentTab = $chromeTabsExampleShell.find('.chrome-tab-current');
            if ($currentTab.length && window['console'] && console.log) {
                console.log('Current tab index', $currentTab.index(), 'title', $.trim($currentTab.text()), 'data', $currentTab.data('tabData').data);
            }
        });

        $('button').click(function(){
            if ($chromeTabsExampleShell.hasClass('chrome-tabs-dark-theme')) {
                $chromeTabsExampleShell.removeClass('chrome-tabs-dark-theme');
            } else {
                $chromeTabsExampleShell.addClass('chrome-tabs-dark-theme');
            }
        });
		
	});
	
	
});