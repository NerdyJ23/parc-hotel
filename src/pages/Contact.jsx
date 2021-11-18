import React, { Component } from 'react'

export class Contact extends Component {
    state = {

    }
    send()
    {
        window.alert("message sent");
    }
    render() {
        return (
            <div className="container-fluid form">
                <div className="col-md-4" style={{padding:'15px', display:"inline-grid"}}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="emailAddr" placeholder="name@example.com" />
                    </div> <br />
                    <div className="form-group" >
                        <label>First Name</label>
                        <input type="text" className="form-control" name="firstname" placeholder="John" />

                    </div>
                    
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lastname" placeholder="Smith" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea style={{height:"25vh"}} className="form-control" name="message" placeholder="cool site" />
                    </div>

                    <button type="button" className="btn" onClick={this.send}> Send </button>
                </div>
                <div className="col-md-8" style={{display:"inline-grid"}}>
                    <p>Parc Hotel is located at 1091 Plenty Rd Bundoora. If you would like more information about our serviced apartments or to book accommodation for an upcoming stay, please contact us today.​</p>
                    <br />
                    <div className="container-fluid">
                        <iframe title="Parc Hotel Map" style={{border: "0",height:"50vh"}} width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.4411064282053!2d145.04728205098087!3d-37.709322735748245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad648aacc4f75ad%3A0xeb5930b5d7f2964a!2sParc!5e0!3m2!1sen!2sau!4v1631832537423!5m2!1sen!2sau" allowFullScreen="" loading="lazy"></iframe>
                    </div> <br />
                </div>
            </div>
            
        )
    }
}

export default Contact
