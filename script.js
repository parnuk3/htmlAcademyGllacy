var bg = document.querySelector(".contain");
var backgrounds = ["bg1", "bg2", "bg3"]


function slider () {
    
    var slide = document.querySelector(".slider-btn:checked").dataset.bgs;
    for (var i = 0; i < backgrounds.length; i++) {
        bg.classList.remove(backgrounds[i]);
    }
    bg.classList.add(slide);
}



