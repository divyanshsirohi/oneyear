document.addEventListener("DOMContentLoaded", function () {

	// Target the NEW wrapper instead of the old heartTxt
	var btn = document.getElementById("heartButtonsWrapper");
	if (btn) btn.style.opacity = 1; // keep visible always to avoid fade errors

	var btnVal = 1; // set to 1 so buttonFadeIn isn't needed

	function showImage() {
		myImage.setAttribute("src", imageArray[imageIndex]);
		myTxt.innerHTML = txtArray[imageIndex];
		imageIndex++;
		if (imageIndex >= len) {
			imageIndex = 0;
		}
	}

	function play() {
		if (t == 0) {
			myImage.setAttribute("src", "");
			myTxt.innerHTML = "";
			imageIndex = 0;
			clearInterval(showImageInterval);
		}
		flag = 1 - flag;
		document.getElementById("typeDiv").style.opacity = flag;
		document.getElementById("imgTxt").style.opacity = 1 - flag;
		if (t == 0) {
			setInterval(showImage, 2500);
		}
		t++;
	}

	function preshowImage() {
		document.getElementById("imgTxt").style.opacity = 0;
		myImage.setAttribute("src", imageArray[imageIndex]);
		myTxt.innerHTML = txtArray[imageIndex];
		imageIndex++;
		if (imageIndex >= len) {
			imageIndex = 0;
		}
	}

	function event() {
		showImageInterval = setInterval(preshowImage, 100);

		imgInterval = setInterval(function () {
			if (ok == 3) {
				clearInterval(imgInterval);
			}
		}, 50);
	}

	var showImageInterval;
	var imgInterval;

	event();
});
