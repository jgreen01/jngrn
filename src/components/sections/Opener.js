require('styles/sections/Opener.scss');

import React, { Proptypes } from 'react';

const Opener = (props) => (
	<div className="opener-section">
		<div id="phrase-one">
			Why hello there.
		</div>
		<div id="phrase-two">
			Welcome to my humble peice of internet.
		</div>
	</div>
);

Opener.propTypes = {};

export default Opener;
