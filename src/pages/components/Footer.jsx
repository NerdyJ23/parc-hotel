import React, { Component } from 'react'
import $ from 'jquery'
export class Footer extends Component {
    
    componentDidMount()
    {
        $("#footer div").css("color","white");
        $("#footer div").css("text-align","center");
    }
    render() {

        return (
            <nav id="footer" className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginTop:"15px"}}>
                <div className="col"> 
                    Term of Service<br/>
                    Privacy Policy<br/>
                    Contact Us<br/>
                    Careers<br/>
                    Sitemap<br/>
                </div>
                <div className="col">
                    Apartments<br/>
                    Facilities<br/>
                    Parc Vue Social<br/>
                    Business Travel<br/>
                    Long Stay           <br/>     
                </div>
                <div className="col">
                    
                </div>
                <div className="col-sm-3">
                    <i>Made in a panicked rushhhh help plz <br /><sub>also heck you made me like react now wtf</sub></i>
                </div>
            </nav>
            
            
            

        )
    }
}

export default Footer
