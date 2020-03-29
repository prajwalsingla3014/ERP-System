import React from 'react';
import PurchaseCreateTable from "../purchase/purchasecreatetable";
export default class PurchaseCreate extends React.Component {
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
                amount:'',
                tax:''
            }
        ];
        this.state.taxes=[
            {
                tax1:'GST 5',
                tax2:'GST 10',
                tax3:'GST 12',
                tax4:'GST 18',
                tax5:'GST 28'
            }
        ]
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
        this.setState({products:newProducts})
    };
    updateTax = (event) => {
        event.preventDefault();
        const productnew=[...this.state.products];
        var len=productnew.length;
        if(len == 1)
        {
            productnew[0].tax=(event.target.value).slice(3,6);
            this.setState({products:productnew})
        }
        if(len > 1)
        {
            productnew[len - 1].tax=(event.target.value).slice(3,6);
            this.setState({products:productnew})
        }
    }
    render() {
      return (
            <PurchaseCreateTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} products={this.state.products} filterText={this.state.filterText} taxes={this.state.taxes} updateTax={this.updateTax}/>
        );
  
    }
  
  }