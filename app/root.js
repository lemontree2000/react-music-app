import React from 'react';
import Header from './components/header/header';
import Progress from './components/progress/progress';

let Root = React.createClass({
  getInitialState() {
    return {
      progress: '-'
    }
  },
  componentDidMount() {
    $('#player').jPlayer({
      ready: function() {
        $(this).jPlayer('setMedia', {
          map3: ''
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
    $('#player').bind($.jPlayer.event.timeupdate, (e) => {
      this.setState({
        progress: Math.round(e.jPlayer.status.currentTime)
      });
    })
  },
  render() {
    return (
      <div>
        <Header />
        <Progress progress="1">
        </Progress>
      </div>
    );
  }
});

export default Root;