import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class Square extends Component{

    constructor(){
        super();

        //States , these states are private to it's component
        this.state = {
            value : null
        }
    }

    render(){
        return(
            <button className="square" onClick={() => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }
    render() {
        const status = 'Next player: X';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Test extends React.Component{

    constructor(){
        super();

        this.state = {
            someValue : ''
        }
    }

    getValue(){
        console.log(document.getElementById('field').value);
        this.setState({someValue:document.getElementById('field').value});
        console.log(this.state.someValue);
        // alert(this.state.someValue);
    }

    render(){
        return (
            <form>
             <label>Enter Value:</label>
                <input type='text' onChange={()=>this.setState({someValue:document.getElementById('field').value})} id="field"></input>
                <br/>
                <p>{this.state.someValue}</p>
            </form>
        )
    }

}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>

                <br/>
                <Test/>
            </div>
        );
    }
}

// export default Square;
// export default Board;
export default Game;
