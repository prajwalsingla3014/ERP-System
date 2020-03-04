import React ,{Component} from 'react'
export default class customerdetail extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'Suresh Goel',
            email:'xyz@gmail.com',
            address:'Noida',
            phone:9899234103,
            disable:true
        }
        this.editInfo=this.editInfo.bind(this);
        this.nameChange=this.nameChange.bind(this);
        this.saveInfo=this.saveInfo.bind(this);

    }
    editInfo()
    {
        this.setState({
            disable:!this.state.disable
        })
    }
    nameChange(event)
    {
        this.setState({
            name:event.target.value
        })
    }
    emailChange(event)
    {
        this.setState({
            email:event.target.value
        })
    }
    addressChange(event)
    {
        this.setState({
            address:event.target.value
        })
    }
    contactChange(event)
    {
        this.setState({
            contact:event.target.value
        })
    }
    saveInfo(event)
    {
        event.preventDefault();
        console.log("Prevented")
        this.setState({
            name:this.state.name,
            email:this.state.email
        })
    }
    render()
    {
        return (
                <div>
                    <section className="content">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={this.props.cancelHandler}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="card card-info card-outline">
                                            <div className="card-body box-profile">
                                                <h3 className="profile-username">{this.props.customer.name}</h3>
                                            </div>
                                        </div>
                                        <div className="card card-info card-outline">
                                            <div className="card-body">
                                                <h4><i className="fas fa-boxes mr-3 " style={{fontSize:'23px'}}></i> Orders</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card card-info card-outline">
                                            <div className="card-header">
                                                <h3 className="card-title text-muted" style={{fontSize:'25px'}}>General Information</h3>
                                                <button type="button" className="btn btn-outline-success float-right" onClick={this.editInfo}>Edit</button>
                                            </div>
                                            <form className="form-horizontal">
                                                <div className="card-body">
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label" style={{fontSize:'20px'}}>Name</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputName" value={this.props.customer.name} onChange={this.nameChange} disabled={this.state.disable}></input>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label" style={{fontSize:'20px'}}>Email</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputEmail" value={this.props.customer.email} onChange={this.emailChange} disabled={this.state.disable}></input>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label" style={{fontSize:'20px'}}>Address</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputAddress" value={this.props.customer.city} onChange={this.addressChange} disabled={this.state.disable}></input>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-sm-3 col-form-label" style={{fontSize:'20px'}}>Contact</label>
                                                        <div className="col-sm-9">
                                                            <input type="text" className="form-control" id="inputNumber" value={this.props.customer.contact} onChange={this.contactChange} disabled={this.state.disable}></input>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-success" type="submit" onClick={this.saveInfo}>Save</button>
                                                    <button className="btn btn-outline-danger float-right" type="submit">Cancel</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
