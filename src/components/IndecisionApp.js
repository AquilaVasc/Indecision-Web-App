import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component{ 
  state = {
    options: [],
    selectedOption: undefined
  }
  hendleRemove = () =>{
    this.setState(() => ({options: []}));
  };
  choose = () => {
    const randomInt = () => {
      return Math.floor(Math.random() * this.state.options.length);
    }
    const option = (this.state.options[randomInt()]);
    this.setState(() => ({selectedOption: option}));
  };

  addToOptions = (option) => {
    if(!option){
      return 'empty'
    }else if(this.state.options.indexOf(option) > -1){
      return 'alredy exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat([option])}))
  };
  removeOne = (option) =>{
    this.setState((prevState) => {
      return {
        options : prevState.options.filter((opt)=>{
          return option !== opt;
        })
      }
    });
  };
  closeModal = () =>{
    this.setState(() => ({selectedOption: undefined}));
  }

  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
      this.setState(()=> ({options}))
      }
    }catch(e){
    }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount(){
    console.log('has gone')
  }



  render(){
    const subititle = 'Put your life in the hands of a computer';
    return(
      <div>
        <Header
          subititle={subititle}
        />
        <Action 
          hasOptions={this.state.options.length > 0} 
          choose={this.choose} 
        />
        <Options 
          options = {this.state.options} 
          remove={this.hendleRemove}
          removeOne={this.removeOne}
        />
        <AddOption add={this.addToOptions}/>
        <OptionModal 
          closeModal={this.closeModal}
          option={this.state.selectedOption}
        />
      </div>
    );
  }
};

IndecisionApp.defaultProps = {
  options: []
}

