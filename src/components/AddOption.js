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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form 
                    className='add-option'
                    onSubmit={this.add}
                >
                    <input 
                        type='text' name='option'
                        className='add-option__input'
                    />
                    <button className='button'>Add Your Option</button>
                </form>
            </div>
        );
    }
};

export default AddOption;