import React, { Component } from 'react';

class suppliersform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            other:false,
            address:false,
            contact:false,
            remarks:false
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
    togglecontact = () => {
        if(this.state.other)
            this.setState({other : !this.state.other})
        if(this.state.address)
            this.setState({address:!this.state.address})
        if(!this.state.contact)
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
    render() {
        return (
        <div>
            <section className='content'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-info">
                                <div className="card-header">
                                    <h3 className="card-title" style={{fontSize:'20px'}}>New Supplier</h3>
                                </div>
                                <form className="form-horizontal">
                                    <div className="card-body">
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Primary Contact</label>
                                            <div className="col-sm-3">
                                                <select className="form-control"  >
                                                        <option value="Dr.">Dr.</option>
                                                        <option value="Mr.">Mr.</option>
                                                        <option value="Mrs.">Mrs.</option>
                                                        <option value="Ms.">Ms.</option>
                                                        <option value="Miss.">Miss.</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <input type="text" className="form-control" id="inputName" placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-3">
                                                <input type="text" className="form-control" id="inputName" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Company Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control"   />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label  className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Supplier Display Name</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control mt-2"   />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Supplier Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control"  />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Supplier Phone</label>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control"  placeholder="Work Phone" />
                                            </div>
                                            <div className="col-sm-5">
                                                <input type="text" className="form-control" placeholder="Mobile" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Website</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <hr />
                                        <button type="button" className="btn btn-outline-info" onClick={this.otherdetail}>Other Details</button>
                                        <button type="button" className="btn btn-outline-info ml-3" onClick={this.toggleaddress}>Address</button>
                                        <button type="button" className="btn btn-outline-info ml-3" onClick={this.togglecontact}>Contact Person</button>
                                        <button type="button" className="btn btn-outline-info ml-3" onClick={this.toggleremarks}>Remarks</button>
                                        <hr />
                                        <div className={this.state.other ?  "col-sm-12" : 'none' }>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>GST Treatment</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control" defaultValue="Select a GST Treatment" >
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
                                                <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Source of Supply</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control" defaultValue="Select a GST Treatment" >
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
                                                    <input className="form-check-input" type="radio" value="taxable"  name="type" id="taxable" />
                                                    <label className="form-check-label " for="taxable" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                            Taxable
                                                    </label>
                                                </div>
                                                <div className="col-2 form-check ml-3" style={{marginTop:'10px'}}>
                                                    <input className="form-check-input" type="radio" value="tax exempt"   name="type" id="tax exempt" />
                                                    <label className="form-check-label" for="tax exempt" style={{fontWeight:'bold',fontSize:'17px'}}>
                                                        Tax Exempt
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Payment Terms</label>
                                                <div className="col-10">
                                                    <select className="form-control"  >
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
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <p style={{marginLeft:'185px',fontSize:'14px'}}>https://www.facebook.com/</p>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Twitter</label>
                                                <div className="col-10 input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <i className="input-group-text fab fa-twitter-square" style={{fontSize:'16px',color:'#17a2b8'}}></i>
                                                    </div>
                                                    <input type="text" className="form-control" />
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
                                                    <textarea className="form-control mt-4" value="Street 1"></textarea>
                                                    <textarea className="form-control mt-3" value="Street 2"></textarea>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Address</label>
                                                <div className="col-3">
                                                    <textarea className="form-control mt-4" value="Street 1"></textarea>
                                                    <textarea className="form-control mt-3" value="Street 2"></textarea>
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>City</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>City</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>State</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>State</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Country</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Country</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Zip Code</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Zip Code</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Phone</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Phone</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Fax</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                                <label className="col-2 col-form-label mt-3" style={{fontSize:'18px'}}>Fax</label>
                                                <div className="col-3">
                                                    <input type="text" className="form-control mt-3" />
                                                </div>
                                                <div className="col-1"></div>
                                            </div>
                                        </div>
                                        <div className={this.state.remarks ?  "col-sm-12" : 'none'}>
                                            <div className="form-group row">
                                                <label className="col-2 col-form-label" style={{fontSize:'20px'}}>Remarks</label>
                                                <div className="col-10">
                                                    <textarea className="form-control"></textarea>
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
        </div>
        );
    }
}

export default suppliersform;
