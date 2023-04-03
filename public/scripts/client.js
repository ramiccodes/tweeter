/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(() => {
  // A function that takes in an object as parameter to be used to generate the dynamic elements of this HTML template
  const createTweetElement = (obj) => {
    // An escape function that is called upon the tweet body to prevent XSS attacks done on the form submission
    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    let $tweet = `
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
      <div class="tweet-body">${escape(obj.content.text)}</div>
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
    </article>`;

    return $tweet;
  }
  // A function that renders out the list of tweets on the webpage. It takes in a parameter of tweets provided by the GET request done
  // with the function, loadTweets.
  const renderTweets = function(tweets) {
    // Removes the previous list of tweets, so that they wouldn't duplicate upon another form submission
    $('.tweets').empty();

    // A loop that creates that Tweet element with the individual values that it got from the parameter
    // and prepends that upon the page to display the tweets in descending order regarding the time the tweet was created.
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets').prepend($tweet);
    }
}
  // A function that makes a GET request using Ajax (prevents reloading of page) to the /tweets endpoint to get the list of tweets. 
  // After the request returns successfully, it calls the renderTweets function to be displayed upon the webpage.
  const loadTweets = () => {
    $.ajax({
      method: "GET",
      url: '/tweets',
    }).done((tweets) => {
      renderTweets(tweets);
    })
      .fail((err) => {
      console.error(err);
    })
}

  // Targets and stores the HTML form with the id #form in a variable using jQuery
  const $form = $('#form');

  // An event handler upon the submission of the form element. 
  $form.on("submit", (event) => {
    event.preventDefault();
    console.log(`Submitted Form`);

    const urlEncoded = $form.serialize();
    console.log(urlEncoded);

  // Makes a POST request upon the submission of the form to the /tweets/ endpoint and then returns a Promise of calling the loadTweets
  // function that makes a GET request in order to display the data on the webpage
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: urlEncoded
    }).then(() => {
      loadTweets();
    })
  })

  loadTweets();

});

