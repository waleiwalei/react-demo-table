import React, { Component } from 'react';

import Header from './page/Header/Header';
import Grid from './page/Grid/Grid';
import {loadData, editData, deleteData, getItem} from './mock';

import logo from './logo.svg';
// import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editData: this.emptyData(),
            data: [],
            id: null
        }
    }

    /**
     * Header
     */
    emptyData = () => {
        return ({
            name: '',type: '-', price: ''
        })
    }
    onEditHead = () => {
        var ret = this.checkInput(this.state.editData);
        if(ret) {
            editData(this.state.editData);
            this.setState({
                data: loadData(),
                editData: this.emptyData()
            });
        }
    }

    onReset = () => {
        this.setState({
            editData: this.emptyData()
        })
    }

    /**
     * Grid
     */
    onDelete = (id) => {
        deleteData(id);
        this.setState({
            data: loadData()
        })
    }

    onEdit = (param) => {
        this.setState({
            editData: param
        })
    }

    onChange = (param) => {
        this.setState({
            editData: param
        });
    }


    checkInput = (param) => {
        var ret = true;
        for(var key in param) {
            if(key != 'id') {
                if(!param[key] || param[key] == '-') {
                    alert(key + '未填写');
                    return ret = false;
                }
                if(key == 'price' && !(param[key] > 0)) {
                    alert('price请填写大于零数字');
                    return ret = false;
                }
            }
        }
        return ret;
    }

    componentDidMount = () => {
        this.setState({
            data: loadData()
        })
    }

    render() {
        let me = this;
        return (
        <div className="App">
            <Header {...this.state.editData}
                onEditHead={this.onEditHead} 
                onChange={this.onChange}
                onReset={this.onReset}
                />
            <Grid data={this.state.data} 
                onEdit={this.onEdit}
                onDelete={this.onDelete}/>
        </div>
        );
    }
}

export default App;
