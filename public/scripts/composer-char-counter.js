$(document).ready(function() {
  console.log("hello")
});

let maxLength = 140;

$("#tweet-text").on("keyup", function(e) {
  if (e.key === "Backspace") {
    let length = $(this).val().length;
    let remaining = maxLength + length;
    $("#counter").html(remaining);
  }
  let length = $(this).val().length;
  let remaining = maxLength - length

  if (remaining === 0) {
    $("#counter").addClass('over');
  }
  $("#counter").html(remaining);
  console.log(remaining);
})