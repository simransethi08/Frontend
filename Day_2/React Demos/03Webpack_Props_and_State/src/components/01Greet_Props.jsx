import React from 'react';

// props are immutable
// props are generally coming from the above - 
// container or parent component
// unidirectional data flow

export default class Greet extends React.Component{
    render(){
        // return <h1>Welcome Guys!</h1>
        return <h1>Welcome {this.props.name}!</h1>
    }
}

Greet.defaultProps = {
    name:'Abhijeet Gole'
}

export class HelloMsg extends React.Component{
    render(){
        return (
            <div>
                <h2>Hello {this.props.text}!</h2>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}
// functional component
export function Welcome(props){
    return <h1>{props.name} welcome to INDIA!</h1>
}