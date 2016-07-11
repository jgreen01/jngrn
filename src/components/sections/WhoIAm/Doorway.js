require('styles/sections/WhoIAm/Doorway.scss');

import React, { PropTypes } from 'react';

const Doorway = ({ image, onMouseOver }) => (
    <img
        className="doorway-component"
        src={ image }
        onmouseover={ event => onMouseOver(event) }
    />
);

Doorway.propTypes = {
    image: PropTypes.string,
    onMouseOver: PropTypes.func
};

export default Doorway;