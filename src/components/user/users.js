import React, { Component } from 'react'
import "../invoice/invoicenone.css";
import axios from 'axios';
export default class users extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            other:false,
            addres:false,
            remark:false,
            st:[],
            gs:[],
            pa:[],
        }
    }
    otherdetail = () => {
        if(!this.state.other)
            this.setState({other : !this.state.other})
        if(this.state.addres)
            this.setState({addres:!this.state.addres})
        if(this.state.remark)
            this.setState({remark : !this.state.remark})
    }
    toggleaddress = () => {
        if(this.state.other)
            this.setState({other : !this.state.other})
        if(!this.state.addres)
            this.setState({addres:!this.state.addres})
        if(this.state.remark)
            this.setState({remark : !this.state.remark})        
    }   

    toggleremarks= () => {
        if(this.state.other)
            this.setState({other : !this.state.other})
        if(this.state.addres)
            this.setState({addres:!this.state.addres})
        if(!this.state.remark)
            this.setState({remark : !this.state.remark})
        
    }
    async componentDidMount()
    {
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
    }
    render() {
        return (
            <div>
                <section className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title">Client</h3>
                                </div>
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>User Type</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="business"  name="type" id="business" onChange={this.changeHandler} />
                                                <label className="form-check-label " for="business" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Business
                                                </label>
                                            </div>
                                            <div className="col-1 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="individual"   name="type" id="individual" onChange={this.changeHandler}/>
                                                <label className="form-check-label" for="individual" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                       Individual
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Primary Contact</label>
                                            <div className="col-sm-3">
                                                <select className="form-control"  name="salutation" onChange={this.changeHandler}>
                                                        <option value="Dr.">Dr.</option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Miss.">Miss.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text" name="first_name" className="form-control" onChange={this.changeHandler}  placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" name="last_name" className="form-control" onChange={this.changeHandler}  placeholder="Last Name"/>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Display Name</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="display_name" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Company Name</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="company_name" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Industry</label>
                                            <div className="col-sm-10">
                                                <select className="form-control" onChange={this.changeHandler}>
                                                    <option>Agency or Sale House</option>
                                                    <option>Agriculture</option>
                                                    <option>Art and Design</option>
                                                    <option>Automative</option>
                                                    <option>Construction</option>
                                                    <option>Consulting</option>
                                                    <option>Consumer Packaged Goods</option>
                                                    <option>Education</option>
                                                    <option>Engineering</option>
                                                    <option>Entertainment</option>
                                                    <option>Financial Services</option>
                                                    <option>Food Services</option>
                                                    <option>Gaming</option>
                                                    <option>Government</option>
                                                    <option>Health Care</option>
                                                    <option>Interior Design</option>
                                                    <option>Internal</option>
                                                    <option>Legal</option>
                                                    <option>Manufacturing</option>
                                                    <option>Marketing</option>
                                                    <option>Mining and Logistics</option>
                                                    <option>Non-Profit</option>
                                                    <option>Publishing and Web Media</option>
                                                    <option>Real Estate</option>
                                                    <option>Retail</option>
                                                    <option>Services</option>
                                                    <option>Technology</option>
                                                    <option>Telecommunications</option>
                                                    <option>Travel</option>
                                                    <option>Web Designing</option>
                                                    <option>Web Development</option>
                                                    <option>Writers</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>User Phone</label>
                                                <div className="col-sm-5">
                                                    <input type="text" name="phone" className="form-control"  placeholder="Work Phone" onChange={this.changeHandler}/>
                                                </div>
                                                <div className="col-sm-5">
                                                    <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={this.changeHandler}/>
                                                </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>User Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" name="email" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Website</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="website" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <hr />
                                        <button type="button" className="btn btn-outline-info" onClick={this.otherdetail}>Other Details</button>
                                        <button type="button" className="btn btn-outline-info ml-3" onClick={this.toggleaddress}>Address</button>
                                        <button type="button" className="btn btn-outline-info ml-3" onClick={this.toggleremarks}>Remarks</button>
                                        <hr />
                                        <div className= {this.state.other ?  "col-sm-12" : "none"}>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>GST Treatment</label>
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
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Tax Preference</label>
                                                <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="true"  name="taxable" id="tax" onChange={this.changeHandler}/>
                                                    <label className="form-check-label " for="taxable" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                            Taxable
                                                    </label>
                                                </div>
                                                <div className="col-2 form-check ml-3" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="false"   name="taxable" id="tax exempt" onChange={this.changeHandler}/>
                                                    <label className="form-check-label" for="tax exempt" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Tax Exempt
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Payment Terms</label>
                                                <div className="col-10">
                                                    <select className="form-control"  onChange={this.changeHandler} name="pay">
                                                            <option value={this.state.pa[0]}>Net 15</option>
                                                            <option value={this.state.pa[1]}>Net 30</option>
                                                            <option value={this.state.pa[2]}>Net 45</option>
                                                            <option value={this.state.pa[3]}>Net 60</option>
                                                            <option value={this.state.pa[4]}>Due end of month</option>
                                                            <option value={this.state.pa[5]}>Due end of next month</option>
                                                            <option value={this.state.pa[6]}>Due on receipt</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Facebook</label>
                                                <div className="col-10 input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <i className="input-group-text fab fa-facebook-square" style={{fontSize:'16px',color:'blue'}}></i>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={this.changeHandler} name="facebook_profile" />
                                                </div>
                                                <p style={{marginLeft:'185px',fontSize:'14px'}}>https://www.facebook.com/</p>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Twitter</label>
                                                <div className="col-10 input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <i className="input-group-text fab fa-twitter-square" style={{fontSize:'16px',color:'#17a2b8'}}></i>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={this.changeHandler} name="twitter_profile" />
                                                </div>
                                                <p style={{marginLeft:'185px',fontSize:'14px'}}>https://www.twitter.com/</p>
                                            </div>
                                        </div>
                                        <div className={this.state.addres ? "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label" style={{fontSize:'18px'}}>User Address</label>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Address</label>
                                                <div className="col-10">
                                                    <textarea className="form-control mt-4"  onChange={this.addresschangeHandler} name="shipping_add"></textarea>
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>City</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="shipping_city" />
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>State</label>
                                                <div className="col-10">
                                                    <select className="form-control mt-3" onChange={this.addresschangeHandler} name="shipping_state">
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
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Zip Code</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="shipping_zip_code" />
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Country</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="shipping_country" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.remark ?  "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Remarks</label>
                                                <div className="col-10">
                                                    <textarea className="form-control" onChange={this.changeHandler} name="remarks"></textarea>
                                                </div>
                                            </div>
                                        </div>
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
