let childA = document.querySelector('#loginFP');
let childB = document.querySelector('#signinFP');

function myFunctionFP() {
    if (childA.classList.contains('front')) {
        childA.classList.remove('front');
        childA.classList.add('back');
        childB.classList.remove('back');
        childB.classList.add('front');

    } else {


        childA.classList.remove('back');
        childA.classList.add('front');
        childB.classList.remove('front');
        childB.classList.add('back');
    }
}


function myFunctionFP1() {
    if (childB.classList.contains('back')) {
        childB.classList.remove('back');
        childB.classList.add('front');
        childA.classList.remove('front');
        childA.classList.add('back');

    } else {
        childB.classList.remove('front');
        childB.classList.add('back');
        childA.classList.remove('back');
        childA.classList.add('front');


    }
}
