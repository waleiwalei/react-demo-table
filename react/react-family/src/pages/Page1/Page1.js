import React, {Component} from 'react';
// import ReactDom from 'react-dom';
import './Page1.css';
import test from './images/test.jpg';

export default class Page1 extends Component{
	render(){
		return (<div className="page-box">
			hello, this is page Page1
			<img src={test} />
		</div>)
	}
}