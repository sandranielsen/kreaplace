let section2 = document.getElementById("section2");

if (section2.getBoundingClientRect().bottom < window.innerHeight) {
     section2.style.opacity = 1;
}

if (section2.getBoundingClientRect().top >= 0) {
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