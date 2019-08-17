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

// ----- About me typewriter ----- //

function setupTypewriter(t) {
  var HTML = t.innerHTML;
  t.innerHTML = "";

  var cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;

  var type = function() {

    if (writingTag === true) {
        tag += HTML[cursorPosition];
      }

    if (HTML[cursorPosition] === "<") {
        tempTypeSpeed = 0;
        if (tagOpen) {
          tagOpen = false;
          writingTag = true;
        } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
        }
      }

    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }

    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
      } else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
        }
        t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }
    };
  return {
    type: type
  };
}

var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();
