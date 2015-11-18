//window.onresize = footerToBottom;
//window.onload = footerToBottom;
//function footerToBottom() {
//    windosSize = (window.innerHeight);
//    navheight = (document.getElementById("8hd1-2sd1").clientHeight);
//    footersie = (document.getElementById("j890-c19f").clientHeight);
//    var height = (windosSize - navheight - footersie);
//    document.getElementById("af20-v431").style.minHeight = height;

//}
var c = true

function showNav() {
    console.log(c);
    if (c == false) {
        var elements = document.querySelectorAll('.navContent');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        c = true;
    } else {
        
        var elements = document.querySelectorAll('.navContent');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }

        c = false;
    }
}



function bigPicture(imageURL) {
    Picture = document.createElement('div');
    Picture.id = "bigPicture";
    document.body.appendChild(Picture);
    document.getElementById("bigPicture").setAttribute('onclick', 'bigPictureX();');
    document.getElementById("bigPicture").setAttribute('style', 'background-image:url(' + imageURL + ')');


}

function bigPictureX() {
    bild = document.getElementById("bigPicture")
    $(bild).remove();
}

//window.onresize = function () { location.reload(); }



function popup() {

    el = document.getElementById("popup");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";

}



function setCookie(mode, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = mode + "=" + cvalue + "; " + expires;
}

function getCookie(mode) {
    var name = mode + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie('Mode');

    if (user == 'Företag') {
        alert("Welcome again " + user);
        window.open('Företag/FIndex.html', "_self");

    }
    else if (user == 'Privat') {
        alert("Good day " + user);
        window.open('Privat/PIndex.html', "_self");

    }
    else {
        popup();
    }

}
