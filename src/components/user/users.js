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
            type:' ',
            salutation:' ',
            first_name:' ',
            last_name:' ',
            company_name:' ',
            display_name:' ',
            email:' ',
            phone:' ',
            mobile:' ',
            website:' ',
            facebook_profile:' ',
            twitter_profile:' ',
            remarks:' ',
            gst_no:' ',
            payment_details:{
                gst_treatment:' ',
                place_of_supply:' ',
                shipping_address:{
                   shipping_add:' ',
                   shipping_city:' ',
                   shipping_zip_code:' ',
                   shipping_state:' ',
                   shipping_country:' ',
                   address:' ',
                   city:' ',
                   zip_code:' ',
                   country:' ',
                   state:[],
                },
                billing_address:{
                   billing_add:' ',
                   billing_city:' ',
                   billing_zip_code:' ',
                   billing_state:' ',
                   billing_country:' ',
                   address:' ',
                   city:' ',
                   zip_code:' ',
                   country:' ',
                   state:[],
                },
                taxable:' ',
                payment_terms:' '
            },
            supply:' ',
            pay:' ',
            gst:' ',
            industry:' ',
            in:[],
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
    changeHandler = (e) => {
        const {payment_details}= {...this.state};
        const currentState=payment_details;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({[e.target.name]: e.target.value ,payment_details:currentState})
    }
    addresschangeHandler = (e) => {
        const {billing_address}={...(this.state.payment_details)};
        const currentState2=billing_address;
        const {name,value}=e.target;
        currentState2[name]=value;
        this.setState({billing_address:currentState2})
    }
    submitHandler = async (e) => {
        e.preventDefault();
        const emp={
            type:this.state.type,
            salutation:this.state.salutation,
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            display_name:this.state.display_name,
            email:this.state.email,
            phone:this.state.phone,
            mobile:this.state.mobile,
            website:this.state.website,
            facebook_profile:this.state.facebook_profile,
            twitter_profile:this.state.twitter_profile,
            remarks:this.state.remarks,
            gst_no:this.state.gst_no,
            industry:this.state.industry,
            company_name:this.state.company_name,
            payment_details:{
                gst_treatment:this.state.gst,
                place_of_supply:this.state.supply,
                payment_terms:this.state.pay,
                billing_address:{
                    address:this.state.payment_details.billing_address.billing_add,
                    city:this.state.payment_details.billing_address.billing_city,
                    zip_code:this.state.payment_details.billing_address.billing_zip_code,
                    state:this.state.payment_details.billing_address.billing_state,
                    country:this.state.payment_details.billing_address.billing_country
                },
                shipping_address:{
                    address:this.state.payment_details.shipping_address.shipping_add,
                    city:this.state.payment_details.shipping_address.shipping_city,
                    zip_code:this.state.payment_details.shipping_address.shipping_zip_code,
                    state:this.state.payment_details.shipping_address.shipping_state,
                    country:this.state.payment_details.shipping_address.shipping_country
                },
                taxable:this.state.payment_details.taxable
            }
        }
        console.log(emp)
        await axios.post("https://farzi-erp.herokuapp.com/persons_manager/employee/",emp)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    async componentDidMount()
    {
        await axios.get("https://farzi-erp.herokuapp.com/shared/industry/?ordering=created_at")
            .then(res => {
                var t=res.data.length;
                for(var i=0;i<t;i++)
                {
                    var t1=(res.data)[i].id;
                    this.setState({
                        in:[...this.state.in,t1]
                    });
                }
                console.log(res);
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
                            <div className="card card-info" style={{border:'none',boxShadow:'0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)'}}>
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontFamily:'Acme',fontSize:'20px'}}>Client</h3>
                                </div>
                                <form className="form-horizontal"  onSubmit={this.submitHandler}>
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>User Type</label>
                                            <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="business"  name="type" id="business" onChange={this.changeHandler} />
                                                <label className="form-check-label " for="business" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                        Business
                                                </label>
                                            </div>
                                            <div className="col-1 form-check ml-3" style={{marginTop:'10px'}}>
                                                <input className="form-check-input" type="radio" value="individual"   name="type" id="individual" onChange={this.changeHandler}/>
                                                <label className="form-check-label" for="individual" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                       Individual
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Primary Contact</label>
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
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Company Name</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="company_name" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Display Name *</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="display_name" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>GST No</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="gst_no" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Industry *</label>
                                            <div className="col-sm-10">
                                                <select className="form-control" name="industry" onChange={this.changeHandler}>
                                                    <option value={this.state.in[0]}>Agency or Sale House</option>
                                                    <option value={this.state.in[1]}>Agriculture</option>
                                                    <option value={this.state.in[2]}>Art and Design</option>
                                                    <option value={this.state.in[3]}>Automative</option>
                                                    <option value={this.state.in[4]}>Construction</option>
                                                    <option value={this.state.in[5]}>Consulting</option>
                                                    <option value={this.state.in[6]}>Consumer Packaged Goods</option>
                                                    <option value={this.state.in[7]}>Education</option>
                                                    <option value={this.state.in[8]}>Engineering</option>
                                                    <option value={this.state.in[9]}>Entertainment</option>
                                                    <option value={this.state.in[10]}>Financial Services</option>
                                                    <option value={this.state.in[11]}>Food Services</option>
                                                    <option value={this.state.in[12]}>Gaming</option>
                                                    <option value={this.state.in[13]}>Government</option>
                                                    <option value={this.state.in[14]}>Health Care</option>
                                                    <option value={this.state.in[15]}>Interior Design</option>
                                                    <option value={this.state.in[16]}>Internal</option>
                                                    <option value={this.state.in[17]}>Legal</option>
                                                    <option value={this.state.in[18]}>Manufacturing</option>
                                                    <option value={this.state.in[19]}>Marketing</option>
                                                    <option value={this.state.in[20]}>Mining and Logistics</option>
                                                    <option value={this.state.in[21]}>Non-Profit</option>
                                                    <option value={this.state.in[22]}>Publishing and Web Media</option>
                                                    <option value={this.state.in[23]}>Real Estate</option>
                                                    <option value={this.state.in[24]}>Retail</option>
                                                    <option value={this.state.in[25]}>Services</option>
                                                    <option value={this.state.in[26]}>Technology</option>
                                                    <option value={this.state.in[27]}>Telecommunications</option>
                                                    <option value={this.state.in[28]}>Travel</option>
                                                    <option value={this.state.in[29]}>Web Designing</option>
                                                    <option value={this.state.in[30]}>Web Development</option>
                                                    <option value={this.state.in[31]}>Wholesale</option>
                                                    <option value={this.state.in[32]}>Writers</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>User Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" name="email" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>User Phone</label>
                                                <div className="col-sm-5">
                                                    <input type="text" name="phone" className="form-control"  placeholder="Work Phone" onChange={this.changeHandler}/>
                                                </div>
                                                <div className="col-sm-5">
                                                    <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={this.changeHandler}/>
                                                </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Website</label>
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
                                                <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Tax Preference *</label>
                                                <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="true"   name="taxable" id="tax" onChange={this.changeHandler}/>
                                                    <label className="form-check-label " for="taxable" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                            Taxable
                                                    </label>
                                                </div>
                                                <div className="col-2 form-check ml-3" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="false"   name="taxable" id="tax exempt" onChange={this.changeHandler}/>
                                                    <label className="form-check-label" for="tax exempt" style={{fontWeight:'bold',fontSize:'18px',fontFamily:'Acme'}}>
                                                        Tax Exempt
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Payment Terms</label>
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
                                                <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Facebook</label>
                                                <div className="col-10 input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <i className="input-group-text fab fa-facebook-square" style={{fontSize:'16px',color:'blue'}}></i>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={this.changeHandler} name="facebook_profile" />
                                                </div>
                                                <p style={{marginLeft:'185px',fontSize:'14px',fontFamily:'Acme'}}>https://www.facebook.com/</p>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Twitter</label>
                                                <div className="col-10 input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <i className="input-group-text fab fa-twitter-square" style={{fontSize:'16px',color:'#17a2b8'}}></i>
                                                    </div>
                                                    <input type="text" className="form-control" onChange={this.changeHandler} name="twitter_profile" />
                                                </div>
                                                <p style={{marginLeft:'185px',fontSize:'14px',fontFamily:'Acme'}}>https://www.twitter.com/</p>
                                            </div>
                                        </div>
                                        <div className={this.state.addres ? "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label" style={{fontSize:'22px',fontFamily:'Acme'}}>User Address</label>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Address</label>
                                                <div className="col-10">
                                                    <textarea className="form-control mt-4"  onChange={this.addresschangeHandler} name="billing_add"></textarea>
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>City</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="billing_city" />
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>State</label>
                                                <div className="col-10">
                                                    <select className="form-control mt-3" onChange={this.addresschangeHandler} name="billing_state">
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
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Zip Code</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="billing_zip_code" />
                                                </div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'20px',fontFamily:'Acme'}}>Country</label>
                                                <div className="col-10">
                                                    <input type="text" className="form-control mt-3" onChange={this.addresschangeHandler} name="billing_country" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={this.state.remark ?  "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px',fontFamily:'Acme'}}>Remarks</label>
                                                <div className="col-10">
                                                    <textarea className="form-control" onChange={this.changeHandler} name="remarks"></textarea>
                                                </div>
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
