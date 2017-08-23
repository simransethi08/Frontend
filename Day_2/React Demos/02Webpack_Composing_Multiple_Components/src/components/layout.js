import React from 'react';
import Footer from './Layout/footer';
import Header from './Layout/header';

export default class Layout extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <div id='simpleDiv'>This is one simple Dive just to have some space!</div>
                <Footer />
            </div>
        )
    }
}