$(document).ready(function(){
	var position = 1;
	var canScroll = true;
	var delay = 300, spaceDelay = 200;
	$('html, body').animate({
		scrollTop: $('#_s_1').offset().top
	}, delay);
	$('._header').hide();

	var TITLE = [
		'Value Proposition',
		'Product Features',
		'Product Features',
		'Product Features',
		'Miles Stone',
		'Our Team',
		'Our Office'
	];

	// var ukuran_navigator = window.screen.height * 0.6;
	// var satuan_navigasi = ukuran_navigator / 11;
	// var init_position_buble = $('#_buble');

	// console.log(window.screen.height * 0.6);

	// console.log($('#_buble')[0].style);

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

	function removeAllClass(obj){
		obj.removeClass('_buble_pos_1');
		obj.removeClass('_buble_pos_2');
		obj.removeClass('_buble_pos_3');
		obj.removeClass('_buble_pos_4');
		obj.removeClass('_buble_pos_5');
		obj.removeClass('_buble_pos_6');
		obj.removeClass('_buble_pos_7');
	}

	function nextPage(){
		//scroll down
		if(position == 8 || !canScroll)
			return false;

		canScroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (++position)).offset().top
		}, delay);

		if(position == 6){
			temp();
		}

		if(position > 1){
			console.log('np_show');
			console.log(TITLE[position - 2]);
			$('._header').show();
			$('#_side_nav').show();
			removeAllClass($('#_buble'));
			var strClass = '_buble_pos_' + (position - 1);
			$('#_buble').addClass(strClass);
			$('#the_title').html(TITLE[position - 2]);
		}else{
			console.log('np_hide');
			$('._header').hide();
			$('#_side_nav').hide();
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

		if(position == 6){
			temp();
		}

		if(position > 1){
			console.log('pp_show');
			console.log(TITLE[position - 2]);
			$('._header').show();
			$('#_side_nav').show();
			removeAllClass($('#_buble'));
			var strClass = '_buble_pos_' + (position - 1);
			$('#_buble').addClass(strClass);
			$('#the_title').html(TITLE[position - 2]);
		}else{
			console.log('pp_hide');
			$('._header').hide();
			$('#_side_nav').hide();
		}

		setTimeout(function() {canScroll = true;}, delay + spaceDelay);
	}

	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        break;

	        case 38: // up
	        prevPage();
	        break;

	        case 39: // right
	        break;

	        case 40: // down
	        nextPage();
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

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