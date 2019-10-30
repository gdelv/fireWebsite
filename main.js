let img = document.querySelectorAll("div .picture-container");
let overlay = document.querySelectorAll("div .overlay");

for(let i = 0 ; i < img.length; i++) {
    img[i].addEventListener('click', event => {
        img[i].style.zIndex = "0"
        overlay[i].style.zIndex = "4"
    })
}


for(let i = 0 ; i < overlay.length; i++) {
    overlay[i].addEventListener('dblclick', event => {
        img[i].style.zIndex = "4";
        overlay[i].style.zIndex = "0"
    })
}


