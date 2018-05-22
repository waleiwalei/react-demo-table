import React from 'react';

// import {loadData, editData, getType, getItem} from '../../mock';

import './Header.css';

export default class Header extends React.Component{

    onEditHead = () => {
        this.props.onEditHead();
    }

    change(key, e) {
        let param = {
            name: this.props.name,
            type: this.props.type,
            price: this.props.price,
            id: this.props.id
        };
        param[key] = e.target.value;
        this.props.onChange(param);
    }

    onReset = () => {
        this.props.onReset();
    }

    render() {
        var {name, type, price, id} = this.props;
        return (
            <div className="Header">
                <label htmlFor="name">名称</label>
                <input type="text" id="name" 
                    value={name}
                    onChange={this.change.bind(this, 'name')}
                />
                <label htmlFor="type">类型</label>
                <select id="type" 
                    value={type}
                    onChange={this.change.bind(this, 'type')}
                >
                    <option value="-">请选择</option>
                    <option value="0">交通工具</option>
                    <option value="1">全息电视</option>
                    <option value="2">全息相机</option>
                    <option value="3">火星巧克力</option>
                </select>
                <label htmlFor="price">价格</label>
                <input type="text" id="price" 
                    value={price}
                    onChange={this.change.bind(this, 'price')}
                />
                <button onClick={this.onEditHead}>
                    {
                        id ? '保存' : '新增'
                    }商品
                </button>
                <button onClick={this.onReset}>清空</button>
            </div>
        )
    }
}