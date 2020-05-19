import React, { Component } from 'react';
import EditableCell from "../purchase/editablecell";
class purchaserow extends Component {
    render() {
        let content=this.props.items;
        let options=content.map((data) => 
        <option value={data.id}>{data.name + " " + data.description}</option>)
        return (
            <tr className="eachRow">
                <select onChange={this.props.onProductTableUpdate} style={{width:'90%',marginTop:'12px',height:'30px',marginLeft:'13px'}} name="product" id={this.props.prod.id}>
                    <option value=" " disabled selected>Choose item</option>
                    {options}
                </select>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"quantity",
                    value:this.props.prod.quantity,
                    id:this.props.prod.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"price",
                    value:this.props.prod.price,
                    id:this.props.prod.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"discount",
                    value:this.props.prod.discount,
                    id:this.props.prod.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"tax",
                    value:this.props.prod.taxx,
                    id:this.props.prod.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"sub_total",
                    value:(this.props.prod.price*this.props.prod.quantity),
                    id:this.props.prod.id
                }} />
        </tr>
        );
    }
}

export default purchaserow;