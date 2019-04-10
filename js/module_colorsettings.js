var rad = document.themeForm.s3;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function () {
            (prev)? console.log(prev.value):null;
            if(this !== prev) {
                prev = this;
            }
            console.log(this.value)
			if (this.value == 1) {
				setColorMode('light');
			} else
			if (this.value == 0) {
				setColorMode('dark');
			}
        };
    }

function setColorMode(mode) {
	localStorage.setItem('colormode', mode);
	window.location.reload();
}

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
		document.getElementById('s3On').checked = true;
		document.getElementById('s3On').disabled = true;
		document.getElementById('s3Off').checked = false;
		$("#themeForm").css("background","#f2f2f2");
	} else
	if (mode == 'dark') {
		body.style.color = "#f9f9f9";
		body.style.background = "#212121";
		$(".box").css("background","#353535");
		$(".post").css("background","#353535");
		$("#copiedmessage").css("background","#353535");
		$("#copiedmessage").css("color","#f9f9f9");
		document.getElementById('s3On').checked = false;
		document.getElementById('s3Off').checked = true;
		document.getElementById('s3Off').disabled = true;
		$("#themeForm").css("background","#353535");
	}
	
	$(".box.btn").css("background","#40bced");
	$(".box.unavailable").css("background","#c13434");
	setTimeout(function () {
		$(".box").css("transition","all 400ms ease");
	}, 20);
}