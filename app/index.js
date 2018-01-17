import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';
console.log('React version:', React.version);
// 热更新
render(
  <AppContainer>
    <Root />
  </AppContainer>,
  document.getElementById('root')
);

// 热更新
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <Root />
      </AppContainer>,
      document.getElementById('root')
    );
  });

}