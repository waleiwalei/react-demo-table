import React, {Component} from 'react';

import Item from './Item';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { text: '111', value: 1},
                { text: '222', value: 2},
                { text: '333', value: 3}
            ],
            selectedItem: []
        }
    }
    change = (value) => {
        let { selectedItem }= this.state;
        let index = selectedItem.indexOf(value);
        if(index > -1) {
            selectedItem.splice(index, 1);
        } else {
            selectedItem.push(value);
            // selectedItem.splice(0, 0, value);
        }
        this.setState({
            selectedItem: selectedItem
        })
    }

    getItem = () => {
        let { data, selectedItem } = this.state;

        return data.map((item, index) => (
            <Item selectedItem={selectedItem} 
                index={index} 
                key={item.value}
                {...item} 
                change={this.change}
                />
        ))
    }

    getSelected = () => {
        return this.state.selectedItem.join(',');
    }

    render() {
        return (
            <div className="container">
                <div>{ this.getItem() }</div>
                <div>当前选中项：{ this.getSelected()}</div>
            </div>
        )
    }
}