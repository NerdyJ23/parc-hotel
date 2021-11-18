import React, { Component } from 'react'


import Slider from './components/Slider.jsx';
import Shop from './components/Shop.jsx';

export class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="display-1" style={{textAlign:"center"}}>Parc Hotel</h1>
                <Slider />
                <Shop onPurchase={this.props.addToCart} loadStore={this.props.loadStore} items={this.props.items}/>
            </div>
        )
    }
}

export default Main
