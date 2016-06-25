var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    // part: 'snippet',
    type: 'GET',
    data: {
      key: options.key,
      query: options.query,
      max: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeded: true
    },
    // key: window.YOUTUBE_API_KEY,
    // query: 'cats',
    // max: 10,
    success: function(data) {
      window.exampleVideoData = callback(data.items);
      console.log('IT WORKS!');
    },
    error: function(data) {
      // console.log(this.url)
      console.error('chatterbox: Failed to fetch messages');
    }
  });
};

window.searchYouTube = searchYouTube;

