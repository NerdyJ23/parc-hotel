import React, { Component } from 'react'


export class Item extends Component {
    render() {
        return (
                <div className="media col-md-5 col-lg-5 container-fluid border" style={{margin:'10px', backgroundColor:"#ffffff"}}>
                    <div style={{marginTop:"15px", marginBottom:"15px"}}>
                        <img src={this.props.icon} alt={this.props.name} className='mr-3 img-thumbnail img-fluid float-left w-50' />
                        <div className="media-body" style={{padding:'5px'}}>
                            <h4>{this.props.name}</h4>
                            <span>${this.props.price}</span><br /><br />
                            <span><em>{this.props.desc}</em></span><br /><br />
                            <button type="button" className="btn btn-lg float-right" onClick={() => this.props.buyItem(this.props.id)} style={{position:"relative", marginBottom:"10px"}}>Buy</button>
                        </div>
                    </div>
                </div>
            
            
            
        )
    }
}

export default Item
