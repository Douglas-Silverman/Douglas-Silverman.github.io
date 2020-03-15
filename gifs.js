function runGif(id){
    let img = document.getElementById(id);
    let src = img.getAttribute("src");
    let data_alt = img.getAttribute("data-alt");

    img.setAttribute("src", data_alt);
    img.setAttribute("data-alt", src);
    console.log(src);
}