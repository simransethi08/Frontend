import React from 'react';
import Title from './Header/title';

export default class Header extends React.Component {
    handleChange(evt){
        const title = evt.target.value;
        //this.props.title = title;// props are immutable
        this.props.changeTitle(title);
    }
    render() {
        return (
            <div>
                <header className='makeCenter'>
                    <Title title={this.props.title} />
                </header>
                {/* Controlled Component  */}
                <input type="text" value={this.props.title} 
                onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}