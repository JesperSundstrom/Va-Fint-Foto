window.onresize = footerToBottom;
window.onload = footerToBottom;
function footerToBottom() {
    windosSize = (window.innerHeight);
    navheight = (document.getElementById("8hd1-2sd1").clientHeight);
    footersie = (document.getElementById("j890-c19f").clientHeight);
    var height = (windosSize - navheight - footersie);
    document.getElementById("af20-v431").style.minHeight = height;

}
function showNav() {
    var c = document.getElementById('burgerMenu');

    if (c.checked) {
        var elements = document.querySelectorAll('.navContent');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        return true;
    } else {

        var elements = document.querySelectorAll('.navContent');
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }

        return false;
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
    document.getElementById("bigPicture").remove();
}

//window.onresize = function () { location.reload(); }