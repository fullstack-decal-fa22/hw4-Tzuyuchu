import React from 'react';

const Color = ({ color, handleClick }) => {
    return (
        <button onClick={() => handleClick(color)}>
            Post {color}
        </button>
    );
}

export default Color;
