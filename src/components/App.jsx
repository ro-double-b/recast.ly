class App extends React.Component {
  constructor (props) {
    super(props);

    // var dummie = [{
    //   kind: 'blank',
    //   etag: 'blank',
    //   id: {
    //     kind: 'blank',
    //     videoId: 'blank'
    //   },
    //   snippet: {
    //     publishedAt: 'blank',
    //     channelId: 'blank',
    //     title: 'blank',
    //     thumbnails: 'blank',
    //   }
    // }];
    this.state = {
      collection: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }



  componentDidMount() {
    this.setInitialState('cat');
  }

  setInitialState(query) {
    var options = {
      key: this.props.apiKey,
      query: query,
      max: 10
    };
    this.props.data(options, (renderData) => 
      this.setState({
        collection: renderData,
        currentVideo: renderData[0]
      })
    );
  }


  newCurrentVideo(newVideo) {
    this.state.currentVideo = newVideo;
    this.forceUpdate();
    // window.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'react', max: 5});
  }

  render() {
    return (
      <div>
        <Nav newCurrentVideo={this.setInitialState.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList currentVideo={this.newCurrentVideo.bind(this)} videos={this.state.collection}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
