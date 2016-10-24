var data = [
		{
			title:"Product Feature",
			isi:"The integration of Market Research, Strategy and Operation Consultancy can be found through our product features above. There are 15 value innovations that we generated from our 8 exhaustive years of research, They are:"
		},
		{
			title:"Value Innovations",
			isi:"1. Eliminating consultant operational costs <br/> 2. Eliminating office politics <br/> 3. Reducing service duration <br/> 4. Reducing service fee <br/> 5. Reducing human error & subjectivity"
		},
		{
			title:"Value Innovations",
			isi:"6. Reducing dependency on consultant <br/> 7. Raising service coverage <br/> 8. Raising customer involvement & access <br/> 9. Raising process and results accuracy <br/> 10. Raising work flexibility & mobility"
		},
		{
			title:"Value Innovations",
			isi:"11. Creating indefinite talent pool <br/> 12. Creating collaboration <br/> 13. Creating service sustainability <br/> 14. Creating transparency <br/> 15. Creating new market for SMEs"
		},
		{
			title:"Project Failure",
			isi:"There are top three reasons for project failure from 2004 – 2014 <br/> 1. Bad estimates / missed deadlines <br/> 2. Scope Changes <br/> 3. Insufficient Resources"
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
		pos = 4;
	}else{
		pos = pos - 1;
	}
	gantiContent();
}

function klikKanan(){
	if(pos >= 4){
		pos = 0;
	}else{
		pos = pos + 1;
	}
	gantiContent();
}