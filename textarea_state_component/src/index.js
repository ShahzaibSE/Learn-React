import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

var textAreaCounter = React.createElement(
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


ReactDOM.render(
  textAreaCounter,
  document.getElementById('root')
);
