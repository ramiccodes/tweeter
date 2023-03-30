$(document).ready(function() {
  let maxLength = 140;

  $("#tweet-text").on("keyup", function(e) {
    if (e.key === "Backspace") {
      let length = $(this).val().length;
      let remaining = maxLength + length;
      $("#counter").text(remaining);
    }

    let length = $(this).val().length;
    let remaining = maxLength - length
  
    if (remaining === 0) {
      $("#counter").addClass('over');
    } else {
      $("#counter").removeClass('over');
    }

    $("#counter").text(remaining);
  })
});

