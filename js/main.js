$(document).ready(function () {
  // light slider config
  $("#lightSlider").lightSlider({
    item: 1,
    slideMargin: 5,
    loop: true,
    mode: "slide",
    auto: true,
    speed: 400,
    pauseOnHover: true,
    pause: 5000,
    controls: true,
  });

  // burger menu
  $(".burgerMenu").click(function() {
    $("nav").slideToggle("fast");
  });
});
