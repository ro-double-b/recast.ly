class App extends React.Component {
  constructor () {
    super();
    this.state = {
      collection: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  newCurrentVideo(newVideo) {
    this.state.currentVideo = newVideo;
    this.forceUpdate();
    window.searchYouTube();
  }

  render() {
    return (
      <div>
        <Nav />
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
