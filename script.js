$('.show').click(function() {

	$.ajax({
		url: "/submit.php",
		type: "POST",
		success: function(json) {
			let data = JSON.parse(json)[0];
			$("<img>").attr("src", data.img)
				.appendTo(".image");
			$("<div>").appendTo('body')
				.addClass('text')
				.text(data.text);
			$('.show').attr('disabled', 'disabled'); 
		}
	});

	$('<button>').appendTo('.buttons')
		.addClass('delete-elements')
		.text('Скрыть картинку')
		.click(function() {
			$("img").remove();
			$(".text").remove();
			$('.show').removeAttr('disabled'); 
			$('.delete-elements').remove();
		});
});
