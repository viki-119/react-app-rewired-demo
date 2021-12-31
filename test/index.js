import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';
import Empty from '@/components/Empty';

import './common.less';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Empty />
      </div>
    );
  }
}

hot(App);

ReactDom.render(<App />, document.getElementById('root'));
