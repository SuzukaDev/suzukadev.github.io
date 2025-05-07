// CREDITS TO: https://chriscoyier.net/2023/04/05/prevent-transitions-as-a-page-is-loading/
window.addEventListener("load", () => {
	document.body.classList.remove("preload-no-transitions");
  });