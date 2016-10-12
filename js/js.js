$(document).ready(function(){
	var position = 1;
	var canScroll = true;
	var delay = 500, spaceDelay = 250;
	$('html, body').animate({
		scrollTop: $('#_s_1').offset().top
	}, delay);

	function nextPage(){
		//scroll down
		if(position == 10 || !canScroll)
			return false;

		canScroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (++position)).offset().top
		}, delay);
		setTimeout(function() {canScroll = true;}, delay + spaceDelay);
	}

	function prevPage(){
		//scroll up
		if(position == 1 || !canScroll)
			return false;

		canScroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (--position)).offset().top
		}, delay);
		setTimeout(function() {canScroll = true;}, delay + spaceDelay);
	}

	$('#up').click(function(){
		prevPage();
	});

	$('#down').click(function(){
		nextPage();
	});

	//Firefox
	$(window).bind('DOMMouseScroll', function(e){
		if(!canScroll){
			e.preventDefault();
			return false;
		}

		if(e.originalEvent.detail > 0)
			nextPage();
		else
			prevPage();
	});

	 //IE, Opera, Safari
	$(window).bind('mousewheel', function(e){
		if(!canScroll){
			e.preventDefault();
			return false;
		}

		if(e.originalEvent.wheelDelta < 0)
			nextPage();
		else
			prevPage();
	});
});