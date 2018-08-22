import React, { Component } from 'react';
import Grid from './Grid';
import Form from './Form';
import { saveData, fetchData } from './mock';
import './Page.css';

class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // editingItem: {}
      editingItem: this.emptyItem()
    };
  }

  emptyItem() {
    return {
      id: null,
      name: '',
      type: '食品',
      price: '' 
    }
  }

  loadData() {
    fetchData((data) => {
      this.setState({
        data: data 
      });
    });
  }

  componentDidMount() {
    this.loadData();
  }

  resetEditingItem() {
    this.setState({
      editingItem: this.emptyItem() 
    });
  }

  updateEditingItem(updateItem) {
    this.setState({
      editingItem: updateItem
    });
  }

  saveItem() {
    saveData(this.state.editingItem, (success) => {
      if (!success) {
        alert('服务器出错');
      }
      this.loadData();
    });
  }


  render() {
    return (
        <div className="page">
          <Form onSubmit={this.saveItem.bind(this)} 
            onReset={this.resetEditingItem.bind(this)} 
            onChange={this.updateEditingItem.bind(this)}
            {...this.state.editingItem}/>
          <Grid data={this.state.data} 
            onDeleteItemSuccess={this.loadData.bind(this)} 
            onEditItemClick={this.updateEditingItem.bind(this)} />
        </div>
    );
  }
}

export default Page;
