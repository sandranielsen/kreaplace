//code source: https://www.w3schools.com/js/tryit.asp?filename=tryjs_lightbulb


function changeImage(element) {
    var image = element.children[0];
    if (image.src.match("media/bookmark_empty_v2.svg")) {
        image.src = "media/bookmark_full.svg"
    } else {
        image.src = "media/bookmark_empty_v2.svg"
    }
};