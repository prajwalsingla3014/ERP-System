import React, { Component } from 'react'
import "../invoice/invoicenone.css";
export default class customersform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             other:true,
             address:false,
             contact:false,
             remarks:false,
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
             payment_details:{
                 gst_treatment:' ',
                 place_of_supply:' ',
                 shipping_address:' ',
                 billing_address:' ',
                 taxable:' ',
                 payment_terms:' '
             }

        }
    }
    
    otherdetail = () => {
        if(!this.state.other)
            this.setState({other : !this.state.other})
        if(this.state.address)
            this.setState({address:!this.state.address})
        if(this.state.contact)
            this.setState({contact: !this.state.contact})
        if(this.state.remarks)
            this.setState({remarks : !this.state.remarks})

    }
    toggleaddress = () => {
        if(this.state.other)
            this.setState({other : !this.state.other})
        if(!this.state.address)
            this.setState({address:!this.state.address})
        if(this.state.contact)
            this.setState({contact: !this.state.contact})
        if(this.state.remarks)
            this.setState({remarks : !this.state.remarks})
        
    }
    toggleremarks= () => {
        if(this.state.other)
            this.setState({other : !this.state.other})
        if(this.state.address)
            this.setState({address:!this.state.address})
        if(this.state.contact)
            this.setState({contact: !this.state.contact})
        if(!this.state.remarks)
            this.setState({remarks : !this.state.remarks})
        
    }
    changeHandler = (e) => {
        const {payment_details}={...this.state};
        const currentState=payment_details;
        const {name,value}=e.target;
        currentState[name]=value;
        this.setState({[e.target.name]: e.target.value ,payment_details:currentState})
    }
    render() {
        return (
        <div>
            <section className='content'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-success">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>New Customer</h3>
                                </div>
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Customer Type</label>
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
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Company Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="company_name" className="form-control"  onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Customer Display Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" name="display_name" className="form-control mt-2"  onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Customer Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" name="email" className="form-control" onChange={this.changeHandler} />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Customer Phone</label>
                                            <div className="col-sm-5">
                                                <input type="text" name="phone" className="form-control"  placeholder="Work Phone" onChange={this.changeHandler}/>
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="text" name="mobile" className="form-control" placeholder="Mobile" onChange={this.changeHandler}/>
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
                                        <div className={this.state.other ?  "col-sm-12" : 'none' }>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>GST Treatment</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control" defaultValue="Select a GST Treatment" onChange={this.changeHandler} name="gst_treatment">
                                                            <option value="Registered Business - Composition">Registered Business - Composition </option>
                                                            <option value="Registered Business - Regular">Registered Business - Regular</option>
                                                            <option value="Unregistered Business">Unregistered Business</option>
                                                            <option value="Consumer">Consumer</option>
                                                            <option value="Overseas">Overseas</option>
                                                            <option value="Special Economic Zone">Special Economic Zone</option>
                                                            <option value="Deemed Export">Deemed Export</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Place of Supply</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control" defaultValue="Select a GST Treatment" onChange={this.changeHandler} name="place_of_supply">
                                                            <option value="Registered Business - Composition">Registered Business - Composition </option>
                                                            <option value="Registered Business - Regular">Registered Business - Regular</option>
                                                            <option value="Unregistered Business">Unregistered Business</option>
                                                            <option value="Consumer">Consumer</option>
                                                            <option value="Overseas">Overseas</option>
                                                            <option value="Special Economic Zone">Special Economic Zone</option>
                                                            <option value="Deemed Export">Deemed Export</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Tax Preference</label>
                                                <div className="col-1 form-check ml-1" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="taxable"  name="taxable" id="taxable" onChange={this.changeHandler}/>
                                                    <label className="form-check-label " for="taxable" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                            Taxable
                                                    </label>
                                                </div>
                                                <div className="col-2 form-check ml-3" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="tax exempt"   name="taxable" id="tax exempt" onChange={this.changeHandler}/>
                                                    <label className="form-check-label" for="tax exempt" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Tax Exempt
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Payment Terms</label>
                                                <div className="col-10">
                                                    <select className="form-control"  onChange={this.changeHandler} name="payment_terms">
                                                            <option value="Net 15">Net 15</option>
                                                            <option value="Net 30">Net 30</option>
                                                            <option value="Net 45">Net 45</option>
                                                            <option value="Net 60">Net 60</option>
                                                            <option value="Due end of month">Due end of month</option>
                                                            <option value="Due end of next month">Due end of next month</option>
                                                            <option value="Due on receipt">Due on receipt</option>
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
                                        <div className={this.state.address ? "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-6 col-form-label" style={{fontSize:'18px'}}>Billing Address</label>
                                                <label className="col-6 col-form-label" style={{fontSize:'18px'}}>Shipping Address</label>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Address</label>
                                                <div className="col-3">
                                                    <textarea className="form-control mt-4" value="Street 1" onChange={this.changeHandler} name="billing_address"></textarea>
                                                    <textarea className="form-control mt-3" value="Street 2" onChange={this.changeHandler}></textarea>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Address</label>
                                                <div className="col-3">
                                                    <textarea className="form-control mt-4" value="Street 1" onChange={this.changeHandler} name="shipping_address"></textarea>
                                                    <textarea className="form-control mt-3" value="Street 2" onChange={this.changeHandler}></textarea>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>City</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler}/>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>City</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler}/>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>State</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3"  onChange={this.changeHandler}/>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>State</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Country</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Country</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Zip Code</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Zip Code</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Phone</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Phone</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Fax</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Fax</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" onChange={this.changeHandler} />
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                        <div className={this.state.remarks ?  "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Remarks</label>
                                                <div className="col-10">
                                                    <textarea className="form-control" onChange={this.changeHandler} name="remarks"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-outline-success">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </section>
            {console.log(this.state.first_name)}
            {console.log(this.state.payment_details.gst_treatment)}
        </div>
        )
    }
}

