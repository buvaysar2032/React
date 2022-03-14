import React from 'react';
import PropTypes from "prop-types";

const Image = ({src, alt, width, height}) => {
    return (
        <div>
            <img src={src} alt={alt} width={width} height={height} />
        </div>
    );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Image;