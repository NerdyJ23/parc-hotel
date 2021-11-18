import React, { Component } from 'react'
import $ from 'jquery'
export class CartItem extends Component {
    constructor(props)
    {
        super(props);
    }
    render() {
        return (
            <div className="row col-md-10 border" id="cart">
                <div className="col-sm-1">
                        <img src={this.props.icon} alt={this.props.name} style={{margin:"5px"}} className='img-thumbnail img-fluid float-left'/>
                    </div>
                        
                    <div className="col" style={{padding:'5px', height:'95%', position:'inherit'}}>
                        <div class="row">
                            <div className="col-sm">
                                <h5> Item Name</h5><br />
                                {this.props.name}
                            </div>
                            <div className="col">
                                <h5>Price</h5> <br />
                                ${this.props.price}
                            </div>
                            <div className="col container" style={{display:"inline-flex"}}>
                                
                                <button type="button" className="btn btn-secondary" style={{padding:"10px"}} onClick={() =>this.props.modifyItemCount(this.props.id,-1)}>&nbsp;-&nbsp;</button>
                                <span type="text" style={{padding:"15px", backgroundColor:"#d0ccbf"}}>{this.props.count}</span>
                                <button type="button" className="btn btn-secondary" style={{padding:"10px"}} onClick={() =>this.props.modifyItemCount(this.props.id, 1)}>+</button>

                            </div>
                            <div className="col">
                                <h5>Total Price</h5>
                                ${Math.round((this.props.price * this.props.count) * 100) / 100}
                            </div>
                            <span> <button type="button" className="btn btn-primary" onClick={() =>this.props.modifyItemCount(this.props.id, -1 * this.props.count)}>Remove Item</button></span>    
                        </div>
                    </div>
            </div>
                    
        )
    }
}

export default CartItem
