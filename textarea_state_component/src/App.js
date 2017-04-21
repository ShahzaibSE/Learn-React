import React, { Component } from 'react';
import logo from './logo.svg';
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

var textAreaCounter = React.createClass(
    {
        proptypes:{
            text:React.PropTypes.string
        },

        getDefaultProps: function(){
            return {
                text:''
            }
        },

        render:function(){
            return(
                React.DOM.div(null,
                React.DOM.textarea(null,{
                    defaultValue:this.props.text
                }),
                React.DOM.h1(null,this.props.text.length))
            )
        }
    },)

// export default App;
export default textAreaCounter;
