var rad = document.themeForm.theme;
    var prev = null;
    for(var i = 0; i < rad.length; i++) {
        rad[i].onclick = function () {
            (prev)? console.log(prev.value):null;
            if(this !== prev) {
                prev = this;
            }
            console.log(this.value)
			if (this.value == 2) {
				setColorMode('bluepurple');
			} else
			if (this.value == 1) {
				setColorMode('bluegreen');
			} else
			if (this.value == 0) {
				setColorMode('orangered');
			}
        };
    }

function setColorMode(mode) {
	localStorage.setItem('colormode', mode);
	window.location.reload();
}

function getColorMode() {
	var body = document.getElementById('body');
	
	var bluepurple0 = "rgb(212,0,255)";
	var bluepurple1 = "linear-gradient(220deg, rgba(212,0,255,1) 0%, rgba(0,212,255,1) 100%)";
	var bluegreen0 = "rgb(22,204,0)";
	var bluegreen1 = "linear-gradient(220deg, rgba(22,204,0,1) 0%, rgba(0,212,255,1) 100%)";
	var orangered0 = "rgb(204,0,0)";
	var orangered1 = "linear-gradient(220deg, rgba(204,0,0,1) 0%, rgba(255,202,0,1) 100%)";

	var mode = localStorage.getItem('colormode');
	if (mode == 'bluepurple') {
		$(".small-btn").css("background", bluepurple0);
		$(".small-btn").css("background", bluepurple1);
		$(".menu").css("background", bluepurple0);
		$(".menu").css("background", bluepurple1);
		$(".tip").css("background", bluepurple0);
		$(".tip").css("background", bluepurple1);
		$("#statuscircle").css("background", bluepurple0);
		$("#statuscircle").css("background", bluepurple1);
		document.getElementById('themeBP').checked = true;
		document.getElementById('themeBP').disabled = true;
		document.getElementById('themeBG').checked = false;
		document.getElementById('themeOR').checked = false;
	} else
	if (mode == 'bluegreen') {
		$(".small-btn").css("background", bluegreen0);
		$(".small-btn").css("background", bluegreen1);
		$(".menu").css("background", bluegreen0);
		$(".menu").css("background", bluegreen1);
		$(".tip").css("background", bluegreen0);
		$(".tip").css("background", bluegreen1);
		$("#statuscircle").css("background", bluegreen0);
		$("#statuscircle").css("background", bluegreen1);
		document.getElementById('themeBG').checked = true;
		document.getElementById('themeBG').disabled = true;
		document.getElementById('themeBP').checked = false;
		document.getElementById('themeOR').checked = false;
	} else
	if (mode == 'orangered') {
		$(".small-btn").css("background", orangered0);
		$(".small-btn").css("background", orangered1);
		$(".tip").css("background", orangered0);
		$(".tip").css("background", orangered1);
		$(".menu").css("background", orangered0);
		$(".menu").css("background", orangered1);
		$("#statuscircle").css("background", orangered0);
		$("#statuscircle").css("background", orangered1);
		document.getElementById('themeOR').checked = true;
		document.getElementById('themeOR').disabled = true;
		document.getElementById('themeBP').checked = false;
		document.getElementById('themeBG').checked = false;
	}
}