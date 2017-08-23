import React from 'react';
import Footer from './Layout/footer';
import Header from './Layout/header';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'State and Props',
            name:'Abhijeet'
        }
    }
    render(){
        setTimeout(() => {
            this.setState({name:'Abhijeet D Gole'});
            this.setState({title:'New Title with '+Date.now()});
        },1000);
        return (
            <div>
                <Header title={this.state.title}/>
                <h1>{this.state.name}</h1>
                <div id='simpleDiv'>This is one simple Dive just to have some space!</div>
                <Footer />
            </div>
        )
    }
}