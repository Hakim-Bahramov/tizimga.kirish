$(document).ready(function () {

	$("#button").click(function () {

		var x = $("#login").val();
		var y = $("#parol").val();

		if (x !== "" && y === "") {
			$("#divTwo").html("<span class = 'text-danger'>" + "Parolni kiriting" + "</span>");
		} else if (x === "" && y !== "") {
			$("#divOne").html("<span class = 'text-danger'>" + "Loginni kiriting" + "</span>");
		} else if (x === "" && y === "") {
			$("#divTwo").html("<span class = 'text-danger'>" + "Parolni kiriting" + "</span>");
			$("#divOne").html("<span class = 'text-danger'>" + "Loginni kiriting" + "</span>");
		} else if (x !== "" && y !== "") {
			$("span").remove();
		}

	})

})