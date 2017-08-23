import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
    render(){
        return (
            <h1>Hello World with Webpack Module Bundler!</h1>
        )
    }
}

ReactDOM.render(<HelloWorld/>,
document.getElementById('container'));