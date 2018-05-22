import React, {Component} from 'react';

export default class Item extends Component {

    constructor(props) {
        super(props);
    }

    change = () => {
        let { value, change } = this.props;
        change(value);
    }

    render() {
        let { index, text, selectedItem, value } = this.props;

        return(
            <div className="item">
                <input type="checkbox" id={"input" + index}
                    checked={ !!(selectedItem.indexOf(value) > -1) }
                    onChange={this.change}
                />
                <label htmlFor={"input" + index}>{text}</label>
            </div>
        )
    }
}