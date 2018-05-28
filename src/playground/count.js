class Counter extends React.Component{
    constructor(props){
        super(props);
        this.hendleMinusOne = this.hendleMinusOne.bind(this);
        this.hendlePlusOne = this.hendlePlusOne.bind(this);
        this.hendleReset = this.hendleReset.bind(this);
        this.state = {
            count: props.count
        }
    }
    hendlePlusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            }
        });
    }
    hendleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -= 1
            }
        });
    }
    hendleReset(){
        this.setState(() =>{
            return {count: 0}
        });
        // this.setState(() =>{
        //     console.log('to somando mais igual a 1')
        //     return {count: this.state.count + 1}
        // });
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.hendlePlusOne}>add 1</button>
                <button onClick={this.hendleMinusOne}>sup 1</button>
                <button onClick={this.hendleReset}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={3} />, document.getElementById('app'));
// let count = 0;
// const addOne = () =>{
//     count++;
//     renderReactApp();
// };
// const subOne = () =>{
//     count--;
//     renderReactApp();
// };
// const reset = () => {
//     count = 0;
//     renderReactApp();
// };


// let fullName = 'Vasconcelos a'

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

// const shortGetFirstName = (fullName) =>
//     fullName.split(' ')[0]
// ;

// const appRoot = document.getElementById('app');
// const renderReactApp = () =>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderReactApp();