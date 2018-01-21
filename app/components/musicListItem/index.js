import React from 'react';
import './style.less';

let MusicListItem = React.createClass({
  render() {
    let musicItem = this.props.musicItem;
    return (
     <li className={`components-listitem row ${this.props.isFocus? 'focus': ''}`}>
      <p>{musicItem.title} - {musicItem.artist}</p>
      <p className="-col-auto delete"></p>
     </li> 
    )
  }
});

export default MusicListItem;