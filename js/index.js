$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
                      items: 1,
                      loop: true,
                      nav: true,
                      navText:["<img src='images/rightArrow.png'>","<img src='images/leftArrow.png'>"],
    });
  });
  let x = document.querySelector(".smthSS");
  function burger() {
    if (x.style.width == "100%") {
      x.style.width = "0";
      x.style.opacity = "0";
      
    } else {
      x.style.width = "100%";
      x.style.opacity = "1";
      x.style.transform = "translateY(0)";
      
    }
  
  }
  function dissapear() {
    x.style.width = "0";
      x.style.opacity = "0";
      x.style.transform = "translateY(-100%)";
  }