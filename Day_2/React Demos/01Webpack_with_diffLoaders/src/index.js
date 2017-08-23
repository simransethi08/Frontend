import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld.jsx';
import HelloUniverse from './hellouniverse';
// import {welcome} from './welcome';
import welcome from './welcome';

// class HelloWorld extends React.Component{
//     render(){
//         return (
//             <h1>Hello World with Webpack Module Bundler!</h1>
//         )
//     }
// }

// ReactDOM.render(<HelloWorld/>,
// document.getElementById('container'));

ReactDOM.render(
    <div>
        <HelloWorld/>
        <HelloUniverse/>
        {welcome}
    </div>,
document.getElementById('container'));