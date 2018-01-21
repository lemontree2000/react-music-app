import React from 'react';
import Progress from '../components/progress/progress';
import './player.less';

let duration = null;
let Player = React.createClass({
  getInitialState() {
    return {
      progress: 0,
      volume: 0,
      isPlay: true
    }
  },
  componentDidMount() {
    $('#player').bind($.jPlayer.event.timeupdate, (e) => {
      duration = e.jPlayer.status.duration;
      this.setState({
        progress: e.jPlayer.status.currentPercentAbsolute,
        volume: e.jPlayer.options.volume * 100
      });
    })
  },
  paly() {
    if (this.state.isPlay) {
      $('#palyer').jPlayer('pause');
    } else {
      $('#palyer').jPlayer('play');
    }
    this.setState({
      isPlay: !this.state.isPlay
    });
    console.log('1');
  },
  componentWillUnMount() {
    $('#player').unbind($.jPlayer.event.timeupdate);
  },
  ProgressChangeHandler(progress) {
    $('#player').jPlayer('play', duration * progress)
  },
  changeVolumeHandler(volume) {
    $('#player').jPlayer('volume', volume)
  },
  render() {
    return (
      <div>
        <Progress
          onProgressChange={this.ProgressChangeHandler}
          progress={this.state.progress}>
        </Progress>
        <div className="player-page">
          <h1 className="caption">我的私人音乐坊 &gt;</h1>
          <div className="mt20 row">
            <div className="controll-wrapper">
              <h2 className="music-title">{this.props.currentMusicItem.title}</h2>
              <h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
              <div className="row mt20">
                <div className="left-time -col-auto">-2:00</div>
                <div className="volume-container">
                  <i className="icon-volume rt" style={{ top: 5 }}></i>
                  <div className="volume-wrapper">
                    <Progress
                      progress={this.state.volume}
                      onProgressChange={this.changeVolumeHandler}
                      barColor="#aaa"
                    ></Progress>
                  </div>
                </div>
              </div>
              <div style={{ height: 10, lineHeight: '10px' }}>
                <Progress 
                  onProgressChange={this.ProgressChangeHandler}
                  barColor="red"
                  progress={this.state.progress}>></Progress>
              </div>
              <div className="mt35 row">
                <div>
                  <i className="icon prev"></i>
                  <i className={`icon ml20 ${this.state.isPlay? 'play' :'pause'}`} onClick={this.paly}></i>
                  <i className="icon next ml20"></i>
                </div>
                <div className="-col-auto">
                  <i className="icon repeat-cycle"></i>
                </div>
              </div>
            </div>
            <div className="-col-auto cover">
              <img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title} />
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Player;