$(document).ready(function() {
  let maxLength = 140;

  // An event handler that listens when the user presses down on a character on the keyboard
  $("#tweet-text").on("input", function(e) {

    let length = $(this).val().length;
    let remaining = maxLength - length

    // If the remaining variable value is less than or equal 0, add the class '.over' to style the text with the color of red
    if (remaining <= 0) {
      $("#counter").addClass('over');
    } else {
      // Otherwise, remove the class '.over'
      $("#counter").removeClass('over');
    }

    $("#counter").text(remaining);
  })
});

