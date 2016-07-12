import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Opener from './sections/Opener';
import WhoIAm from './sections/WhoIAm';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className="main">
				<Opener />
				<WhoIAm />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
