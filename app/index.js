import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment(){
        this.setState({
            count:this.state.count + 1
        })
    }
    decrement(){
        this.setState({
            count:this.state.count - 1
        })
    }
    render(){
        return(
            <div id='container'>
            <div id='inner'>
            <div id='navbar'>
            <h1>Let's Count!</h1>
            </div>
            
            <div id='counter'>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <br></br>
            <button onClick={this.decrement}>Decrement</button>
            </div>
            </div>
            </div>
        )
    }
}


ReactDOM.render(
    <Counter/>,
    document.getElementById('app')
)