import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };
    add = (e) => {
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
            <form onSubmit={this.add}>
                <input type='text' name='option'/>
                <button>Add Your Option</button>
            </form>
            </div>
        );
    }
};

export default AddOption;