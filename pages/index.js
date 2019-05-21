import React from 'react';
import content from '../content/home.md';

const Home = () => {
    const { html, attributes: { title, cats } } = content;
    return (
        <article>
            <h1>{ title }</h1>
        </article>
    )
};

export default Home;