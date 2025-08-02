function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= -1 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



const handler = (entries) => {
  // Get all the links from the side menu
//   const allLinks = document.querySelectorAll("ul li a");
  const allLinks = document.querySelectorAll("ol li a");
//   alert("Number of links: " + allLinks.length);
  
  // Get all the sections we want to track
//   const allSections = document.querySelectorAll("h2");
//   const allSections = document.querySelectorAll("h1");
//   const allSections = document.querySelectorAll("h3");
  const allSections = document.querySelectorAll("h1, h2, h3");
  // const allSections = document.querySelectorAll("h1, h2");
  // alert("Number of allSections: " + allSections.length);
  // alert("Number of allLinks: " + allLinks.length);

// Ensure each section has an ID
// allSections.forEach((section, index) => {
//   if (!section.id) {
//     section.id = "auto-section-" + index;
//   }
// });

  // Get all entries that have just come into the viewport
  const allEntries = new Set(
    entries
      .filter((entry) => entry.isIntersecting == true)
      .map((entry) => entry.target)
  );

  // alert("Number of allEntries: " + allEntries.length);
  // alert("allEntries size: " + allEntries.size);


  let currentSection;
  const css_class = "article-header-active"


  // Look through all sections
  for (let i = 0; i < allSections.length; i++) {
    // Get the current section
    currentSection = allSections[i];
    // If the section is in the viewport or it has just intersected, set it as active
    if (isElementInViewport(currentSection) || allEntries.has(currentSection)) {
      // Set all links as inactive
	//   alert("eaa: " + currentSection.innerText);
	//   alert("eaa: " + currentSection.textContent );
	//   alert("currentSection: " + currentSection );
	// alert("eaa: " + currentSection.tagName + " — " + currentSection.id + " — " + currentSection.textContent);


    //   allLinks.forEach((link) => link.classList.remove("active"));
	  if (currentSection.id)
      {
      allLinks.forEach((link) => link.classList.remove(css_class));

		  document
		  // Set current link to active
        .querySelector(`a[href="#${currentSection.id}"]`)
        // .classList.add("active");
        .classList.add(css_class);
        // Exit loop after setting first active link
        break;
	  }
	
    }
  }
};



// Create a new observer with the handler
const observer = new IntersectionObserver(handler);
// const observer = new IntersectionObserver(handler, { threshold: 0.1 });
// const observer = new IntersectionObserver(handler, { threshold: 0 });

// Observe all headings on our webpage
// document.querySelectorAll("h2").forEach((section) => {
// document.querySelectorAll("h1").forEach((section) => {
// document.querySelectorAll("h3").forEach((section) => {
document.querySelectorAll("h1, h2, h3").forEach((section) => {
// document.querySelectorAll("h1, h2").forEach((section) => {
  // if (section.classList.length === 0) {
  // Avoid to observe headers that do NOT have an ID
  if (section.id) {
  // if (true) {
	  // alert("currentSection: " + section.textContent );

    observer.observe(section);
  }
});