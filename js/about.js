let section1 = document.getElementById("section1");
let section2 = document.getElementById("section2");

if (section1.getBoundingClientRect().bottom < window.innerHeight) {
     section1.style.opacity = 1;
}

if (section1.getBoundingClientRect().top >= 0) {
     section1.style.opacity = 0;
}

window.addEventListener("scroll", function () {
     if (elVisible(section1)) {
          section1.style = "animation: fadein 2s";
          console.log("Is this working?");
     }
});

if (section1.getBoundingClientRect().bottom < window.innerHeight) {
     section2.style.opacity = 1;
}

if (section1.getBoundingClientRect().top >= 0) {
     section2.style.opacity = 0;
}

window.addEventListener("scroll", function () {
     if (elVisible(section2)) {
          section2.style = "animation: fadein 2s";
          console.log("Is this working?");
     }
});


function elVisible(el) {
     return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}