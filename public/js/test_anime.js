// TESTING anime.js
// testeando
anime({
	targets: "#animate-target",
	translateX: 250,
	duration: 2500,
	easing: "easeInOutQuad",
	// direction: "alternate",
	loop: true,
});
anime({
	targets: "#animate-target2",
	translateX: 250,
	duration: 800,
	delay: 200,
	easing: "easeInOutQuad",
});

// document.getElementById("animate-target").innerText = "hola";
// console.log("vamos");
