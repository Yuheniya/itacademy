//слайдер

let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
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




var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
  } else {
      document.getElementById('upbutton').style.display = 'none';
  }
}




//поля ввода
function checkForm(){
    if (document.getElementById("modal-content").value == '')
    {
        alert ('Заполните все поля');
        return false;
    }
}
