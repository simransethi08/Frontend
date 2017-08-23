
class Hello extends React.Component{
    render(){
        return <div>Hello World!</div>
    }
}

ReactDOM.render(<Hello/>,
    document.getElementById('container'));

// Install following 
// npm install --save-dev babel-cli 
// babel-preset-es2015 babel-preset-react

// Following command gives you precompiled JSX
// node node_modules/babel-cli/bin/babel.js
// --presets es2015,react --watch src --out-dir dist