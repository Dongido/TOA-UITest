$(".testmonial-slider-area").owlCarousel({
  autoplay: true,
  slideSpeed:1000,
  items : 3,
  loop: true,
  nav:true,
  navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  margin: 30,
  dots: true,
  responsive:{
    320:{
      items:1
    },
    767:{
      items:2
    },
    600:{
      items:2
    },
    1000:{
      items:2
    }
  }
  
});

document.getElementById("year").innerHTML = new Date().getFullYear();