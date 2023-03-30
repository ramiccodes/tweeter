/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {

  const renderTweets = function() {
    $.ajax({
      method: "GET",
      url: '/tweets',
    }).then((tweets) => {

      $('.tweets').empty();

      for (const tweet of tweets) {
        const $tweet = createTweetElement(tweet);
        $('.tweets').prepend($tweet);
      }
    });
  }

  const createTweetElement = (obj) => {
    let $tweet = $(`
    <article class="tweet">
      <header class="user-info">
        <div class="user">
          <p><img class="fa-solid" src=${obj.user.avatars} /></p>
          <p class="username">${obj.user.name}</p>
        </div>
        <div class="handle">
          <p>${obj.user.handle}</p>
        </div>
      </header>
      <div class="tweet-body">${obj.content.text}</div>
      <footer class="tweet-info">
        <div class="days-ago">
          <p>${timeago.format(obj.created_at)}</p>
        </div>
        <div class="tweet-icons">
          <i class="fa-solid fa-flag flag"></i>
          <i class="fa-solid fa-retweet circle-arrow"></i>
          <i class="fa-solid fa-heart heart"></i>
        </div>
      </footer>
    </article>`);

    return $tweet;
  }
  
  renderTweets();

  const $form = $('#form');

  $form.on("submit", (event) => {
    event.preventDefault();
    console.log(`Submitted Form`);

    const urlEncoded = $form.serialize();
    console.log(urlEncoded);

    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: urlEncoded
    }).then((response) => {
      renderTweets();
    })
  })
});