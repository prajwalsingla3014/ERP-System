import React, { Component } from 'react';

class editablecell extends Component {
    render() {
        return (
            <td>
                <input type="text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate} style={{width:'100%'}}/>
            </td>
        );
    }
}

export default editablecell;