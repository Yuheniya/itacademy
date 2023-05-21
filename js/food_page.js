$(document).ready(function () {
    $(".slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 2,
      autoplay: true,
      speed: 900,
      autoplaySpeed: 700,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  

  var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide,3000);
        
        function nextSlide() {
            slides[currentSlide].className = 'slide';
            currentSlide = (currentSlide+1)%slides.length;
            slides[currentSlide].className = 'slide showing';
        }