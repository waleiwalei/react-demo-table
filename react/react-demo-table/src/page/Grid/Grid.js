import React from 'react';

import GridItem from '../GridItem/GridItem';

import './Grid.css';

export default class Grid extends React.Component{

    constructor(props) {
        super(props);
    }

    getItem() {
        let _this = this;
        return _this.props.data.map( (item, index) => {
            return <GridItem key={index} {...item} 
                onEdit={_this.onEdit}
                onDelete={_this.onDelete}/>
        })
    }

    /**
     * @param {int} id 
     */
    onDelete = (id) => {
        this.props.onDelete(id);
    }

    onEdit = (param) => {
        this.props.onEdit(param);
    }

    render() {
        return (
            <div className="Grid">
                <table>
                    <thead>
                        <tr>
                            <th>商品名称</th>
                            <th>类型</th>
                            <th>价格</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getItem()}
                    </tbody>
                </table>
            </div>
        )
    }
}