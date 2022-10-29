import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {

    const [blocks, setBlock] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = (<div>
        {blocks.map((post) => (
            <Block color={post.color} caption={post.caption} />
        ))}
    </div>)

    const createNewPostWithColor = (newColor) => {
        setBlock([...blocks, {
            color: newColor,
            caption: `My ${newColor} post!`
        }])
    }

    return (
        <div>
            <Menu createNewPostWithColor={createNewPostWithColor} />
            {posts}
        </div>
    );
}

export default Feed;
