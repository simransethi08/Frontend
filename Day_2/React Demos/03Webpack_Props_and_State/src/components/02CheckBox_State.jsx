import React from 'react';

// When a component needs state?
//whenever component needs to keep a track of information between renderings
// of the component itself, it can create, update and use the state

// State is changable 
// Props are immutable

export default class Checkbox extends React.Component{
    constructor(){
        super();
        this.state = {checked:true};
       // this.handleCheck = this.handleCheck.bind(this);
    }
    // handleCheck(){
    //     // Do not modify state directly - always use function
    //     // called as setState
        //this.state.checked = !this.state.checked;// not recommended at all
    //     this.setState({checked:!this.state.checked});
    // }

    // execution of setState method in asynchronous way
      handleCheck(){
        this.setState((prevState,props)=>{
            return {checked: !prevState.checked};
        });
    }
    render(){
        var msg;
        if(this.state.checked){
            msg = 'checked';
        }
        else{
            msg='unchecked';
        }
        return (
            <div>
                <input type='checkbox' 
                defaultChecked={this.state.checked}
                /*onChange={this.handleCheck}*/
                // onChange = {this.handleCheck.bind(this)}
                // onChange= { ()=>{
                //     this.setState({checked:!this.state.checked})
                // }}
                onChange = { ()=> this.handleCheck()}/>
                <p>The box is <strong>{msg}</strong></p>
            </div>
        )
    }
}