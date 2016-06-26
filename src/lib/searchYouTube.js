var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    // part: 'snippet',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    // key: window.YOUTUBE_API_KEY,
    // query: 'cats',
    // max: 10,
    success: function(data) {
      callback(data.items);
      console.log('test2');
    },
    error: function(data) {
      // console.log(this.url)
      console.error('chatterbox: Failed to fetch messages');
    }
  });
};

window.searchYouTube = searchYouTube;

