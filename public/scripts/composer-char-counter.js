$(document).ready(function() {
  let maxLength = 140;
  const $error = $('.error');
  const $errorMessage = $('#error-message');

  // An event handler that listens when the user presses down on a character on the keyboard
  $("#tweet-text").on("input", function(e) {

    let length = $(this).val().length;
    let remaining = maxLength - length

    if (remaining <= 0) {
      $("#counter").addClass('over');
    } else {
      $("#counter").removeClass('over');
    }

    $("#counter").text(remaining);
  })
});

