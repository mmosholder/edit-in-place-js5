$(document).on('ready', function() {
	$('.bio').on('click', function () {
		$('#bioEdit').addClass('editable');
	});

	$('#bioEdit').on('blur', function(){
		var textValue = $('#bioEdit').val();
		$('.bio').text(textValue);
		$(this).removeClass('editable');
	});

	$('.title').on('click', function () {
		$('#titleEdit').addClass('editable');
	});

	$('#titleEdit').on('blur', function() {
		var textValue = $('#titleEdit').val();
		$('.title').text(textValue);
		$(this).removeClass('editable');
	});


	$('.skills').on('click', function () {
		$('#skillsEdit').addClass('editable');
	});

	$('#skillsEdit').on('blur', function() {
		var textValue = $('#skillsEdit').val();
		$('.skills').text(textValue);
		$(this).removeClass('editable');
	});
});