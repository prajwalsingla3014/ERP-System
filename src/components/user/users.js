import React, { Component } from 'react'

export default class users extends Component {
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
                                            <label className="col-2 col-form-label" style={{fontSize:'18px'}}>Address</label>
                                            <div className="col-10">
                                                    <textarea className="form-control"  onChange={this.addresschangeHandler} name="shipping_add"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>City</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" name="city" onChange={this.changeHandler} />
                                            </div>
                                        </div> 
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>State</label>
                                            <div className="col-10">
                                                    <select className="form-control" onChange={this.addresschangeHandler} name="billing_state">
                                                        <option>[AN] - Andaman and Nicobar Islands </option>
                                                        <option>[AD] - Andhra Pradesh</option>
                                                        <option>[AR] - Arunachal Pradesh</option>
                                                        <option>[AS] - Assam</option>
                                                        <option>[BR] - Bihar</option>
                                                        <option>[CH] - Chandigarh</option>
                                                        <option>[CG] - Chhattisgarh</option>
                                                        <option>[DN] - Dadra and Nagar Haveli</option>
                                                        <option>[DD] - Daman and Diu</option>
                                                        <option>[DL] - Delhi</option>
                                                        <option>[GA] - Goa</option>
                                                        <option>[GJ] - Gujarat</option>
                                                        <option>[HR] - Haryana</option>
                                                        <option>[HP] - Himachal Pradesh</option>
                                                        <option>[JK] - Jammu and Kashmir</option>
                                                        <option>[JH] - Jharkhand</option>
                                                        <option>[KA] - Karnataka</option>
                                                        <option>[KL] - Kerala</option>
                                                        <option>[LA] - Ladakh</option>
                                                        <option>[LD] - Lakshadweep</option>
                                                        <option>[MP] - Madhya Pradesh</option>
                                                        <option>[MH] - Maharashtra</option>
                                                        <option>[MN] - Manipur</option>
                                                        <option>[ML] - Meghalaya</option>
                                                        <option>[MZ] - Mizoram</option>
                                                        <option>[NL] - Nagaland</option>
                                                        <option>[OD] - Odisha</option>
                                                        <option>[PY] - Puducherry</option>
                                                        <option>[PB] - Punjab</option>
                                                        <option>[RJ] - Rajasthan</option>
                                                        <option>[SK] - Sikkim</option>
                                                        <option>[TN] - Tamil Nadu</option>
                                                        <option>[TS] - Telangana</option>
                                                        <option>[TR] - Tripura</option>
                                                        <option>[UP] - Uttar Pradesh</option>
                                                        <option>[UK] - Uttarakhand</option>
                                                        <option>[WB] - West Bengal</option>
                                                    </select>
                                                </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Zip Code</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" onChange={this.changeHandler} />
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
