import React from 'react';
import axios from 'axios'
import PurchaseRow from "../purchase/purchaserow"
export default class PurchaseCreate extends React.Component {
    constructor(state)
    {
        super(state);
        this.state={
            active:false,
            filterText:"",
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
            suppliers:[
                {
                    id:' ',
                    first_name:' ',
                    last_name:' ',
                    display_name:' '
                }
            ],
            supplier:' ',
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
            invoice_date:' ',
            payment_terms:' ',
            expected_delivery:' ',
            purchased_items:[
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
        var len1=this.state.purchased_items.length;
        var id=(len1 +1).toString();
        var purchased_item={
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
        this.state.purchased_items.push(purchased_item);
        this.setState(this.state.purchased_items);
    }
    handleProductTable = (event) =>
    {
        event.preventDefault()
        var item={
            id:event.target.id,
            name:event.target.name,
            value:event.target.value
        };
        var purchased_items=this.state.purchased_items.slice();
        var newProducts=purchased_items.map(function(purchased_item) {
            for (var key in purchased_item) {
                if(key == item.name && purchased_item.id == item.id) 
                {
                    purchased_item[key]=item.value;
                }
            }
            return purchased_item;
        });
        this.setState({purchased_items:newProducts})
        var len=this.state.purchased_items.length;
        var pro=(this.state.purchased_items)[len-1].product
        const found=(this.state.items).findIndex(o1 => o1.id == pro);
        const productnew=[...this.state.purchased_items];
        productnew[len-1].taxx=(this.state.items)[found].tax.rate;
        productnew[len-1].tax=(this.state.items)[found].tax.id;
        this.setState({purchased_items:productnew})
        console.log(this.state.purchased_items)
    };
    updateTax = (event) => {
        event.preventDefault();
        const productnew=[...this.state.purchased_items];
        var len=productnew.length;
        if(len == 1)
        {
            productnew[0].taxx=(event.target.value).slice(3,6);
            this.setState({purchased_items:productnew})
        }
        if(len > 1)
        {
            productnew[len - 1].taxx=(event.target.value).slice(3,6);
            this.setState({purchased_items:productnew})
        }
    }
    renderSubtotal = () => {
        var len=this.state.purchased_items.length;
        var total_subtotal=0;
        for(var i=0;i<len;i++)
        {
            if(len==1)
            {
                total_subtotal=total_subtotal+(this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity);
            }
            if(len>1)
            {
                total_subtotal=total_subtotal+(this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity);
            }
        }
        return total_subtotal;
    }
    renderDiscount = () => {
        var len=this.state.purchased_items.length;
        var  total_discount=0;
        for(var i=0;i<len;i++)
        {
            if(len == 1 && ((this.state.purchased_items)[i].discount_type) == 'amount' )
            {
                total_discount=(total_discount +  Number((this.state.purchased_items[i]).discount));
            }
            if(len==1 && ((this.state.purchased_items)[i].discount_type) == 'percentage' )
            {
                total_discount=total_discount + (((this.state.purchased_items[i]).discount)*((this.state.purchased_items)[i].quantity)*((this.state.purchased_items)[i].price))/100;
            }
            if(len > 1 && ((this.state.purchased_items)[0].discount_type) == 'amount' )
            {
                total_discount=(total_discount + Number((this.state.purchased_items[i]).discount));
            }
            if(len > 1 && ((this.state.purchased_items)[0].discount_type) == 'percentage' )
            {
                total_discount=total_discount + (((this.state.purchased_items[i]).discount)*((this.state.purchased_items)[i].quantity)*((this.state.purchased_items)[i].price))/100;
            }
        }
        return total_discount;
    }
    renderTax = () => {
        var len=this.state.purchased_items.length;
        var total_tax=0;
        for(var i=0;i<len;i++)
        {
            if(len==1)
            {
                total_tax= total_tax + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100;
            }
            if(len > 1)
            {
                total_tax=total_tax + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100;
            }
        }
        return total_tax;
    }
    renderAmount = () => {
        var len=this.state.purchased_items.length;
        var total_amount=0;
        for(var i=0;i<len;i++)
        {
            if(len==1 && (this.state.purchased_items)[i].discount_type == 'amount' )
            {
                total_amount= total_amount + (this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity) + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100 - Number((this.state.purchased_items)[i].discount);
            }
            if(len==1 && (this.state.purchased_items)[i].discount_type == 'percentage' )
            {
                total_amount= total_amount + (this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity) + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100 - (((this.state.purchased_items)[i].discount)*((this.state.purchased_items)[i].price)*((this.state.purchased_items)[i].quantity))/100;
            }
            if(len > 1 && (this.state.purchased_items)[0].discount_type == 'amount' )
            {
                total_amount= total_amount + (this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity) + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100 - Number((this.state.purchased_items)[i].discount);
            }
            if(len > 1 && (this.state.purchased_items)[0].discount_type == 'percentage' )
            {
                total_amount= total_amount + (this.state.purchased_items[i].price)*(this.state.purchased_items[i].quantity) + ((this.state.purchased_items[i].price)*(this.state.purchased_items[i].taxx)*(this.state.purchased_items[i].quantity))/100 - (((this.state.purchased_items)[i].discount)*((this.state.purchased_items)[i].price)*((this.state.purchased_items)[i].quantity))/100;
            }
        }
        return total_amount;
    }
    changeHandler =(e) => {
        const {purchased_items}= {...this.state};
        const currentState=purchased_items;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({[e.target.name]: e.target.value ,purchased_items:currentState})
    }
    updateHandler = (e) => {
        const item=[...this.state.purchased_items];
        var len=item.length;
        if(len==1)
        {
            item[0].discount_type=e.target.value;
            this.setState({purchased_items:item})
        }
        if(len > 1)
        {
            item[len-1].discount_type=(this.state.purchased_items)[0].discount_type;
            this.setState({purchased_items:item})
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
        await this.setState({total_subtotal:total_subtotal,total_discount:total_discount,total_tax:total_tax,total_amount:total_amount,invoice_date:date,expected_delivery:date2})
        const item=[...this.state.purchased_items];
        var len=this.state.purchased_items.length;
        for(var i=0;i<len;i++)
        {
            item[i].sub_total=((this.state.purchased_items)[i].price)*((this.state.purchased_items)[i].quantity);
            item[i].discount_type=((this.state.purchased_items)[0]).discount_type
            await this.setState({purchased_items:item})
        }
        const sale_invoice={
            supplier:this.state.supplier,
            invoice_no:this.state.invoice_no,
            invoice_date:this.state.invoice_date,
            payment_terms:this.state.payment_terms,
            expected_delivery:this.state.expected_delivery,
            purchased_items:this.state.purchased_items,
            total_subtotal:this.state.total_subtotal,
            total_tax:this.state.total_tax,
            total_discount:this.state.total_discount,
            total_amount:this.state.total_amount,
            notes:this.state.notes,
            terms_and_conditions:this.state.terms_and_conditions
        }
        console.log(sale_invoice)
        await axios.post("https://farzi-erp.herokuapp.com/invoice/purchase_invoice/?ordering=created_at",sale_invoice)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/persons_manager/supplier/?ordering=created_at")
            .then(res => {
                this.setState({suppliers:res.data})
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
        let supplierss=this.state.suppliers;
        let suppliers=supplierss.map((supp) => 
            <option value={supp.id}>{supp.display_name}</option>)
        var prod=this.state.purchased_items.map(function(prod) {
            if(prod.product.indexOf(filterText) === -1)
            {
                return ;
            }
            return (<PurchaseRow onProductTableUpdate={onProductTableUpdate} changeHandler={changeHandler} prod={prod} key={prod.id}   items={items} />)
        })
      return (
        <section className="content">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title" style={{fontSize:'20px'}}>New Purchase</h3>
                        </div>
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <div className="card-body">
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>SupplierName</label>
                                    <div className="col-sm-10">
                                        <select className="form-control" onChange={this.changeHandler}  name="supplier" >
                                            <option value=" " disabled selected>Choose name</option>
                                            {suppliers}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Purchase No</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" onChange={this.changeHandler} name="invoice_no"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Invoice Date</label>
                                    <div className="col-sm-2">
                                        <input type="date" className="form-control" id="today" defaultValue={date} onLoad={this.updateHandler} name="invoice_date" />
                                    </div>
                                    <label className="col-sm-1 col-form-label" style={{fontSize:'20px'}}>Terms</label>
                                    <div className="col-sm-2">
                                        <select className="form-control" onChange={this.changeHandler} name="payment_terms">
                                            <option value={this.state.pa[0]}>Net 15</option>
                                            <option value={this.state.pa[1]}>Net 30</option>
                                            <option value={this.state.pa[2]}>Net 45</option>
                                            <option value={this.state.pa[3]}>Net 60</option>
                                            <option value={this.state.pa[4]}>Due end of month</option>nvoice
                                            <option value={this.state.pa[5]}>Due end of next month</option>
                                            <option value={this.state.pa[6]}>Due on receipt</option>
                                        </select>
                                    </div>
                                    <label className="col-sm-3 col-form-label " style={{fontSize:'20px',marginLeft:'0px'}}>Expected Delivery</label>
                                    <div className="col-sm-2">
                                        <input type="date" className="form-control" defaultValue={date2}></input>
                                    </div>
                                </div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{width:'20%'}}><h6 style={{marginLeft:'40px',fontSize:'16px'}}>Item Details</h6></th>
                                            <th ><h6 style={{marginLeft:'0px',fontSize:'16px'}}>Quantity</h6></th>
                                            <th style={{width:'20%'}}><h6 style={{marginLeft:'35px',fontSize:'16px'}}>Price/Quantity</h6></th>
                                            <th style={{width:'20%'}}>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <h6 style={{marginTop:'22px'}}>Discount</h6>
                                                    </div>
                                                    <div className="col-6">
                                                        <input type="radio" value="amount" name="discount_type" id="amount" onChange={this.updateHandler} style={{marginLeft:'-5px'}}/>
                                                        <h6  for="amount" style={{fontSize:'14px',marginTop:'-20px',marginLeft:'15px'}}>Amount</h6>
                                                        <input type="radio" value="percentage" name="discount_type" id="percentage" onChange={this.updateHandler} style={{marginLeft:'-5px'}}/>
                                                        <h6  for="percentage" style={{fontSize:'14px',marginTop:'-20px',marginLeft:'15px'}}>Percent</h6>
                                                    </div>
                                                </div>
                                            </th>
                                            <th style={{width:'20%'}}><h6 style={{marginLeft:'70px',top:'77%',position:'sticky',}}>Tax</h6>
                                                <ul className="navbar-nav" style={{width:'20%'}}>
                                                    <li className="nav-item dropdown" style={{width:'20%'}}>
                                                        <a className="nav-link" data-toggle="dropdown" href="#" style={{width:'20%',marginLeft:'30px'}}>
                                                            <i className="fas fa-chevron-down" style={{color:'black',marginLeft:'140px',fontSize:'15px'}}/>
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                                                            <h6 style={{marginLeft:'-10px'}}>
                                                                <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax1} style={{width:'100%'}}>
                                                                    {this.state.taxes[0].tax1}
                                                                </button>
                                                            </h6>
                                                            <div className="dropdown-divider"></div>
                                                            <h6 style={{marginLeft:'-10px'}}>
                                                                <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax2} style={{width:'100%'}}>
                                                                    {this.state.taxes[0].tax2}
                                                                </button>
                                                            </h6>
                                                            <div className="dropdown-divider"></div>
                                                            <h6 style={{marginLeft:'-10px'}}>
                                                                <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax3} style={{width:'100%'}}>
                                                                    {this.state.taxes[0].tax3}
                                                                </button>
                                                            </h6>
                                                            <div className="dropdown-divider"></div>
                                                            <h6 style={{marginLeft:'-10px'}}>
                                                                <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax4} style={{width:'100%'}}>
                                                                    {this.state.taxes[0].tax4}
                                                                </button>
                                                            </h6>
                                                            <div className="dropdown-divider"></div>
                                                            <h6 style={{marginLeft:'-10px'}}>
                                                                <button type="button" className="btn" onClick={this.updateTax} value={this.state.taxes[0].tax5} style={{width:'100%'}}>
                                                                    {this.state.taxes[0].tax5}
                                                                </button>
                                                            </h6>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </th>
                                            <th style={{width:'20%'}}><h6 style={{marginLeft:'45px',fontSize:'16px'}}>Amount</h6></th>
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
                                            <label for="terms" className="mt-3" style={{fontSize:'20px'}}>Customer Notes</label>
                                            <textarea className="form-control" rows="3" style={{width:'80%'}} onChange={this.changeHandler} name="notes"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <label for="terms" style={{fontSize:'20px',marginLeft:'275px'}}>SubTotal:</label>
                                        <label style={{fontSize:'20px',marginLeft:'30px'}}>Rs {this.renderSubtotal()}</label>
                                        <label for="terms" style={{fontSize:'20px',marginLeft:'325px'}}>GST:</label>
                                        <label style={{fontSize:'20px',marginLeft:'30px'}}>Rs {this.renderTax()}</label>
                                        <label for="terms" style={{fontSize:'20px',marginLeft:'277px'}}>Discount:</label>
                                        <label style={{fontSize:'20px',marginLeft:'30px'}}>Rs {this.renderDiscount()}</label>
                                        {/*<label for="terms" style={{fontSize:'15px',marginLeft:'326px'}}>CGST:</label>
                                        <label style={{fontSize:'18px',marginLeft:'32px'}}>Rs {(this.renderTax())/2}</label>
                                        <label for="terms" style={{fontSize:'15px',marginLeft:'326px'}}>SGST:</label>
    <label style={{fontSize:'18px',marginLeft:'32px'}}>Rs {(this.renderTax())/2}</label>*/}
                                        <hr style={{width:'43%',color:'black',marginLeft:'263px'}}/>
                                        <label for="terms" className="mt-2" style={{fontSize:'20px',marginLeft:'285px'}}>Amount:</label>
                                        <label style={{fontSize:'20px',marginLeft:'30px'}}>Rs {this.renderAmount()}</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="terms" className="mt-3" style={{fontSize:'20px'}}>Terms & Conditions</label>
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