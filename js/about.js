let section2 = document.getElementById("section2");
let section3 = document.getElementById("section3");

/* check if container is lower than the screen */
if (section2.getBoundingClientRect().bottom < window.innerHeight) {
     section2.style.opacity = 1;
}

/* check if container is higher than the screen */
if (section2.getBoundingClientRect().top >= 0) {
     section2.style.opacity = 0;
}

/* add the fading-in keyframes animation to the container*/
window.addEventListener("scroll", function () {
     if (elVisible(section2)) {
          section2.style = "animation: fadein 2s";
     }
});

/* check if container is lower than the screen */
if (section3.getBoundingClientRect().bottom < window.innerHeight) {
     section3.style.opacity = 1;
}
/* check if container is higher than the screen */
if (section3.getBoundingClientRect().top >= 0) {
     section3.style.opacity = 0;
}

/* add the fading-in keyframes animation to the container*/
window.addEventListener("scroll", function () {
     if (elVisible(section3)) {
          section3.style = "animation: fadein 2s";
     }
});

/* check if container is visible */
function elVisible(el) {
     return (el.getBoundingClientRect().top >= 0 && (el.getBoundingClientRect().bottom) - 250 < window.innerHeight);
}