import React from 'react';
import PropTypes from "prop-types";

const Button = ({type, onClick}) => {
    return (
        <div>
            <button type={type} onClick={onClick}>Button</button>
        </div>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;