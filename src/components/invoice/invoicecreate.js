import React from 'react';
import InvoiceRow from "../invoice/invoicerow";
import "../invoice/invoicenone.css"
import axios from 'axios';
export default class InvoiceCreate extends React.Component {
    constructor(state)
    {
        super(state);
        this.state={
            active:false,
            filterText:"",
            inv:"",
            items:[
                {
                    id:' ',
                    name:' ',
                    description:' ',
                    hsn_code:' ',
                    sku:' ',
                    tax:[],
                    selling_price:' '
                }
            ],
            customers:[
                {
                    id:' ',
                    first_name:' ',
                    last_name:' ',
                    display_name:' '
                }
            ],
            customer:' ',
            taxes:[
                {
                    tax1:'GST 0',
                    tax2:'GST 5',
                    tax3:'GST 12',
                    tax4:'GST 18',
                    tax5:'GST 28'
                }
            ],
            invoice_no:' ',
            order_no:' ',
            invoice_date:' ',
            payment_terms:' ',
            due_date:' ',
            sold_items:[
                {
                    id:'1',
                    price:' ',
                    quantity:' ',
                    discount_type:' ',
                    discount:' ',
                    sub_total:' ',
                    product:' ',
                    tax:' ',
                    taxx:' '
                }
            ],
            pa:[],
            notes:' ',
            terms_and_conditions:' ',
            total_subtotal:' ',
            total_tax:' ',
            total_discount:' ',
            total_amount:' '
        };
    };
    handleUserInput(filterText)
    {
        this.setState({filterText:filterText});
    }
    handleAddEvent = (event) =>
    {
        var len1=this.state.sold_items.length;
        var id=(len1 +1).toString();
        var sold_item={
            id:id,
            product:"",
            quantity:"",
            discount:"",
            discount_type:"",
            price:"",
            tax:"",
            taxx:"",
            sub_total:""
        }
        this.state.sold_items.push(sold_item);
        this.setState(this.state.sold_items);
    }
    handleProductTable = (event) =>
    {
        event.preventDefault()
        var item={
            id:event.target.id,
            name:event.target.name,
            value:event.target.value
        };
        var sold_items=this.state.sold_items.slice();
        var newProducts=sold_items.map(function(sold_item) {
            for (var key in sold_item) {
                if(key == item.name && sold_item.id == item.id) 
                {
                    sold_item[key]=item.value;
                }
            }
            return sold_item;
        });
        this.setState({sold_items:newProducts})
        var len=this.state.sold_items.length;
        var pro=(this.state.sold_items)[len-1].product
        const found=(this.state.items).findIndex(o1 => o1.id == pro);
        const productnew=[...this.state.sold_items];
        productnew[len-1].taxx=(this.state.items)[found].tax.rate;
        productnew[len-1].tax=(this.state.items)[found].tax.id;
        this.setState({sold_items:productnew})
    };
    updateTax = (event) => {
        event.preventDefault();
        const productnew=[...this.state.sold_items];
        var len=productnew.length;
        if(len == 1)
        {
            productnew[0].taxx=(event.target.value).slice(3,6);
            this.setState({sold_items:productnew})
        }
        if(len > 1)
        {
            productnew[len - 1].taxx=(event.target.value).slice(3,6);
            this.setState({sold_items:productnew})
        }
    }
    renderSubtotal = () => {
        var len=this.state.sold_items.length;
        var total_subtotal=0;
        for(var i=0;i<len;i++)
        {
            if(len==1)
            {
                total_subtotal=total_subtotal+(this.state.sold_items[i].price)*(this.state.sold_items[i].quantity);
            }
            if(len>1)
            {
                total_subtotal=total_subtotal+(this.state.sold_items[i].price)*(this.state.sold_items[i].quantity);
            }
        }
        return total_subtotal;
    }
    renderDiscount = () => {
        var len=this.state.sold_items.length;
        var  total_discount=0;
        for(var i=0;i<len;i++)
        {
            if(len == 1 && ((this.state.sold_items)[i].discount_type) == 'amount' )
            {
                total_discount=(total_discount +  Number((this.state.sold_items[i]).discount));
            }
            if(len==1 && ((this.state.sold_items)[i].discount_type) == 'percentage' )
            {
                total_discount=total_discount + (((this.state.sold_items[i]).discount)*((this.state.sold_items)[i].quantity)*((this.state.sold_items)[i].price))/100;
            }
            if(len > 1 && ((this.state.sold_items)[0].discount_type) == 'amount' )
            {
                total_discount=(total_discount + Number((this.state.sold_items[i]).discount));
            }
            if(len > 1 && ((this.state.sold_items)[0].discount_type) == 'percentage' )
            {
                total_discount=total_discount + (((this.state.sold_items[i]).discount)*((this.state.sold_items)[i].quantity)*((this.state.sold_items)[i].price))/100;
            }
        }
        return total_discount;
    }
    renderTax = () => {
        var len=this.state.sold_items.length;
        var total_tax=0;
        for(var i=0;i<len;i++)
        {
            if(len==1)
            {
                total_tax= total_tax + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100;
            }
            if(len > 1)
            {
                total_tax=total_tax + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100;
            }
        }
        return total_tax;
    }
    renderAmount = () => {
        var len=this.state.sold_items.length;
        var total_amount=0;
        for(var i=0;i<len;i++)
        {
            if(len==1 && (this.state.sold_items)[i].discount_type == 'amount' )
            {
                total_amount= total_amount + (this.state.sold_items[i].price)*(this.state.sold_items[i].quantity) + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100 - Number((this.state.sold_items)[i].discount);
            }
            if(len==1 && (this.state.sold_items)[i].discount_type == 'percentage' )
            {
                total_amount= total_amount + (this.state.sold_items[i].price)*(this.state.sold_items[i].quantity) + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100 - (((this.state.sold_items)[i].discount)*((this.state.sold_items)[i].price)*((this.state.sold_items)[i].quantity))/100;
            }
            if(len > 1 && (this.state.sold_items)[0].discount_type == 'amount' )
            {
                total_amount= total_amount + (this.state.sold_items[i].price)*(this.state.sold_items[i].quantity) + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100 - Number((this.state.sold_items)[i].discount);
            }
            if(len > 1 && (this.state.sold_items)[0].discount_type == 'percentage' )
            {
                total_amount= total_amount + (this.state.sold_items[i].price)*(this.state.sold_items[i].quantity) + ((this.state.sold_items[i].price)*(this.state.sold_items[i].taxx)*(this.state.sold_items[i].quantity))/100 - (((this.state.sold_items)[i].discount)*((this.state.sold_items)[i].price)*((this.state.sold_items)[i].quantity))/100;
            }
        }
        return total_amount;
    }
    changeHandler =(e) => {
        const {sold_items}= {...this.state};
        const currentState=sold_items;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({[e.target.name]: e.target.value ,sold_items:currentState})
    }
    updateHandler = (e) => {
        const item=[...this.state.sold_items];
        var len=item.length;
        if(len==1)
        {
            item[0].discount_type=e.target.value;
            this.setState({sold_items:item})
        }
        if(len > 1)
        {
            item[len-1].discount_type=(this.state.sold_items)[0].discount_type;
            this.setState({sold_items:item})
        }
    }
    submitHandler = async (e) => {
        e.preventDefault();
        var total_subtotal=this.renderSubtotal();
        var total_tax=this.renderTax();
        var total_discount=this.renderDiscount();
        var total_amount=this.renderAmount();
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 0);
        var date = someDate.toISOString().substr(0, 10);
        var some=new Date();
        some.setDate(some.getDate() + 5);
        var date2=some.toISOString().substr(0,10);
        await this.setState({total_subtotal:total_subtotal,total_discount:total_discount,total_tax:total_tax,total_amount:total_amount,invoice_date:date,due_date:date2})
        const item=[...this.state.sold_items];
        var len=this.state.sold_items.length;
        for(var i=0;i<len;i++)
        {
            item[i].sub_total=((this.state.sold_items)[i].price)*((this.state.sold_items)[i].quantity);
            item[i].discount_type=((this.state.sold_items)[0]).discount_type
            await this.setState({sold_items:item})
        }
        const sale_invoice={
            customer:this.state.customer,
            invoice_no:this.state.invoice_no,
            order_no:this.state.order_no,
            invoice_date:this.state.invoice_date,
            payment_terms:this.state.payment_terms,
            due_date:this.state.due_date,
            sold_items:this.state.sold_items,
            total_subtotal:this.state.total_subtotal,
            total_tax:this.state.total_tax,
            total_discount:this.state.total_discount,
            total_amount:this.state.total_amount,
            notes:this.state.notes,
            terms_and_conditions:this.state.terms_and_conditions
        }
        console.log(sale_invoice)
        /*await axios.post("https://farzi-erp.herokuapp.com/invoice/sale_invoice/?ordering=created_at",sale_invoice)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })*/
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/persons_manager/customer/?ordering=created_at")
            .then(res => {
                this.setState({customers:res.data})
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        await axios.get("https://farzi-erp.herokuapp.com/shared/payment_terms/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        pa:[...this.state.pa,t1]
                    })
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        await axios.get("https://farzi-erp.herokuapp.com/inventory/product/?ordering=created_at")
            .then(res => {
                this.setState({items:res.data})
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            })
        await axios.get("https://farzi-erp.herokuapp.com/invoice/sale_invoice/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                var t1=(res.data)[t-1].invoice_no;
                this.setState({inv:t1})
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 0);
        var date = someDate.toISOString().substr(0, 10);
        var some=new Date();
        some.setDate(some.getDate() + 5);
        var date2=some.toISOString().substr(0,10);
        var onProductTableUpdate=this.handleProductTable;
        var changeHandler=this.changeHandler;
        var items=this.state.items;
        var filterText=this.state.filterText;
        let customerss=this.state.customers;
        let customers=customerss.map((cust) => 
            <option value={cust.id} style={{fontFamily:'Acme'}}>{cust.display_name}</option>)
        var prod=this.state.sold_items.map(function(prod) {
            if(prod.product.indexOf(filterText) === -1)
            {
                return ;
            }
            return (<InvoiceRow onProductTableUpdate={onProductTableUpdate} changeHandler={changeHandler} prod={prod} key={prod.id}   items={items} />)
        })
      return (
        <section className="content">
        <div className="row">
            <div className="col-md-12">
                <div className="card card-primary" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                    <div className="card-header">
                        <h3 className="card-title" style={{fontSize:'22px',fontFamily:'Acme'}}>New Invoice</h3>
                    </div>
                    <form className="form-horizontal" onSubmit={this.submitHandler}>
                        <div className="card-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Customer Name *</label>
                                <div className="col-sm-10">
                                    <select className="form-control" onChange={this.changeHandler}  name="customer" >
                                        <option value=" " disabled selected>Choose name</option>
                                        {customers}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Invoice No *</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" onChange={this.changeHandler} name="invoice_no" value={Number(this.state.inv)+1 }></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Order No</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" onChange={this.changeHandler} name="order_no"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Invoice Date *</label>
                                <div className="col-sm-2">
                                    <input type="date" className="form-control" id="today" defaultValue={date} onLoad={this.updateHandler} name="invoice_date" />
                                </div>
                                <label className="col-sm-1 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Terms</label>
                                <div className="col-sm-2">
                                    <select className="form-control" onChange={this.changeHandler} name="payment_terms">
                                        <option value={this.state.pa[0]}>Net 15</option>
                                        <option value={this.state.pa[1]}>Net 30</option>
                                        <option value={this.state.pa[2]}>Net 45</option>
                                        <option value={this.state.pa[3]}>Net 60</option>
                                        <option value={this.state.pa[4]}>Due end of month</option>
                                        <option value={this.state.pa[5]}>Due end of next month</option>
                                        <option value={this.state.pa[6]}>Due on receipt</option>
                                    </select>
                                </div>
                                <label className="col-sm-2 col-form-label " style={{fontSize:'20px',marginLeft:'85px',fontFamily:'Acme'}}>Due Date</label>
                                <div className="col-sm-2">
                                    <input type="date" className="form-control" defaultValue={date2}></input>
                                </div>
                                <div className="col-1"></div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{width:'20%'}}><h6 style={{marginLeft:'40px',fontSize:'16px',fontFamily:'Acme'}}>Item Details</h6></th>
                                        <th ><h6 style={{marginLeft:'0px',fontSize:'16px',fontFamily:'Acme'}}>Quantity</h6></th>
                                        <th style={{width:'20%'}}><h6 style={{marginLeft:'35px',fontSize:'16px',fontFamily:'Acme'}}>Price/Quantity</h6></th>
                                        <th style={{width:'20%'}}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <h6 style={{marginTop:'22px',fontFamily:'Acme'}}>Discount</h6>
                                                </div>
                                                <div className="col-6">
                                                    <input type="radio" value="amount" name="discount_type" id="amount" onChange={this.updateHandler} style={{marginLeft:'-5px'}}/>
                                                    <h6  for="amount" style={{fontSize:'14px',marginTop:'-20px',marginLeft:'15px',fontFamily:'Acme'}}>Amount</h6>
                                                    <input type="radio" value="percentage" name="discount_type" id="percentage" onChange={this.updateHandler} style={{marginLeft:'-5px'}}/>
                                                    <h6  for="percentage" style={{fontSize:'14px',marginTop:'-20px',marginLeft:'15px',fontFamily:'Acme'}}>Percent</h6>
                                                </div>
                                            </div>
                                        </th>
                                        <th style={{width:'10%'}}><h6 style={{marginLeft:'30px',fontSize:'16px',fontFamily:'Acme'}}>Tax</h6>
                                        {/*<div className="dropdown"> 
                                                <button className="btn dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{width:'100%',fontFamily:'Acme'}}>Tax
                                                    <span className="caret" style={{marginLeft:'18px'}}></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-lg">
                                                    <li>
                                                        <h6 style={{marginLeft:'-10px'}}>
                                                            <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax1} style={{width:'100%'}}>
                                                                {this.state.taxes[0].tax1}
                                                            </button>
                                                        </h6>
                                                    </li>
                                                    <li>                                                        <div className="dropdown-divider"></div>
                                                        <h6 style={{marginLeft:'-10px'}}>
                                                            <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax2} style={{width:'100%'}}>
                                                                {this.state.taxes[0].tax2}
                                                            </button>
                                                        </h6></li>
                                                    <li>
                                                    <div className="dropdown-divider"></div>
                                                        <h6 style={{marginLeft:'-10px'}}>
                                                            <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax3} style={{width:'100%'}}>
                                                                {this.state.taxes[0].tax3}
                                                            </button>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                    <div className="dropdown-divider"></div>
                                                        <h6 style={{marginLeft:'-10px'}}>
                                                            <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax4} style={{width:'100%'}}>
                                                                {this.state.taxes[0].tax4}
                                                            </button>
                                                        </h6>
                                                    </li>
                                                    <li>
                                                    <div className="dropdown-divider"></div>
                                                        <h6 style={{marginLeft:'-10px'}}>
                                                            <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax5} style={{width:'100%'}}>
                                                                {this.state.taxes[0].tax5}
                                                            </button>
                                                        </h6>
                                                    </li>
                                                </ul>
    </div>*/}
                                        </th>
                                        <th style={{width:'20%'}}><h6 style={{marginLeft:'45px',fontSize:'16px',fontFamily:'Acme'}}>Amount</h6></th>
                                    </tr>
                                </thead>
                                <tbody className={this.state.active}>
                                    {prod}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-outline-success mt-5" onClick={this.handleAddEvent}>Add Another Entry</button>
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label for="terms" className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Customer Notes</label>
                                        <textarea className="form-control" rows="3" style={{width:'80%'}} onChange={this.changeHandler} name="notes"></textarea>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label  style={{fontSize:'20px',marginLeft:'285px',fontFamily:'Acme'}}>SubTotal:</label>
                                    <label style={{fontSize:'20px',marginLeft:'28px',fontFamily:'Acme'}}>Rs {this.renderSubtotal()}</label>
                                    <label  style={{fontSize:'20px',marginLeft:'325px',fontFamily:'Acme'}}>GST:</label>
                                    <label style={{fontSize:'20px',marginLeft:'30px',fontFamily:'Acme'}}>Rs {this.renderTax()}</label>
                                    <label  style={{fontSize:'20px',marginLeft:'285px',fontFamily:'Acme'}}>Discount:</label>
                                    <label style={{fontSize:'20px',marginLeft:'30px',fontFamily:'Acme'}}>Rs {this.renderDiscount()}</label>
                                    {/*<label for="terms" style={{fontSize:'15px',marginLeft:'326px'}}>CGST:</label>
                                    <label style={{fontSize:'18px',marginLeft:'32px'}}>Rs {(this.renderTax())/2}</label>
                                    <label for="terms" style={{fontSize:'15px',marginLeft:'326px'}}>SGST:</label>
<label style={{fontSize:'18px',marginLeft:'32px'}}>Rs {(this.renderTax())/2}</label>*/}
                                    <hr style={{width:'43%',color:'black',marginLeft:'263px'}}/>
                                    <label  className="mt-2" style={{fontSize:'20px',marginLeft:'290px',fontFamily:'Acme'}}>Amount:</label>
                                    <label style={{fontSize:'20px',marginLeft:'30px',fontFamily:'Acme'}}>Rs {this.renderAmount()}</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="terms" className="mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Terms & Conditions</label>
                                <textarea className="form-control" rows="4" style={{width:'50%'}}  onChange={this.changeHandler} name="terms_and_conditions"></textarea>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button  className="btn btn-outline-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        );
  
    }
  
  }