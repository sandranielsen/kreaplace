function changeImage(element) {
    var image = element.children[0];
    if (image.src.match("../media/bookmark_empty.svg")) {
        image.src = "../media/bookmark_full.svg"
    } else {
        image.src = "../media/bookmark_empty.svg"
    }
};
