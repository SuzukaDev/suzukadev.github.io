// When pressing ALT+L clicks the theme-toggle button

document.addEventListener('keydown', function(event) {
	// if (event.key == 'z' && event.ctrlKey) {
	// if (event.key == 'l' && event.ctrlKey && event.shiftKey) {
	// if (event.key == 'o' && event.ctrlKey && event.shiftKey) {
	// if (event.key == 'l' && event.ctrlKey) {
	// if (event.key == 'l' && event.altKey) {
	// if (event.key == 'l' && event.altKey) {
	// if (event.key == 'z') {

	if (event.key.toLowerCase() == 'l' && event.altKey) {

		// alert("weeee assetssss");
        // CTRL + Z trigger
		// themeSwitch.click()
		const themeSwitch = document.getElementById('theme-toggle')

		themeSwitch.click()
    }
});


// alert("venga hombre");