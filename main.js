$(document).on('ready', function() {
	$('.bio').on('click', function () {
		$('#bioEdit').css('display', 'inherit');
	});

	$('#bioEdit').on('blur', function(){
		var textValue = $('#bioEdit').val();
		$('.bio').text(textValue);
		$(this).css('display', 'none');
	});

	$('.title').on('click', function () {
		$('#titleEdit').css('display', 'inherit');
	});

	$('#titleEdit').on('blur', function() {
		var textValue = $('#titleEdit').val();
		$('.title').text(textValue);
		$(this).css('display', 'none');
	});


	$('.skills').on('click', function () {
		$('#skillsEdit').css('display', 'inherit');
	});

	$('#skillsEdit').on('blur', function() {
		var textValue = $('#skillsEdit').val();
		$('.skills').text(textValue);
		$(this).css('display', 'none');
	});
});