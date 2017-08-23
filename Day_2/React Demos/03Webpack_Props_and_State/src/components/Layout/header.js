import React from 'react';
import Title from './Header/title';

export default class Header extends React.Component{
    render(){
        return (
            <header className='makeCenter'>
                <Title title={this.props.title}/>
            </header>
        )
    }
}