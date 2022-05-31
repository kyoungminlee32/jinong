function goBack(){
	window.history.back();
}

$( document ).ready(function(){
	$(".table-work .form-check-input").on({
		change:function(e){
			$(this).parents(".table-work tbody tr").toggleClass('bg-info02');
		}
	});
});

$(window).resize(function(){

	if ($(window).width() >= 1080) {  
		$('.header,.sub-header').removeClass('mobil-header');
	}  
	   
	if ($(window).width() < 1080) {  
		$('.header,.sub-header').addClass('mobil-header');
	}        
});