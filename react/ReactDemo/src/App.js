import React, { Component, PureComponent } from 'react';
import './App.css';
let a = {test: 1}, b = {test: 2};
class App extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: a,
			age: 2
		}
	}
	// innerClick = e => {
    //     console.log("A: react inner click.");
    //     e.stopPropagation();
    //   };
    
    //   outerClick = () => {
    //     console.log("B: react outer click.");
    //   };
    
      componentDidMount() {
		  a.test = 100
		  this.setState({
			  name: this.state.name
		  })
        // document
        //   .getElementById("outer")
        //   .addEventListener("click", () => console.log("C: native outer click"));
    
        // window.addEventListener("click", () =>
        //   console.log("D: native window click")
        // );
      }
    
      render() {
		console.log(this.state.name);
        return (
			<div>{this.state.age}</div>
        //   <div id="outer" onClick={this.outerClick}>
        //     <button id="inner" onClick={this.innerClick}>
        //       BUTTON
        //     </button>
        //   </div>
        );
      }

}


export default App;
