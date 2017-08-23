import React from 'react';
import Footer from './Layout/footer';
import Header from './Layout/header';

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state = {
            title:'State and Props'           
        }
    }
    changeTitle(myTitle){
        this.setState({title:myTitle});
    }
    render(){      
        return (
            <div>
                <Header title={this.state.title}
                    changeTitle={this.changeTitle.bind(this)}/>                
                <div id='simpleDiv'>This is one simple Div just to have some space!</div>
                <Footer />
            </div>
        )
    }
}