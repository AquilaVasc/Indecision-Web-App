class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.changeVisibility = this.changeVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    changeVisibility(){
        this.setState((prevState) =>{ 
            return { visibility: !(prevState.visibility)}
        });
        console.log(this.state.visibility);
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.changeVisibility}>{this.state.visibility ? 'Hide details' :'Show details'}</button>
                {this.state.visibility && <p>Here are some details</p>}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// console.log('app is runnig')
// const appRoot = document.getElementById("app");
// let change = false; 
// const onChange = () => {
//     change = !change;
//     render();
// }
// const render = () =>{
//     console.log('tá pelo menos entrando?');
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onChange}>{!change ? 'Show details' : 'Hide details'}</button>
//             {change && <p>Hey. There are some details you can now see!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();