function preloader() {
     let imgs= [
        "pictures/326 logos.png",
        "pictures/Math 456.png",
        "pictures/Favicon for git.png",
        "pictures/github logo.png",
        "pictures/github logo-hover.png",
        "pictures/linkedIn logo.png",
        "pictures/linkedIn logo-hover.png",
        "pictures/Mona_Lisa_Still.png",
        "pictures/mona-lisa-mosaic.gif",
        "pictures/profilePic.png",
        "pictures/strategy pic.png",
        "pictures/ultimate_group_pic.png",
        "pictures/xochimilco.gif",
        "pictures/xochimilco-still.png"];

        let images = [];
        for (i = 0; i < imgs.length; i++) {
            images[i] = new Image()
            images[i].src = imgs[i]
        }
        console.log(images);
}


function openGithub() {
    window.open("https://github.com/douglas-silverman");
}

function openLinkedIn() {
    window.open("https://linkedin.com/in/douglas-silverman");
}

function imageTransition(id) {
    let img = document.getElementById(id);
    let src = img.getAttribute("src");
    let data_alt = img.getAttribute("data-alt");
    setTimeout(function(){ 
    img.setAttribute("src", data_alt);
    img.setAttribute("data-alt", src);
    }, 200);
}

