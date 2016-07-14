require('styles/sections/WhoIAm/WhoIAm.scss');

import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Doorway from './Doorway';

const hippoPic = require('images/Hippo_mouth_opening.jpg');
const footsteps = require('images/Footsteps.jpg');
const KLC = require('images/Knights_of_the_Lambda_Calculus.svg');

export default class WhoIAm extends Component {

	static propTypes = {};

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	
	componentWillMount() {
		this.setState({
			bgImage: hippoPic
		});
	}

	render() {
		return (
			<div
				className="aboutme-component"
				style={ {
					backgroundImage: `url(${bgImage})`
				} }
			>
				<Doorway
					image={ hippoPic }
					onMouseOver={ event => this.setState({ bgImage: hippoPic }) }
				/>
				<Doorway
					image={ footsteps }
					onMouseOver={ event => this.setState({ bgImage: footsteps }) }
				/>
				<Doorway
					image={ KLC }
					onMouseOver={ event => this.setState({ bgImage: KLC }) }
				/>
			</div>
		);
	}

}
