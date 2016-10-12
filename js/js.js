$(document).ready(function(){
	var position = 1;
	var canScroll = true;
	var delay = 500, spaceDelay = 250;
	$('html, body').animate({
		scrollTop: $('#_s_1').offset().top
	}, delay);
	$('._header').hide();

	var TITLE = [
		'Value Proposition',
		'Product Features',
		'Market Segments',
		'Competitors & Market Size',
		'Key Partners',
		'Management Consultant Business Process',
		'Milestone',
		'Our Team',
		'Our Office'
	];

	var temp = function(){
		var i = 1;
		$('.progress .circle').removeClass().addClass('circle');
		$('.progress .bar').removeClass().addClass('bar');
		setInterval(function() {
		  $('.progress .circle:nth-of-type(' + i + ')').addClass('active');
		  
		  $('.progress .circle:nth-of-type(' + (i-1) + ')').removeClass('active').addClass('done');
		  
		  $('.progress .circle:nth-of-type(' + (i-1) + ') .label').html('&#10003;');
		  
		  $('.progress .bar:nth-of-type(' + (i-1) + ')').addClass('active');
		  
		  $('.progress .bar:nth-of-type(' + (i-2) + ')').removeClass('active').addClass('done');
		  
		  i++;
		  
		  if (i==0) {
		    $('.progress .bar').removeClass().addClass('bar');
		    $('.progress div.circle').removeClass().addClass('circle');
		    i = 1;
		  }
		}, 1000);
	}

	function nextPage(){
		//scroll down
		if(position == 10 || !canScroll)
			return false;

		canScroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (++position)).offset().top
		}, delay);

		if(position == 8){
			temp();
		}

		if(position > 1){
			console.log('np_show');
			console.log(TITLE[position - 2]);
			$('._header').show();
			$('#the_title').html(TITLE[position - 2]);
		}else{
			console.log('np_hide');
			$('._header').hide();
		}

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

		if(position == 8){
			temp();
		}

		if(position > 1){
			console.log('pp_show');
			console.log(TITLE[position - 2]);
			$('._header').show();
			$('#the_title').html(TITLE[position - 2]);
		}else{
			console.log('pp_hide');
			$('._header').hide();
		}

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