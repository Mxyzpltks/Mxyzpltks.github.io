// slider.js
$(document).ready(function() {
  // Function to handle the slider
  function handleSlider() {
    var $slider = $('.slider');
    var $items = $('.slider--item');

    $slider.append($items.first().clone());

    var slideWidth = $items.width();
    var sliderWidth = slideWidth * $items.length;
    $slider.width(sliderWidth);

    var currentPosition = 0;

    function nextSlide() {
      currentPosition++;
      if (currentPosition === $items.length) {
        currentPosition = 1;
        $slider.css('left', '0');
      }
      $slider.animate({
        left: -currentPosition * slideWidth
      });
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  }

  // Initialize the slider
  handleSlider();
});
