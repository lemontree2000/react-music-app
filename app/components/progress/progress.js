import React from 'react';

let Progress = React.createClass({
  render() {
    return (
      <div className="component-progress">
        { this.props.progress}
      </div>
    );
  }
});

export default Progress;
