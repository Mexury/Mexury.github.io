function getColorMode() {
	var body = document.getElementById('body');
	body.style.color = "#1e1e1e";
	body.style.background = "#f9f9f9";
	$(".box").css("transition","all 0ms ease");
	$(".post").css("transition","all 0ms ease");

	var mode = localStorage.getItem('colormode');
	if (mode == 'light') {
		body.style.color = "#1e1e1e";
		body.style.background = "#f9f9f9";
		$(".box").css("background","#f2f2f2");
		$(".post").css("background","#f2f2f2");
		$("#copiedmessage").css("background","#f2f2f2");
		$("#copiedmessage").css("color","#1e1e1e");
		$("#themeForm").css("background","#f2f2f2");
	} else
	if (mode == 'dark') {
		body.style.color = "#f9f9f9";
		body.style.background = "#212121";
		$(".box").css("background","#353535");
		$(".post").css("background","#353535");
		$("#copiedmessage").css("background","#353535");
		$("#copiedmessage").css("color","#f9f9f9");
		$("#themeForm").css("background","#353535");
	}
	
	$(".box.btn").css("background","#40bced");
	$(".box.btn").css("color","#f9f9f9");
	$(".box.unavailable").css("background","#c13434");
	$(".box.twitch").css("background","#6441a5");
	$(".box.steam").css("background","#344589");
	$(".box.twitter").css("background","#1da1f2");
	setTimeout(function () {
		$(".box").css("transition","all 400ms ease");
	}, 20);
}