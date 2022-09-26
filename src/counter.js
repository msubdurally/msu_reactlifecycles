import './App.css';
import React from 'react';


class Counter extends React.Component {
  constructor(props){
    console.log('Counter Constructor ');
    super(props);

    this.state = {
      counter: 0, 
      seed: 0, 
      initializing: true
    }

    this.increment = () => this.setState({counter: this.state.counter + 1 });
    this.decrement = () => this.setState({counter: this.state.counter - 1 });

  }
  
  static getDerivedStateFromProps(props, state){
    if(props.seed && state.seed !== props.seed){
      console.log('Counter get Derived State From Props return NOT NULL');
      return{
        seed: props.seed, 
        counter: props.seed
      }
    }
    console.log('Counter get Derived State From Props returns NULL');
    return null;
  }

  componentDidMount(){
    console.log('Counter Component Did Mount');
    setTimeout(() => {
      this.setState({initializing: false})
    }, 1000);
  }


  componentDidUpdate(prevProps, prevState, snapShot){
    console.log('Counter component Did Update');
    
  }

  componentWillUnmount(){
    console.log('Counter component Will unMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp){
        console.log('Counter  Should Component Update - NO');
        return false;
      }
    console.log('Counter  Should Component Update - YES');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Counter Get Snapshot Before Update');
    return null;
  }

  render(){
    console.log('Counter Render ');

    if(this.state.initializing){
      return <div>Initializing...</div>

    }
    if(this.props.showErrorComponent && this.state.error){
      return <div> Error occured: {this.state.error.message}</div>
    }

    return <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <div className="counter"> 
            Counter: {this.state.counter}
        </div>
      </div> 
  }




}

export default Counter;
