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