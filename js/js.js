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


	function show_modal(title, data){
		$('#modalku').fadeIn(150);
		$('#modal_judul').html(title);
		$('#modal_data').html(data);
	}

	function hide_modal(){
		$('#modalku').fadeOut(150);
	}

	$('#modal_close').click(function(){
		hide_modal();
	})

	var data_modal = [
		'<img src="img/market.png" style="width: 100%; margin-top: 2%;">',
		'<iframe align="center" frameborder="no" height="100%" scrolling="auto" src="4.html" width="100%" style="margin-top:0%;"></iframe>',
		'<iframe align="center" frameborder="no" height="100%" scrolling="auto" src="5.html" width="100%" style="margin-top:0%;"></iframe>',
		'<img src="img/management.png" style="width: 100%; margin-top: 2%;">'
	];

	$('.kotak').click(function(){
		switch(parseInt(this.id.split('_')[1])){
			case 1: 
				show_modal('Market Segment', data_modal[0]);
				break;
			case 2: 
				show_modal('Competitors and Market Size', data_modal[1]);
				break;
			case 3: 
				show_modal('Key Partner', data_modal[2]);
				break;
			case 4: 
				show_modal('Management Consultant', data_modal[3]);
				break;
			default: return;
		}
	})

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

	var data_log = [
		{
			title: 'Economic Outlook',
			desc: 'Horizontal centering with css is rather easy. When the element to be centered is an inline element we use text-align center on its parent. When the element is a block level element we give it a width and set the left and right margins to a value of auto.',
			img: 'img/t1.png'
		},
		{
			title: 'Industry Outlook',
			desc: 'With text-align: center in mind, most people look first to vertical-align in order to center things vertically. It seems logical and I know it was my first choice. If you’ve come from table based layout you likely used the valign attribute, which would also lead you to believe vertical-align is the way to go.',
			img: 'img/t2.png'
		},
		{
			title: 'Company Profiles',
			desc: 'However valign only worked on table cells. Vertical-align is similar. It also applies to table cells and it works with some inline elements.',
			img: 'img/t3.png'
		},
		{
			title: 'Organization Roadmap',
			desc: 'Unfortunately vertical-align doesn’t apply to block-level elements like a paragraph inside a div, which is where most of us figure out it isn’t the be all solution to vertical centering.',
			img: 'img/t4.png'
		},
		{
			title: 'Consultant',
			desc: 'All is not lost though, as we have other methods for centering block level elements and we can still use vertical-align where appropriate. Which method you choose will depend on what you’re trying to center relative to its container element.',
			img: 'img/t5.png'
		},
		{
			title: 'Collaboration',
			desc: 'This method will work when you want to vertically center a single line of text. All we need to do is set a line-height on the element containing the text larger than its font-size.',
			img: 'img/t6.png'
		},
		{
			title: 'Regulation',
			desc: 'Most tutorials will also set the height on the element with the same value given to the line-height. I don’t think setting the height is necessary, but if line-height alone doesn’t work for you setting the height of the element will likely be the solution.',
			img: 'img/t7.png'
		},
		{
			title: 'University',
			desc: 'Most tutorials will also set the height on the element with the same value given to the line-height. I don’t think setting the height is necessary, but if line-height alone doesn’t work for you setting the height of the element will likely be the solution.',
			img: 'img/t8.png'
		}
	];

	function set_data(i){
		var fadeTime_ms = 250;
		$('#section3_title').fadeOut(fadeTime_ms, function(){
			$('#section3_title').html(data_log[i].title);
			$('#section3_title').fadeIn(fadeTime_ms);
		})
		$('#section3_data').fadeOut(fadeTime_ms, function(){
			$('#section3_data').html(data_log[i].desc);
			$('#section3_data').fadeIn(fadeTime_ms);
		});
		$('#s3_laptop_data').attr('src', data_log[i].img);
	}
	var counter_sec3 = 0;
	set_data(counter_sec3);

	$('#section3_left').click(function(){
		counter_sec3 = (counter_sec3 + data_log.length - 1) % data_log.length;
		set_data(counter_sec3);
	});

	$('#section3_right').click(function(){
		counter_sec3 = (counter_sec3 + 1) % data_log.length;
		set_data(counter_sec3);
	});

	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        if(position == 3){
	        	$('#section3_left').trigger('click');
	        }
	        break;

	        case 38: // up
	        prevPage();
	        break;

	        case 39: // right
	        if(position == 3){
	        	$('#section3_right').trigger('click');
	        }
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