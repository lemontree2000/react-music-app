import React from 'react';
import Header from './components/header/header';
import Player from './page/player';
import MusiceList from './page/MusicList';
import {MUSIC_LIST} from './config/index'
console.log(MUSIC_LIST);
let Root = React.createClass({
  getInitialState() {
    return {
      currentMusicItem: MUSIC_LIST[0],
      musicList: MUSIC_LIST
    }
  },
  componentWillUnMount() {
  },
  componentDidMount() {
    $('#player').jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: 'http://103.22.228.3:8081/IXC839a6753eb1ee8f00bc1581bc30b2266_59.63.206.53/13/203/407090.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });

  },
  render() {
    return (
      <div>
        <Header />
        <MusiceList
          currentMusicItem={this.state.currentMusicItem}
          musicList={this.state.musicList}
        ></MusiceList>
        <Player currentMusicItem={this.state.currentMusicItem}></Player>
      </div>
    );
  }
});

export default Root;