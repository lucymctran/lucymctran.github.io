import React from 'react';
import './App.css';

const Link = ( { href, children } ) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({},'', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        console.log('clicked');
    };
    return (
        <a onClick={onClick} href={href}>{children}</a>
    );
};

export default Link;
