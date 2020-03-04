import React, { PureComponent } from 'react'

class Invoicesmall extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        console.log(this.props.invoice[0]);
        return (
            <div>
                <section className="content">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-5">
                                    <h6 style={{fontSize:'15px'}}>{this.props.invoice.name}</h6>
                                </div>
                                <div className="col-4" style={{marginLeft:'80px'}}>
                                    <h6>Rs {this.props.invoice.amount}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px',color:'#25b0b9'}}>{this.props.invoice.no}</h6>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px'}}>{this.props.invoice.date}</h6>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px'}}>{this.props.invoice.orderno}</h6>
                                </div>
                            </div>
                            {/*<hr style={{color:'black'}}></hr>
                            <div className="row">
                                <div className="col-5">
                                    <h6 style={{fontSize:'15px'}}>{this.props.invoice.name}</h6>
                                </div>
                                <div className="col-4" style={{marginLeft:'80px'}}>
                                    <h6>Rs 60000</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px',color:'#25b0b9'}}>00002</h6>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px'}}>04/02/2020</h6>
                                </div>
                                <div className="col-4">
                                    <h6 style={{fontSize:'15px'}}>78550</h6>
                                </div>
        </div>*/}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Invoicesmall