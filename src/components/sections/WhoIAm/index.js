require('styles/sections/WhoIAm/WhoIAm.scss');

import React, { Component, PropTypes } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class WhoIAm extends Component {

	static propTypes = {};

	constructor(props) {
		super(props);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render() {
		return (
			<div className="aboutme-component">
			</div>
		);
	}

}
