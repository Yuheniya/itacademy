// слайдер

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSlide = 0;
 
btnNext.addEventListener("click", function () {
   
    if (viewSlide < 4) { 
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    slider.style.left = -viewSlide * viewport + "px";
});
 
btnPrev.addEventListener("click", function () {
    if (viewSlide > 0) { 
        viewSlide--; 
    } else { 
        viewSlide = 4; 
    }
    slider.style.left = -viewSlide * viewport + "px";
});