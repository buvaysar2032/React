import React from 'react';
import PropTypes from "prop-types";

const SmartButton = ({isButton}) => {
    return (
        <div>
            {isButton}
        </div>
    );
};

SmartButton.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string,
    href: PropTypes.string,
    isUnderlined: PropTypes.bool,
    isButton: PropTypes.object,
}

export default SmartButton;