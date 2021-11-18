import React, { Component } from 'react'

export class Person extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="container-flex col-sm-3" style={{display:"inline-grid"}}>
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={this.props.icon} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name} - {this.props.title}</h5>
                            <p className="card-text">{this.props.blurb}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Person
