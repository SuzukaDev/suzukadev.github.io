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

function has_html_a_theme_class() {
	return document.documentElement.classList.contains('light') || document.documentElement.classList.contains('dark');
 }

// if(darkmode === 'dark') enableDarkMode()

if (theme == null){
	theme = getPreferredColorScheme()
}
// documentElement is the html tag
// if(document.documentElement.classList == "" ){
if(has_html_a_theme_class() == false ){
	// If the HTML element dont have a theme tag, we can add the theme tag.
	// alert("HTML style tag dont have a theme tag")
	document.documentElement.classList.add(theme)
} else {
	// alert("Page already set a theme tag, we dont add the theme class")
}

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

