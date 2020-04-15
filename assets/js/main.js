/**
 * Code written by my mentor Simen Daehlin
 * This will add sticky class when user scrolls.
 * If it's less then 5 px from the top it will remove it 
 */
$(document).ready(function () {
  let scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos < 5) {
      $("#nav").addClass("sticky");
    } else {
      $("#nav").removeClass("sticky");
    }
  });
});