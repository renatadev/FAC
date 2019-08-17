// ----- Navbar animation on scroll ----- //
//Cross-browser scroll effect

var myNav = document.getElementById("nav");

window.onscroll = function() {
  "use strict";  // doc.body for Chrome... doc.docElem for Firefox and IE.
  if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};
