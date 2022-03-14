import React, { Component, createRef } from 'react';
import PropTypes from "prop-types";

class Link extends Component {
    render() {

        const { text, href, color } = this.props;
        const link = createRef()

        return (
            <div>
                <a ref={link} href={href} style={{color}}>{text}</a>
            </div>
        );
    }
}

Link.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
    isUnderlined: PropTypes.bool,
}

export default Link;