import React from 'react';
import Header from './components/header/header';
import Progress from './components/progress/progress';

let Root = React.createClass({
  getInitialState() {
    return {
      progress: '-'
    }
  },
  componentWillUnMount() {
    $('#player').unbind($.jPlayer.event.timeupdate);
  },
  componentDidMount() {
    console.log($('#player'));
    $('#player').jPlayer({
      ready: function() {
        $(this).jPlayer('setMedia', {
          mp3: 'http://103.22.228.3:8081/IXC839a6753eb1ee8f00bc1581bc30b2266_59.63.206.53/13/203/407090.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
    $('#player').bind($.jPlayer.event.timeupdate, (e) => {
      console.log(e.jPlayer.status.currentPercentAbsolute);
      this.setState({
        progress: e.jPlayer.status.currentPercentAbsolute
      });
    })
  },
  render() {
    return (
      <div>
        <Header />
        <Progress progress={this.state.progress}>
        </Progress>
      </div>
    );
  }
});

export default Root;