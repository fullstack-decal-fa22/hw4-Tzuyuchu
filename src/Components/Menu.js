import React from 'react';
import Color from './Color.js'

const Menu = ({ createNewPostWithColor }) => { 

    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    return (
      <div className="colorOptions">
        {colors.map((name) => (
            <Color color={name} handleClick={createNewPostWithColor} />
        ))}
      </div>
    );
}

export default Menu;
