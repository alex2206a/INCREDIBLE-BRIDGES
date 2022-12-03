const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {


    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    })

    // AOS Instance
    AOS.init();

});

type="text/javascript"
var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

//javascript for quick view button
var popup = function(popupClick){
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", () => {
    popup(i);
  });
});

//javascript for close button
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});

$(document).ready(function(){
    $("#allbtn").click(function(){
      $("#designid").toggle();
      $("#spaceid").toggle();
      $("#longid").toggle();
      $("#tallid").toggle();
      $("#highid").toggle();
      $("#oldid").toggle();
    })

    $("#designbtn").click(function(){
      $("#designid").show();
      $("#spaceid").hide();
      $("#longid").hide();
      $("#tallid").hide();
      $("#highid").hide();
      $("#oldid").hide();
    })

    $("#spacebtn").click(function(){
      $("#spaceid").show();
      $("#designid").hide();
      $("#longid").hide();
      $("#tallid").hide();
      $("#highid").hide();
      $("#oldid").hide();
    })

    $("#longbtn").click(function(){
      $("#designid").hide();
      $("#spaceid").hide();
      $("#longid").show();
      $("#tallid").hide();
      $("#highid").hide();
      $("#oldid").hide();
    })

    $("#tallebtn").click(function(){
      $("#tallid").show();
      $("#designid").hide();
      $("#spaceid").hide();
      $("#longid").hide();
      $("#highid").hide();
      $("#oldid").hide();
    })

    $("#highbtn").click(function(){
      $("#highid").show();
      $("#designid").hide();
      $("#spaceid").hide();
      $("#longid").hide();
      $("#tallid").hide();
      $("#oldid").hide();
    })

    $("#oldbtn").click(function(){
      $("#oldid").show();
      $("#designid").hide();
      $("#spaceid").hide();
      $("#longid").hide();
      $("#tallid").hide();
      $("#highid").hide();
    })

})

const countE1 = document.getElementById("count");
countvisit();

function countvisit()
{
  fetch("https://api.countapi.xyz/update/mouse/laptop?amount=1")
  .then(res => res.json())
  .then((res => {
  countE1.innerHTML = res.value;
  }));
}

  // click to slide text
  $(document).ready(function()
  {
    $(".reamor").click(function()
    {
      $("p").css(
      {}).slideToggle(1000)
    })
  })

  // click to n
  $(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
  });