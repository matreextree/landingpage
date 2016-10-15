var data = [
		{
			title:"Eliminating consultant operational costs",
			isi:"As company will have different problems during a course of time, different ways have been carried out to resolve the problems by engaging different services from wide-range of providers - which is not uncommon resulting in conflicting outputs that even put company in a setback"
		},
		{
			title:"Value Proposition",
			isi:"Our solution lies in the integration and automation of all consulting services from market research, strategy and operation"
		},
		{
			title:"Trend",
			isi:"In the next five years, large corporate clients will increasingly look for firms that offer <q>end-to-end business solutions</q> (i.e. a firm that is involved in every step of the process, from advisory to execution to assessment) - source Ibisworld.com Report 2014"
		},
		{
			title:"Cost of Research",
			isi:"For past eight years we have spent US$ 660,000 on Research only. As of 2016 we are on the development stages."
		},
	];

var pos = 0;

function gantiContent(){
	$('#titlePenjelasan').fadeOut(500,function(){
		$('#titlePenjelasan').html(data[pos].title);
		$('#titlePenjelasan').fadeIn(500);
	})

	$('#deskripsiPenjelasan').fadeOut(500,function(){
		$('#deskripsiPenjelasan').html(data[pos].isi);
		$('#deskripsiPenjelasan').fadeIn(500);
	})
}

function klikKiri(){
	if(pos <= 0){
		pos = 3;
	}else{
		pos = pos - 1;
	}
	gantiContent();
}

function klikKanan(){
	if(pos >= 3){
		pos = 0;
	}else{
		pos = pos + 1;
	}
	gantiContent();
}