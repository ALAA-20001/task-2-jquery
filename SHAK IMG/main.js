
$(function () {
  $("#imag1").draggable();
  $("#blackhole").droppable({
    drop: function (event, ui) {
      ui.helper.effect("scale", { percent: 1 }, 500, function () {
        $(this).fadeOut();
      });
    },
  });

  $("#imag1").hover(
    function () {
      $(this).effect("shake", { times: 3, distance: 5 }, 300);
    },
    function () {}
  );
});