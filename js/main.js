$(function(){
$('.photo__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"> <img src="img/Arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"> <img src="img/Arrow-right.svg" alt=""></button>'
});

  $('.about__dot').on('click', function(){
      $(this).toggleClass('active')
  });

  $(".about__dot").click(function(){
    $(this).children(".about__dot-text").toggleClass("active")
  });
  
    $('.header__burger').on('click', function(){
      $('.menu__inner').toggleClass('active-burger')
  });

  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


let acc = document.getElementsByClassName("footer__accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-footer");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
});