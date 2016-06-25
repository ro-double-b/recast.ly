var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: {},
    // key: blank,
    // query: blank,
    // max: blank,
    success: function(data) {
      console.log('IT WORKS!');
    },
    error: function(data) {
      console.error('chatterbox: Failed to fetch messages');
    }
  });
};

window.searchYouTube = searchYouTube;
