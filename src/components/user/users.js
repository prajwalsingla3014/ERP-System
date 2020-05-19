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
                                            <label className="col-sm-2 col-form-label" style={{fontSize:'18px'}}>Company Name</label> 
                                            <div className="col-sm-10">
                                                <input type="text" name="company_name" className="form-control" onChange={this.changeHandler} />
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
