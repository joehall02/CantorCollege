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

  // expand text
  $(".showComputing").click(function(){
    $(".courseDetailsComputing").slideToggle("fast", function(){
      if ($(this).is(":hidden")) {
        $(".showComputing").text("Show Course Details");
      } else {
        $(".showComputing").text("Hide Course Details");
      }
    });
  });

  $(".showDesign").click(function(){
    $(".courseDetailsDesign").slideToggle("fast", function(){
      if ($(this).is(":hidden")) {
        $(".showDesign").text("Show Course Details");
      } else {
        $(".showDesign").text("Hide Course Details");
      }
    });
  });
});
