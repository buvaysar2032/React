import React from 'react';
import PropTypes from "prop-types";

const UnorderedList = ({listItems}) => {

    const lists = listItems.map((list, index) => <li key={index}>{list}</li>)

    return (
        <div>
            <ul>
                {lists}
            </ul>
        </div>
    );
};

UnorderedList.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default UnorderedList;