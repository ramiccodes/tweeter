$(document).ready(function() {
  let maxLength = 140;
  const $error = $('.error');
  const $errorMessage = $('#error-message');

  // An event handler that listens when the user presses down on a character on the keyboard
  $("#tweet-text").on("input", function(e) {
    // If the event's key passed is "Backspace", add the length of the text the user typed in to the max length and display that
    // text on the on screen character counter.
    if (e.key === "Backspace") {
      let length = $(this).val().length;
      let remaining = maxLength + length;
      $("#counter").text(remaining);
    }

    let length = $(this).val().length;
    let remaining = maxLength - length

    if (remaining === 0) {
      $("#counter").addClass('over');
      $error.slideDown("slow", function() {
        $errorMessage.text("You can't type more than 140 characters!!!")
        $error.addClass('enable-error')
      });
    } else {
      $("#counter").removeClass('over');
      $error.slideUp("slow", function() {
        $error.removeClass('enable-error')
      });
    }

    $("#counter").text(remaining);
  })
});

