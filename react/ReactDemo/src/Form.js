import React, { Component } from 'react';

class Form extends Component {

  onChange(field, e) {
    let data = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      type: this.props.type
    };
    data[field] = e.target.value;
    this.props.onChange(data);
  }

  onSubmit() {
    this.props.onSubmit();
  }

  onReset() {
    this.props.onReset();
  }

  render() {
    let {name, type, price, id} = this.props;
    return (
        <div className="form">
          <label htmlFor="product-name">名称</label>
          <input id="product-name"
            value={name} 
            onChange={this.onChange.bind(this, 'name')}/>
          <label htmlFor="product-type">类型</label>
          <select id="product-type"
            value={type} 
            onChange={this.onChange.bind(this, 'type')}>
            <option value="交通工具">交通工具</option>
            <option value="家电">家电</option>
            <option value="食品">食品</option>
          </select>
          <label htmlFor="product-price">价格</label>
          <input id="product-price"
            value={price} 
            onChange={this.onChange.bind(this, 'price')}/>
          <a className="btn" 
            onClick={this.onSubmit.bind(this)}>{ id ? '保存': '新增'}商品</a>&nbsp;
          {id ?
          <a className="btn" 
            onClick={this.onReset.bind(this)}>取消</a>
          : ''}
        </div>
    );
  }
}

export default Form;
