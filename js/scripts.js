

// swipebox

;( function( $ ) {
  $( '.swipebox' ).swipebox();
} )( jQuery );

//mixitup

$(function(){
  $('#container').mixItUp({
    load: {
      filter: '.category-1'
    },
    controls: {
      toggleFilterButtons: false
    }
  });
});


// Initialize YT player for youtube backgrounds

	$('.ytplayer').each(function(){
		var vidID = $(this).attr('data-video-id');
		$(this).attr('data-property','{videoURL:\''+vidID+'\',containment:\'.video-holder\',autoPlay:true, mute:false, startAt:28,opacity:1}');
	});
//video

$('.video-strip .pre-video i').click(function(){
    	$(this).closest('.pre-video').addClass('fade-off');
    	$(this).closest('.video-strip').find('.iframe-holder').addClass('show-iframe');
    	var that = $(this);
    	setTimeout(function(){
    		that.closest('.video-strip').find('.iframe-holder').addClass('fade-on');
    	},500);
    });

    $('.video-strip .close-frame').click(function(){
    	$(this).closest('.iframe-holder').removeClass('fade-on');
    	var that = $(this);
    	setTimeout(function(){
    		that.closest('.video-strip').find('.iframe-holder').removeClass('show-iframe');
    		that.closest('.video-strip').find('.pre-video').removeClass('fade-off');
    	},500);
    });


//countdown
$('.counter').each(function(){
		$(this).countdown({until: new Date($(this).attr('data-date'))});
	});
