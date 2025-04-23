// Get the button:
let mybutton = document.getElementById("scrollToTopButton");
const PIXELS_TRESHOLD = 500
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

mybutton.onclick = function(){topFunction()};

function scrollFunction() {
	if (document.body.scrollTop > PIXELS_TRESHOLD || document.documentElement.scrollTop > PIXELS_TRESHOLD) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	// alert("topFunction(): button pressed");
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 