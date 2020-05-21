// dropdown menu - source: https://www.w3schools.com/howto/howto_js_dropdown.asp

function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
     if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
               var openDropdown = dropdowns[i];
               if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
               }
          }
     }
}

// read answers - source: https://www.w3schools.com/howto/howto_js_read_more.asp
function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read (3 Answers)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
};
