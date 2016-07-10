import React from 'react';

import Opener from './sections/Opener';
import WhoIAm from './sections/WhoIAm';

class AppComponent extends React.Component {
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
