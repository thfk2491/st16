var feed = new Instafeed({
	get: 'user',
	resolution: 'low_resolution',
	userId: '8602569925',
	limit: '7',
	accessToken: '8602569925.a0274ab.4c2f0d3054d644da96f2c3dc486d2609',
	template: '<li><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></li>'
});
feed.run();

jQuery(document).ready(function() {	
	setTimeout(function(){
		var instafeed_data = jQuery('.instaInner #instafeed').html();

		if ( instafeed_data == '' )  {
			jQuery('.instaInner #instafeed').html('<div class="noinsta">인스타그램을 등록해주세요</div>');
		}
	}, 1000);
});


