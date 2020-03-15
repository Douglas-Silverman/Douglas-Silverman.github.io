function mona_gif_function(){
    let img = document.getElementById("mona-lisa-gif");
    let src = img.getAttribute("src");
    let data_alt = img.getAttribute("data-alt");

    img.setAttribute("src", data_alt);
    img.setAttribute("data-alt", src);
    console.log(src);
}