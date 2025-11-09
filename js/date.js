// Fade-in Setup
const dv = document.getElementById("content");
dv.style.opacity = 0;
let val = 0;

// Relationship Start Date (10 Nov 2024)
const startDate = new Date(2024, 10, 10, 0, 0, 0); // Month index: 0 = Jan, so 10 = Nov

function timer() {
	const t = new Date() - startDate;

	const d = Math.floor(t / (1000 * 60 * 60 * 24));
	let h = Math.floor(t / (1000 * 60 * 60) % 24);
	let m = Math.floor(t / (1000 * 60) % 60);
	let s = Math.floor(t / 1000 % 60);

	// Leading zeros for clean UI
	h = h.toString().padStart(2, "0");
	m = m.toString().padStart(2, "0");
	s = s.toString().padStart(2, "0");

	document.getElementById("d").innerHTML = d;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}

function fadein() {
	if (val < 1) {
		val += 0.025;
		dv.style.opacity = val;
	} else {
		clearInterval(fadeinInterval);
		if (ok === 2) ok++;
	}
}

let fadeInterval;
let fadeinInterval;

// Initialize Timer
timer();
setInterval(timer, 1000);

// Trigger Fade-In
fadeInterval = setInterval(() => {
	if (ok === 2) {
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50);
