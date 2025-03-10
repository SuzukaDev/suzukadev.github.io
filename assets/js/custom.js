/* custom.js */
// REFACTOR javascript

const getPreferredColorScheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};


// let darkmode = localStorage.getItem('darkmode')
let theme = localStorage.getItem('theme')
const themeSwitch = document.getElementById('theme-toggle')
// let htmlTag = document.getElementsByTagName("html")[0];

const enableDarkMode = () => {
	// document.documentElement.classList.add('darkmode')
	document.documentElement.classList.remove('light')
	document.documentElement.classList.remove('dark')
	document.documentElement.classList.add('dark')
	// localStorage.setItem('darkmode', 'active')
	localStorage.setItem('theme', 'dark')
}

const enableLightMode = () => {
	// document.documentElement.classList.remove('darkmode')
	document.documentElement.classList.remove('light')
	document.documentElement.classList.remove('dark')
	document.documentElement.classList.add('light')
	// localStorage.setItem('darkmode', null)
	localStorage.setItem('darkmode', 'light')
}

// if(darkmode === 'dark') enableDarkMode()

if (theme == null){
	theme = getPreferredColorScheme()
}
// documentElement is the html tag
document.documentElement.classList.add(theme)

themeSwitch.addEventListener("click", () => {
	// alert("heeey peña")
	// darkmode !== "active" ? enableDarkMode() : disableDarkMode()
	// darkmode !== "dark" ? enableDarkMode() : enableLightMode()

	if(document.documentElement.classList.contains('light')){
		// alert("ES light")
		document.documentElement.classList.remove('light')
		document.documentElement.classList.add('dark')
		localStorage.setItem('theme', 'dark')

	}
	// else if(document.documentElement.classList.contains('dark')){
	else{
		// alert("ES DARK")
		document.documentElement.classList.remove('dark')
		document.documentElement.classList.add('light')
		localStorage.setItem('theme', 'light')

	}
})

// const enableDarkmode = () => {
// 	document.html.classList
// }

function showDebugAlert() {
	alert("holaaaaa");
	// alert(htmlTag.classList);
}
// showDebugAlert()
// document.documentElement.classList.add('light')

// document.addEventListener("DOMContentLoaded", function () {
// 	const toggle = document.getElementById("theme-toggle");
// 	// const body = document.body;
// 	// const html = document.html;
// 	// const storedTheme = localStorage.getItem("theme");
	
// 	// if (storedTheme) {
// 	// 	body.classList.toggle("dark", storedTheme === "dark");
// 	// }
	
// 	toggle.addEventListener("click", function () {
// 		showDebugAlert()
// 		// const isDark = body.classList.toggle("dark");
// 	//   localStorage.setItem("theme", isDark ? "dark" : "light");
// 	});
//   });





// console.log(getColorScheme()); // Outputs "dark" or "light"
// alert(getPreferredColorScheme()); // Outputs "dark" or "light"

