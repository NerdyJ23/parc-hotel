import React, { Component } from 'react'

export class Shop extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center flex-row col-lg-12" style={{marginLeft: "0px"}}>
                    {this.props.loadStore()}
                </div><br />
                
            </div>
        )
    }
}

export default Shop
