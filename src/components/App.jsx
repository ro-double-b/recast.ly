class App extends React.Component {
  constructor () {
    super();
    this.state = {
      collection: window.exampleVideoData,
      currentSong: window.exampleVideoData[0]
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentSong}/>
        </div>
        <div className="col-md-5">
          <VideoList currentVideo={this.state.currentSong} videos={this.state.collection}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
