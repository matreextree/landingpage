$(document).ready(function(){

	// VARIABLE DECLARATION
	// --------------------

	// Nomor halaman saat ini
	// berganti ketika discroll ke halaman lain
	// dimulai dari satu (1) bukan nol (0)
	var page_number = 1;

	// Menentukan apakah halaman boleh discroll atau tidak
	// Digunakan ketika 'sedang' transisi halaman, mencegah scroll
	// yang memaksa dari pengguna.
	// Halaman baru bisa discroll ketika transisi halaman
	// selesai
	var can_scroll = true;

	// Durasi transisi halaman
	var delay = 300;

	// Durasi sejenak tambahan setelah selesai transisi halaman.
	// Memberikan efek berhenti sejenak ketika transisi selesai
	// agar pengguna tidak memaksa langsung berpindah halaman
	var space_delay = 200;

	// Judul dari setiap halaman
	var title_of_page = [
		'Value Proposition', // halaman 2
		'Product Features', // halaman 3
		'Product Features', // halaman 4
		'Product Features', // halaman 5
		'Miles Stone', // halaman 6
		'Our Team', // halaman 7
		'Our Office' // halaman 8
	];

	// Konten modal product features pada halaman lima (5)
	var data_modal = [
		'<img src="img/market.png" style="width: 100%; margin-top: 2%;">',
		'<iframe align="center" frameborder="no" height="100%" scrolling="auto" src="4.html" width="100%" style="margin-top:0%;"></iframe>',
		'<iframe align="center" frameborder="no" height="100%" scrolling="auto" src="5.html" width="100%" style="margin-top:0%;"></iframe>',
		'<img src="img/management.png" style="width: 100%; margin-top: 2%;">'
	];

	// Data product features pada halaman tiga (3)
	var data_page_3 = [
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

	// variabel iterator pengontrol posisi data_page_3 (di atas)
	// awalnya diset indeks nol (0) = { title: 'Economic Outlook', 
	// desc: 'Horizontal centering....', img: 'img/t1.png' }
	var counter_data_page_3 = 0;

	// set data + animasi pada page 3
	function set_data_page_3(i){
		var fadeTime_ms = 250;
		$('#section3_title').fadeOut(fadeTime_ms, function(){
			$('#section3_title').html(data_page_3[i].title);
			$('#section3_title').fadeIn(fadeTime_ms);
		})
		$('#section3_data').fadeOut(fadeTime_ms, function(){
			$('#section3_data').html(data_page_3[i].desc);
			$('#section3_data').fadeIn(fadeTime_ms);
		});
		$('#s3_laptop_data').attr('src', data_page_3[i].img);
	}










	// FUNCTION DECLARATION
	// --------------------

	// cukup jelas (modal pada halaman 5)
	function show_modal(title, data){
		$('#modalku').fadeIn(150);
		$('#modal_judul').html(title);
		$('#modal_data').html(data);
	}

	// cukup jelas (modal pada halaman 5)
	function hide_modal(){
		$('#modalku').fadeOut(150);
	}

	// ?
	function temp(){
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

	// reset kelas pada elemen bubble navigasi 
	// di kanan (lingkaran putih). Terdapat 7 reset
	// karena hanya ada 7 halaman yang membutuhkan
	// side nav tersebut
	function remove_all_class_side_nav(obj){
		obj.removeClass('_buble_pos_1');
		obj.removeClass('_buble_pos_2');
		obj.removeClass('_buble_pos_3');
		obj.removeClass('_buble_pos_4');
		obj.removeClass('_buble_pos_5');
		obj.removeClass('_buble_pos_6');
		obj.removeClass('_buble_pos_7');
	}

	function what(){
		switch(parseInt(page_number)){
			case 4:
				$('.ico').attr('src', 'assets/white_tree.png');
				break;
				
			case 7:
			case 8:
				if(!$('#icooo').hasClass('black_color'))
					$('#icooo').addClass('black_color');
				
				break;

			default:
				$('.ico').attr('src', 'img/icon.png');
				if($('#icooo').hasClass('black_color'))
					$('#icooo').removeClass('black_color');
		}
	}

	// transisi ke halaman berikutnya
	function nextPage(){
		//scroll down
		if(page_number == 9 || !can_scroll)
			return false;

		can_scroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (++page_number)).offset().top
		}, delay);

		if(page_number == 9){
			$('._header').hide();
			$('#_side_nav').hide();
		}else{
			$('._header').show();
			$('#_side_nav').show();
		}

		if(page_number == 6){
			temp();
		}

		if(page_number > 1){
			console.log('np_show');
			console.log(title_of_page[page_number - 2]);
			$('._header').show();
			$('#_side_nav').show();
			remove_all_class_side_nav($('#_buble'));
			var strClass = '_buble_pos_' + (page_number - 1);
			$('#_buble').addClass(strClass);
			$('#the_title').html(title_of_page[page_number - 2]);
		}else{
			console.log('np_hide');
			// $('._header').hide();
			$('#the_title').html('');
			$('#_side_nav').hide();
		}

		what();

		setTimeout(function() {can_scroll = true;}, delay + space_delay);
	}

	// transisi ke halaman sebelumnya
	function prevPage(){
		//scroll up
		if(page_number == 1 || !can_scroll)
			return false;

		can_scroll = false
		$('html, body').animate({
			scrollTop: $('#_s_' + (--page_number)).offset().top
		}, delay);

		if(page_number == 9){
			$('._header').hide();
			$('#_side_nav').hide();
		}else{
			$('._header').show();
			$('#_side_nav').show();
		}

		if(page_number == 6){
			temp();
		}

		if(page_number > 1){
			console.log('pp_show');
			console.log(title_of_page[page_number - 2]);
			$('._header').show();
			$('#_side_nav').show();
			remove_all_class_side_nav($('#_buble'));
			var strClass = '_buble_pos_' + (page_number - 1);
			$('#_buble').addClass(strClass);
			$('#the_title').html(title_of_page[page_number - 2]);
		}else{
			console.log('pp_hide');
			// $('._header').hide();
			$('#the_title').html('');
			$('#_side_nav').hide();
		}


		what();

		setTimeout(function() {can_scroll = true;}, delay + space_delay);
	}










	// LISTENER DECLARATION
	// --------------------

	// menutup modal (pada halaman 5)
	$('#modal_close').click(function(){
		hide_modal();
	});

	// data sebelumnya pada halaman tiga (3)
	$('#section3_left').click(function(){
		counter_data_page_3 = (counter_data_page_3 + data_page_3.length - 1) % data_page_3.length;
		set_data_page_3(counter_data_page_3);
	});

	// data selanjutnya pada halaman tiga (3)
	$('#section3_right').click(function(){
		counter_data_page_3 = (counter_data_page_3 + 1) % data_page_3.length;
		set_data_page_3(counter_data_page_3);
	});
	
	// klik kotak pada halaman lima (5)
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

	// navigasi halaman (bulatan kecil disudut kanan atas)
	$('#up').click(function(){
		prevPage();
	});

	// navigasi halaman (bulatan kecil disudut kanan bawah)
	$('#down').click(function(){
		nextPage();
	});

	// Keystroke down binding
	$(document).keydown(function(e) {
	    switch(e.which) {
	        case 37: // left
	        if(page_number == 3){
	        	$('#section3_left').trigger('click');
	        }
	        break;

	        case 38: // up
	        prevPage();
	        break;

	        case 39: // right
	        if(page_number == 3){
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

	// Scroll binding
	//Firefox
	$(window).bind('DOMMouseScroll', function(e){
		if(!can_scroll){
			e.preventDefault();
			return false;
		}

		if(e.originalEvent.detail > 0)
			nextPage();
		else
			prevPage();
	});

	// Scroll binding
	//IE, Opera, Safari
	$(window).bind('mousewheel', function(e){
		if(!can_scroll){
			e.preventDefault();
			return false;
		}

		if(e.originalEvent.wheelDelta < 0)
			nextPage();
		else
			prevPage();
	});









	// INIZIALITATION
	// --------------

	// inisialisasi: dengan data counter_data_page_3 = 0
	set_data_page_3(counter_data_page_3);

	// inisialisasi: selalu memulai halaman web pada halaman satu (1)
	$('html, body').animate({
		scrollTop: $('#_s_1').offset().top
	}, delay);

	// inisialisasi: header disembunyikan pada halaman satu (1)
	$('._header').show();
	$('#the_title').html('');
});