import React, { Component } from 'react';
import InvoiceRow from "../invoice/invoicerow";
class invoicecreatetable extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            invoices:[
                {id:'1'},
                {id:'2'}
            ],
        }
        console.log(this.props.products[0].tax)
    }
    render() {
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 0);
        var date = someDate.toISOString().substr(0, 10);
        var some=new Date();
        some.setDate(some.getDate() + 5);
        var date2=some.toISOString().substr(0,10);
        var onProductTableUpdate=this.props.onProductTableUpdate;
        var filterText=this.props.filterText;
        var product=this.props.products.map(function(product) {
            if(product.name.indexOf(filterText) === -1)
            {
                return ;
            }
            return (<InvoiceRow onProductTableUpdate={onProductTableUpdate} product={product} key={product.id}  />)
        })
        return (                                                     
            <section className="content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title" style={{fontSize:'20px'}}>New Invoice</h3>
                            </div>
                            <form className="form-horizontal">
                                <div className="card-body">
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Customer Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" ></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Invoice No</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" value={"0000"  + (this.state.invoices.length + 1) }></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Order No</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Invoice Date</label>
                                        <div className="col-sm-2">
                                            <input type="date" className="form-control" id="today" defaultValue={date} />
                                        </div>
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Terms</label>
                                        <div className="col-sm-2">
                                            <select className="form-control">
                                                <option>Due On Receipt</option>
                                                <option>Due end of month</option>
                                                <option>Due end of next month</option>
                                            </select>
                                        </div>
                                        <label className="col-sm-2 col-form-label " style={{fontSize:'20px'}}>Due Date</label>
                                        <div className="col-sm-2">
                                            <input type="date" className="form-control" defaultValue={date2}></input>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label" style={{fontSize:'20px'}}>Salesperson</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control"></input>
                                        </div>
                                    </div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th><h6 style={{marginTop:'-40px',marginLeft:'30px'}}>Item Details</h6></th>
                                                <th><h6 style={{marginTop:'-40px',marginLeft:'50px'}}>Quantity</h6></th>
                                                <th><h6 style={{marginTop:'-40px',marginLeft:'40px'}}>Price/Quantity</h6></th>
                                                <th><h6 style={{marginLeft:'70px',top:'86%',position:'sticky'}}>Tax</h6>
                                                    <ul className="navbar-nav" style={{width:'20%'}}>
                                                        <li className="nav-item dropdown" style={{width:'20%'}}>
                                                            <a className="nav-link" data-toggle="dropdown" href="#" style={{width:'20%',marginLeft:'50px'}}>
                                                                <i className="fas fa-chevron-down" style={{color:'black',marginLeft:'140px',marginTop:'-120px',fontSize:'15px'}}/>
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                                                                <button type="button" className="btn" onClick={this.props.updateTax} value={this.props.taxes[0].tax1} style={{width:'100%'}}>
                                                                    <h6 style={{marginLeft:'-10px'}}>{this.props.taxes[0].tax1}</h6>
                                                                </button>
                                                                <div className="dropdown-divider"></div>
                                                                <button type="button" className="btn" onClick={this.props.updateTax} value={this.props.taxes[0].tax2} style={{width:'100%'}}>
                                                                    <h6 style={{marginLeft:'-10px'}}>{this.props.taxes[0].tax2}</h6>
                                                                </button>
                                                                <div className="dropdown-divider"></div>
                                                                <button type="button" className="btn" onClick={this.props.updateTax} value={this.props.taxes[0].tax3} style={{width:'100%'}}>
                                                                    <h6 style={{marginLeft:'-10px'}}>{this.props.taxes[0].tax3}</h6>
                                                                </button>
                                                                <div className="dropdown-divider"></div>
                                                                <button type="button" className="btn" onClick={this.props.updateTax} value={this.props.taxes[0].tax4} style={{width:'100%'}}>
                                                                    <h6 style={{marginLeft:'-10px'}}>{this.props.taxes[0].tax4}</h6>
                                                                </button>
                                                                <div className="dropdown-divider"></div>
                                                                <button type="button" className="btn" onClick={this.props.updateTax} value={this.props.taxes[0].tax5} style={{width:'100%'}}>
                                                                    <h6 style={{marginLeft:'-10px'}}>{this.props.taxes[0].tax5}</h6>
                                                                </button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </th>
                                                <th><h6 style={{marginTop:'-40px',marginLeft:'60px'}}>Amount</h6></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {product}
                                        </tbody>
                                    </table>
                                    <button type="button" className="btn btn-outline-success mt-5" onClick={this.props.onRowAdd}>Add Another Entry</button>
                                    <div className="form-group">
                                        <label for="terms" className="mt-3" style={{fontSize:'20px'}}>Terms & Conditions</label>
                                        <textarea className="form-control" rows="4" style={{width:'50%'}}></textarea>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button type="button" className="btn btn-outline-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default invoicecreatetable;