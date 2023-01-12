document.getElementById("ulBtn").onclick = function () {
	ul = document.getElementById('switchUlStyle');
	v = window.getComputedStyle(ul).visibility;
	if (v == "visible") {
	}
	else {
		document.getElementById("switchUlStyle").classList.toggle("visible");
		document.getElementById("switchUlStyle").classList.toggle(".changeheight");
		document.getElementById("switchGridStyle").classList.toggle("invisible");
	}
}

document.getElementById('gridBtn').onclick = function () {
	grid = document.getElementById('switchGridStyle');
	v = window.getComputedStyle(grid).visibility;
	if (v == "visible") {
	}
	else {
		document.getElementById("switchGridStyle").classList.toggle("invisible");
		document.getElementById("switchUlStyle").classList.toggle("visible");
	}
}