$(document).ready(function() {
  let maxLength = 140;
  const $error = $('.error');
  const $errorMessage = $('#error-message');

  // An event handler that listens when the user presses down on a character on the keyboard
  $("#tweet-text").on("input", function(e) {

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

