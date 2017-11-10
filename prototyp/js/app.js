$(document).ready(function(){
	$("#addIngredient").click(function(event){
		event.preventDefault();
		var ingredient = $(".ingredient").clone().removeClass("ingredient");
		var amount = $(".amount").clone().removeClass("amount");
		var lastIngredient = $("#ingredients").last("div");
		var lastAmount = $("#amounts").last("div");
		$("#ingredients div:last").after(ingredient);
		lastAmount.append(amount);
	});
	$("#addStep").click(function(event){
		event.preventDefault();
		var step = $(".step").clone().removeClass("step");
		var image = $(".image").clone().removeClass("image");
		var lastStep = $("#steps").last("div");
		var lastImage = $("#steps").last("div");
		$("#steps div:last").before(step);
		$("#steps div:last").before(image);
	});
	$("#searchLabel").click(function(evemt){
		event.preventDefault();
		$("#search").show();
	});
});



