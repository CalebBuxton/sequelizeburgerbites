$(document).ready(function(){
	pageSetup();
})

function pageSetup() {
$.ajax({
	url: "/api/burgers",
	method: "GET"
}).done(function(data) {
	updateBurgers(data);
})
}

function updateBurgers(data) {
	$("#burgerMenu").html("");
	$("#burgersEaten").html("");
	for (var i = 0; i < data.length; i++) {
		var $burger = $("<li>");
		$burger.append(data[i].burger_name);
		if (data[i].devoured) {
			$("#burgersEaten").append($burger);
		}
		else {
			var btn = $("<button>", {id: data[i].id, "class": "menuBtn"})
			btn.text("DEVOUR")
			$burger.append(btn);
			$("#burgerMenu").append($burger)
		}
	}
}

$("#sendBurger").on("click", function(evt) {
	evt.preventDefault();
	var newBurger = {
		name: $("#burger").val().trim()
	};
	addBurger(newBurger);
	$("#burger").val("");
})

function addBurger(burger) {
	$.post("/api/burgers", burger, function(){
	}).then(function(){
		pageSetup();
	})
}

$(document).on("click", "button.menuBtn", function(evt){
	evt.preventDefault();
	var id = $(this)[0].id;
	var req = {
		id: id
	}

	eatBurger(req);
})

function eatBurger(id){
 $.ajax({
      method: "PUT",
      url: "/api/burgers",
      data: id
    }).done(function() {
	pageSetup();
})
}