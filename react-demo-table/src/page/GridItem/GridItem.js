import React from 'react';
import ReactDom from 'react-dom';
import {getType} from '../../mock';

export default class GridItem extends React.Component {
    constructor(props) {
        super(props);
    }


    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    onEdit = () => {
        this.props.onEdit({
            id: this.props.id,
            name: this.props.name,
            type: this.props.type,
            price: this.props.price
        });
    }

    render() {
        let {name, price} = this.props;
        let type = getType(this.props.type);
        return (
            <tr>
                <td>{name}</td>
                <td>{type}</td>
                <td>{price}</td>
                <td>
                    <span onClick={this.onDelete}>删除</span>
                    <span onClick={this.onEdit}>编辑</span>
                </td>
            </tr>
        )
    }
}