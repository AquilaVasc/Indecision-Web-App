console.log('It is running again!');

class IndecisionApp extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
    this.hendleRemove = this.hendleRemove.bind(this);
    this.choose = this.choose.bind(this);
    this.addToOptions = this.addToOptions.bind(this);
    this.removeOne = this.removeOne.bind(this);
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


  hendleRemove(){
    this.setState(() => ({options: []}));
  }
  choose(){
    const randomInt = () => {
      return Math.floor(Math.random() * this.state.options.length);
    }
    alert(this.state.options[randomInt()]);
  }

  addToOptions(option){
    if(!option){
      return 'empty'
    }else if(this.state.options.indexOf(option) > -1){
      return 'alredy exists'
    }
    this.setState((prevState) => ({options: prevState.options.concat([option])}))
  }
  removeOne(option){
    this.setState((prevState) => {
      return {
        options : prevState.options.filter((opt)=>{
          return option !== opt;
        })
      }
    });
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
      </div>
    );
  }
};

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) =>{
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subititle && <h2>{props.subititle}</h2>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) =>{
  return (
    <div>
      <button 
        disabled={!props.hasOptions} 
        onClick={props.choose}
      >
        What should I do?
      </button>
    </div>
  );   
};

const Options = (props) =>{
  return(
    <div>
      <button onClick={props.remove}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      <ol>
        {props.options.map((option) =>
        <Option 
          key={option} 
          text = {option}
          removeOne = {props.removeOne}
        />)}
      </ol>
      
    </div>
  );
};

const Option = (props) => {
    return (
      <div>
        <li>
          {props.text} 
          <button 
            onClick={() =>
              props.removeOne(props.text)
            }  
          >
            Remove
          </button>
        </li>
      </div>
    );
};

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

// const User = (props) =>{
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age:</p>
//     </div>
//   );
// }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));