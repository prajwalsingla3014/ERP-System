import React, { Component } from 'react';
import EditableCell from "../invoice/editablecell";
class invoicerow extends Component {
    render() {
        return (
            <tr className="eachRow">
                    <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type":"name",
                        value:this.props.product.name,
                        id:this.props.product.id
                    }} />
                    <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type":"quantity",
                        value:this.props.product.quantity,
                        id:this.props.product.id
                    }} />
                    <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type":"price",
                        value:this.props.product.price,
                        id:this.props.product.id
                    }} />
                    <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type":"tax",
                        value:this.props.product.tax,
                        id:this.props.product.id
                    }} />
                    <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                        "type":"amount",
                        value:(this.props.product.price*this.props.product.quantity) + (((this.props.product.quantity)*(this.props.product.price)*(this.props.product.tax))/100),
                        id:this.props.product.id
                    }} />
            </tr>
        );
    }
}

export default invoicerow;