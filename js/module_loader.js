window.addEventListener("load", function(){
	var loadwrapper = document.getElementById('load-wrapper');
	setTimeout(function(){
		document.getElementById('center').removeChild(loadwrapper); 
		document.body.style.overflow = "auto";
	}, 600);
});