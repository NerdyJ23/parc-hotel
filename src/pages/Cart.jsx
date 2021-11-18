import React, { Component } from 'react'
import CartItem from './components/CartItem'

export class Cart extends Component {
    
    constructor(props)
    {
        super(props);
        this.showAll = this.showAll.bind(this);
    }
    showAll()
    {
        if(this.props.cart.length !==0)
            return (this.props.cart.map( (a) => 
            <React.Fragment>
                    <CartItem key={a.id} id={a.id} name={a.name} price={a.price} count={a.count} icon={"./items/"+a.icon} modifyItemCount={this.props.modifyCart}/> <br />
                </React.Fragment>
                ))
        else
        return (<div className="container-fluid col-sm-4 col-xl-12" style={{textAlign:'center', padding:'15px'}}><h4> No items in your cart! :O</h4></div>);
    }
    calculateTotal()
    {
        let total = 0;
        for(let a in this.props.cart)
        {
            
            total += (this.props.cart[a].price * this.props.cart[a].count);
        }
        total = Math.round(total * 100) / 100;
        console.log(total);
        return total;
    }
    checkout()
    {
        alert("checked out successfully!");
        window.location.replace("/");//go back to home page and reload app
    }
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid justify-left">
                    <div className="row justify-content-center flex-row col-lg-12">
                        {this.showAll()}     
                    </div>
                </div>
                
                <div className="container-fluid" style={{textAlign:"right"}}>
                    <h3>{this.props.cart.length > 0 ? " Cart Total: $" + this.calculateTotal() : ""} </h3>
                    <button type="button" className="btn btn-primary" onClick={this.checkout}>Checkout</button>
                </div>
            </React.Fragment>
            
        )
    }
}

export default Cart
