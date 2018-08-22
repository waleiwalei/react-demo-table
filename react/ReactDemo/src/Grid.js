import React, { Component } from 'react';
import { deleteData } from './mock';

class GridItem extends Component {

  onDeleteClick() {
    let {id, onDelete} = this.props;
    onDelete(id);
  }

  onEditClick() {
    let {id, name, type, price, onEdit} = this.props;
    onEdit({
      id,
      name,
      type,
      price
    });
  }

  render() {
    let {name, type, price} = this.props;
    return(
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td>{price}宇宙币</td>
        <td>
          <a className="btn" onClick={this.onDeleteClick.bind(this)}>删除</a>&nbsp;
          <a className="btn" onClick={this.onEditClick.bind(this)}>编辑</a>
        </td>
      </tr>
    )
  }

}

class Grid extends Component {

  getItems() {
    return this.props.data.map((item) => {
      return <GridItem key={item.id} 
        onDelete={this.deleteItem.bind(this)} 
        onEdit={this.editItem.bind(this)} 
        {...item} />
    });
  }

  deleteItem(id) {
    deleteData(id, (success) => {
      if (!success) {
        alert('服务器出错');
        return;
      }
      this.props.onDeleteItemSuccess();
    });
  }

  editItem(item) {
    this.props.onEditItemClick(item);
  }

  render() {
    return (
        <table>
          <thead>
            <tr>
              <th width="200">商品名称</th>
              <th width="100">类型</th>
              <th width="100">价格</th>
              <th width="100">操作</th>
            </tr>
          </thead>
          <tbody>
          {this.getItems()}
          </tbody>
        </table>
    );
  }
}

export default Grid;
