import React from 'react';
import InvoiceCreateTable from "../invoice/invoicecreatetable";
export default class InvoiceCreate extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={};
        this.state.filterText="";
        this.state.products=[
            {
                id:1,
                name:'Television',
                quantity:2,
                price:'40000',
                tax:'5',
                amount:''
            }
        ];
    };
    handleUserInput(filterText)
    {
        this.setState({filterText:filterText});
    }
    handleAddEvent(event)
    {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product={
            id:id,
            name:"",
            quantity:"",
            price:"",
            tax:"",
            amount:""
        }
        this.state.products.push(product);
        this.setState(this.state.products);
    }
    handleProductTable(event)
    {
        var item={
            id:event.target.id,
            name:event.target.name,
            value:event.target.value
        };
        var products=this.state.products.slice();
        var newProducts=products.map(function(product) {
            for (var key in product) {
                if(key == item.name && product.id == item.id) 
                {
                    product[key]=item.value;
                }
            }
            return product;
        });
        this.setState({products:newProducts});
    };
    render() {
      return (
        <div>
            {console.log(this.props.value)}
            <InvoiceCreateTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} products={this.state.products} filterText={this.state.filterText} invoice={this.props.invoice}/>

        </div>
        );
  
    }
  
  }