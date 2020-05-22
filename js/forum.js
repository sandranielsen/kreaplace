// read more - source: https://www.w3schools.com/howto/howto_js_read_more.asp
function myButton() {
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

function myButton1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("myButton1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read (5 Answers)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
};

function myButton2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("myButton2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read (2 Answers)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
};
