function runGif(id){
    let img = document.getElementById(id);
    let src = img.getAttribute("src");
    let data_alt = img.getAttribute("data-alt");

    img.setAttribute("src", data_alt);
    img.setAttribute("data-alt", src);
    console.log(src);
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

