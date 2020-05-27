import React from 'react'

function Footer() {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <a href="https://www.linkedin.com/company/farziengineer/" target="_blank"><i className="fab fa-linkedin ml-5 mt-3" style={{fontSize:'18px',color:'#021132'}}></i></a>
                    <a href="https://www.facebook.com/gappydevelopers/?hc_ref=ARTND4myPZZxderMnxus7ciBtRaLPPHM4wiIcOc8WQfm5YzKKmTF7cWU31EHqF8v0EI&fref=nf&__tn__=kC-R" target="_blank"><i className="fab fa-facebook ml-5" style={{fontSize:'18px',color:'#021132'}}></i></a>
                    <a href="https://twitter.com/EngineerFarzi" target="_blank"><i className="fab fa-twitter ml-5"  style={{fontSize:'18px',color:'#021132'}}></i></a>
                    <a href="https://in.pinterest.com/Farzi_Engineer/" target="_blank"><i className="fab fa-pinterest-square ml-5" style={{fontSize:'18px',color:'#021132'}}></i></a>
                </div>
                <div className="col-4">
                    <h6 className="mt-3" style={{fontFamily:'Acme',fontSize:'18px',textAlign:'center',color:'#021132'}}>Copyright <i className="far fa-copyright" ></i> FarziEngineer Pvt. Ltd</h6>
                </div>
                <div className="col-4">
                    <h6  style={{fontFamily:'Acme',fontSize:'18px',marginLeft:'140px',color:'#021132'}}>Helpline - 1800 102 5671</h6>
                    <h6 style={{fontFamily:'Acme',fontSize:'13px',marginTop:'0px',marginLeft:'160px',color:'#021132'}}>Mon-Sat 9:00AM - 7:00PM</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
