import React from 'react';
import './header.less';

let Header = React.createClass({
  render() {
    return (
      <div className="component-header">
        <img src="/static/images/logo.png" width="40" className="logo" alt=""/>
        <h1 className="caption">React Music Player</h1>
      </div>
    );
  }
});

export default Header;
