import React from 'react';
import MusicListItem from '../components/musicListItem'
let MusicList = React.createClass({
  render() {
    let listEle = null;
    listEle = this.props.musicList.map((item) => {
      return (
        <MusicListItem 
          key={item.id} 
          musicItem={item}
          isFocus={item === this.props.currentMusicItem}
        >
        </MusicListItem>
      )
    });
    return (
      <ul>
        {listEle}
      </ul>
    )
  }
});

export default MusicList;