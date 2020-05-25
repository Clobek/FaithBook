const React = require('react');

const Layout = (props) => {
    return (
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light+Two&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="/css/style.css" />
                <title>{props.title}</title>
            </head>
            <body>
                {props.children}
            </body>
        </html>
    );
};

module.exports = Layout;