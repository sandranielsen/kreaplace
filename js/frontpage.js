let childA = document.querySelector('#loginFP');
let childB = document.querySelector('#signinFP');

function myFunctionFP() {
    if (childA.classList.contains('front')) {
        document.getElementById('loginFP').style.animation = "goback 1s ease-in-out";
        document.getElementById('signinFP').style.animation = "gofront 1s ease-in-out";
        childA.classList.remove('front');
        childA.classList.add('back');
        childB.classList.remove('back');
        childB.classList.add('front');

    } else {
        document.getElementById('loginFP').style.animation = "gofront 1s ease-in-out";
        document.getElementById('signinFP').style.animation = "goback 1s ease-in-out";
        childA.classList.remove('back');
        childA.classList.add('front');
        childB.classList.remove('front');
        childB.classList.add('back');
    }
}


function myFunctionFP1() {
    if (childB.classList.contains('back')) {
        document.getElementById('signinFP').style.animation = "gofront 1s ease-in-out";
        document.getElementById('loginFP').style.animation = "goback 1s ease-in-out";
        childB.classList.remove('back');
        childB.classList.add('front');
        childA.classList.remove('front');
        childA.classList.add('back');

    } else {
        document.getElementById('signinFP').style.animation = "goback 1s ease-in-out";
        document.getElementById('loginFP').style.animation = "gofront 1s ease-in-out";
        childB.classList.remove('front');
        childB.classList.add('back');
        childA.classList.remove('back');
        childA.classList.add('front');


    }
}
