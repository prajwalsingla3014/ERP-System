import React, { Component } from 'react'
import "../invoice/invoicenone.css";
import axios from 'axios';
export default class expensecreate extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            taxx:[],
            gs:[],
            st:[],
            ex:[],
            expense_type:' ',
            check:false,
            check1:false,
            date:' ',
            notes:' ',
            category:' ',
            gst:' ',
            destination_of_supply:' ',
            intra_state_tax:' ',
            inter_state_tax:' ',
            amount:' ',
            hsn_code:' ',
            sac_code:' ',
            customer:' ',
            customers:[
                {
                    id:' ',
                    first_name:' ',
                    last_name:' ',
                    display_name:' '
                }
            ],
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    goodchangeHandler = (e) => {
        if(this.state.check1)
        {
            this.setState({[e.target.name]:e.target.value,check1:!this.state.check1,check:!this.state.check})
        }
        else
        {
            this.setState({[e.target.name]:e.target.value,check:!this.state.check})
        }
    }
    servicechangeHandler = (e) => {
        if(this.state.check)
        {
            this.setState({[e.target.name]:e.target.value,check:!this.state.check,check1:!this.state.check1})
        }
        else
        {
            this.setState({[e.target.name]:e.target.value,check1:!this.state.check1})
        }
    }
    submitHandler = async (e) => {
        e.preventDefault();
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 0);
        var da = someDate.toISOString().substr(0, 10);
        await this.setState({date:da});
        const expense={
            date:this.state.date,
            customer:this.state.customer,
            category:this.state.category,
            expense_type:this.state.expense_type,
            amount:this.state.amount,
            gst:this.state.gst,
            destination_of_supply:this.state.destination_of_supply,
            intra_state_tax:this.state.intra_state_tax,
            inter_state_tax:this.state.inter_state_tax,
            notes:this.state.notes,
            hsn_code:this.state.hsn_code,
            sac_code:this.state.sac_code

        }
        console.log(expense)
        await axios.post("https://farzi-erp.herokuapp.com/invoice/expense/",expense)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            })
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
        await axios.get("https://farzi-erp.herokuapp.com/shared/gst/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        gs:[...this.state.gs,t1]
                    });
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        await axios.get("https://farzi-erp.herokuapp.com/invoice/expense_category/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        ex:[...this.state.ex,t1]
                    });
                }
                console.log(res);
            })
            .catch(err => {
                 console.log(err);
            })
        await axios.get("https://farzi-erp.herokuapp.com/shared/state/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        st:[...this.state.st,t1]
                    });
                }
                console.log(res);
            })
            .catch(err => {
                 console.log(err);
            })
        await axios.get("https://farzi-erp.herokuapp.com/shared/tax/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        taxx:[...this.state.taxx,t1]
                    });
                }
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        var someDate = new Date();
        someDate.setDate(someDate.getDate() + 0);
        var da = someDate.toISOString().substr(0, 10);
        let customerss=this.state.customers;
        let customers=customerss.map((cust) => 
            <option value={cust.id} style={{fontFamily:'Acme'}}>{cust.display_name}</option>)
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-success" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px',fontFamily:'Acme'}}>New Expense</h3>
                                </div>
                                <form className="form-horizontal" onSubmit={this.submitHandler}>
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Date*</label>
                                            <div className="col-10">
                                                <input type="date" className="form-control" defaultValue={da} name="date"></input>
                                            </div>
                                        </div>
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
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Category Name*</label>
                                            <div className="col-10">
                                                <select className="form-control"  name="category" onChange={this.changeHandler}>
                                                    <option value={this.state.ex[0]}>Job Costing</option>
                                                    <option value={this.state.ex[1]}>Labor</option>
                                                    <option value={this.state.ex[2]}>Materials</option>
                                                    <option value={this.state.ex[3]}>Subcontractor</option>
                                                    <option value={this.state.ex[4]}>Advertising and Marketing</option>
                                                    <option value={this.state.ex[5]}>Automobile Expense</option>
                                                    <option value={this.state.ex[6]}>Consultant Expense</option>
                                                    <option value={this.state.ex[7]}>Contract Assests</option>
                                                    <option value={this.state.ex[8]}>Credit Card Charges</option>
                                                    <option value={this.state.ex[9]}>Depreciation and Amortisation</option>
                                                    <option value={this.state.ex[10]}>Depreciation Expense</option>
                                                    <option value={this.state.ex[11]}>IT and Internet Expense</option>
                                                    <option value={this.state.ex[12]}>Janitorial Expense</option>
                                                    <option value={this.state.ex[13]}>Lodging</option>
                                                    <option value={this.state.ex[14]}>Meals and Entertainment</option>
                                                    <option value={this.state.ex[15]}>Merchandise</option>
                                                    <option value={this.state.ex[16]}>Office Supplies</option>
                                                    <option value={this.state.ex[17]}>Postage</option>
                                                    <option value={this.state.ex[18]}>Printing and Stationery</option>
                                                    <option value={this.state.ex[19]}>Raw Material and Consumable</option>
                                                    <option value={this.state.ex[20]}>Rent Expense</option>
                                                    <option value={this.state.ex[21]}>Repair and Maintenance</option>
                                                    <option value={this.state.ex[22]}>Salaries and Employee Wages</option>
                                                    <option value={this.state.ex[23]}>Telephone Expense</option>
                                                    <option value={this.state.ex[24]}>Transportation Expense</option>
                                                    <option value={this.state.ex[25]}>Travel Expense</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Expense Type*</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="goods" checked={this.state.expense_type === "goods"} name="expense_type" id="goods" onChange={this.goodchangeHandler} />
                                                <label className="form-check-label " for="goods" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                        Goods
                                                </label>
                                            </div>
                                            <div className="col-1 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="services" checked={this.state.expense_type === "services"} name="expense_type" id="services" onChange={this.servicechangeHandler}/>
                                                <label className="form-check-label" for="services" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                       Services
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className={this.state.check ? "col-2 col-form-label" : "none"} style={{fontSize:'20px',fontFamily:'Acme'}}>HSN Code</label>
                                            <label className={this.state.check1 ? "col-2 col-form-label" : "none"} style={{fontSize:'20px',fontFamily:'Acme'}}>SAC Code</label>
                                            <div className={this.state.check ? "col-10" : "none"}>
                                                <input type="text" name="hsn_code" className="form-control" value={this.state.hsn_code} onChange={this.changeHandler}></input>
                                            </div>
                                            <div className={this.state.check1? "col-10" : "none"}>
                                                <input type="text" name="sac_code" className="form-control" value={this.state.sac_code} onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Amount*</label>
                                            <div className="col-10">
                                                <input type="text" className="form-control" name="amount"  onChange={this.changeHandler}></input>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>GST Treatment *</label>
                                            <div className="col-sm-10">
                                                <select className="form-control" onChange={this.changeHandler} name="gst">
                                                    <option value={this.state.gs[0]}>Registered Business - Composition </option>
                                                    <option value={this.state.gs[1]}>Registered Business - Regular</option>
                                                    <option value={this.state.gs[2]}>Unregistered Business</option>
                                                    <option value={this.state.gs[3]}>Consumer</option>
                                                    <option value={this.state.gs[4]}>Overseas</option>
                                                    <option value={this.state.gs[5]}>Special Economic Zone</option>
                                                    <option value={this.state.gs[6]}>Deemed Export</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Destination of Supply *</label>
                                            <div className="col-sm-10">
                                                <select className="form-control" onChange={this.changeHandler} name="destination_of_supply">
                                                    <option value={this.state.st[0]}>[AN] - Andaman and Nicobar Islands </option>
                                                    <option value={this.state.st[1]}>[AD] - Andhra Pradesh</option>
                                                    <option value={this.state.st[2]}>[AR] - Arunachal Pradesh</option>
                                                    <option value={this.state.st[3]}>[AS] - Assam</option>
                                                    <option value={this.state.st[4]}>[BR] - Bihar</option>
                                                    <option value={this.state.st[5]}>[CH] - Chandigarh</option>
                                                    <option value={this.state.st[6]}>[CG] - Chhattisgarh</option>
                                                    <option value={this.state.st[7]}>[DN] - Dadra and Nagar Haveli</option>
                                                    <option value={this.state.st[8]}>[DD] - Daman and Diu</option>
                                                    <option value={this.state.st[9]}>[DL] - Delhi</option>
                                                    <option value={this.state.st[10]}>[GA] - Goa</option>
                                                    <option value={this.state.st[11]}>[GJ] - Gujarat</option>
                                                    <option value={this.state.st[12]}>[HR] - Haryana</option>
                                                    <option value={this.state.st[13]}>[HP] - Himachal Pradesh</option>
                                                    <option value={this.state.st[14]}>[JK] - Jammu and Kashmir</option>
                                                    <option value={this.state.st[15]}>[JH] - Jharkhand</option>
                                                    <option value={this.state.st[16]}>[KA] - Karnataka</option>
                                                    <option value={this.state.st[17]}>[KL] - Kerala</option>
                                                    <option value={this.state.st[18]}>[LA] - Ladakh</option>
                                                    <option value={this.state.st[19]}>[LD] - Lakshadweep</option>
                                                    <option value={this.state.st[20]}>[MP] - Madhya Pradesh</option>
                                                    <option value={this.state.st[21]}>[MH] - Maharashtra</option>
                                                    <option value={this.state.st[22]}>[MN] - Manipur</option>
                                                    <option value={this.state.st[23]}>[ML] - Meghalaya</option>
                                                    <option value={this.state.st[24]}>[MZ] - Mizoram</option>
                                                    <option value={this.state.st[25]}>[NL] - Nagaland</option>
                                                    <option value={this.state.st[26]}>[OD] - Odisha</option>
                                                    <option value={this.state.st[27]}>[PY] - Puducherry</option>
                                                    <option value={this.state.st[28]}>[PB] - Punjab</option>
                                                    <option value={this.state.st[28]}>[RJ] - Rajasthan</option>
                                                    <option value={this.state.st[30]}>[SK] - Sikkim</option>
                                                    <option value={this.state.st[31]}>[TN] - Tamil Nadu</option>
                                                    <option value={this.state.st[32]}>[TS] - Telangana</option>
                                                    <option value={this.state.st[33]}>[TR] - Tripura</option>
                                                    <option value={this.state.st[34]}>[UP] - Uttar Pradesh</option>
                                                    <option value={this.state.st[35]}>[UK] - Uttarakhand</option>
                                                    <option value={this.state.st[36]}>[WB] - West Bengal</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Intra State Tax Rate</label>
                                            <div className="col-10">
                                                <select className="form-control mt-2" onChange={this.changeHandler} name="intra_state_tax">
                                                    <option value={this.state.taxx[0]}>GST0 [0%]</option>
                                                    <option value={this.state.taxx[1]}>GST5 [5%]</option>
                                                    <option value={this.state.taxx[2]}>GST12 [12%]</option>
                                                    <option value={this.state.taxx[3]}>GST18 [18%]</option>
                                                    <option value={this.state.taxx[4]}>GST28 [28%]</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}} >Inter State Tax Rate</label>
                                            <div className="col-10">
                                                <select className="form-control mt-2" onChange={this.changeHandler} name="inter_state_tax">
                                                    <option value={this.state.taxx[5]}>IGST0 [0%]</option>
                                                    <option value={this.state.taxx[6]}>IGST5 [5%]</option>
                                                    <option value={this.state.taxx[7]}>IGST12 [12%]</option>
                                                    <option value={this.state.taxx[8]}>IGST18 [18%]</option>
                                                    <option value={this.state.taxx[9]}>IGST28 [28%]</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Notes</label>
                                            <div className="col-10">
                                                <textarea className="form-control" onChange={this.changeHandler} name="notes"></textarea>
                                            </div>
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
            </div>
        )
    }
}
