import React from 'react';

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        error: undefined
        };
    }
    add(e){
        e.preventDefault();
        const option = e.target.elements.option;
        const treatment = this.props.add(option.value.trim());
        this.setState(() => ({error: treatment}));
        if(option){
            option.value = '';
        }
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.add.bind(this)}>
                <input type='text' name='option'/>
                <button>Add Your Option</button>
            </form>
            </div>
        );
    }
};

export default AddOption;