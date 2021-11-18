import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import $ from 'jquery';

import itemList from './itemlist';//the items in the store are kept here to reduce bloating the App.js file

import Contact from './pages/Contact';
import Main from './pages/Main';
import News from './pages/News';
import Gallery from './pages/Gallery';
import CartPage from './pages/Cart';
import About from './pages/About';
import Footer from './pages/components/Footer';
import Item from './pages/components/Item';
import Toolbar from './pages/components/Toolbar';
class App extends Component {

  constructor(props)
  {
    super(props);
    console.log(itemList);
    this.addToCart = this.addToCart.bind(this);
    this.loadStore = this.loadStore.bind(this);
    $("#root").css("background-color","#faf7eb");
  }
  state = {
    cart:
    {
        count: 0,
        items: []
    },
    products : itemList.items
  }

  loadStore = () => //loads the items
  {
    var rows = [];
    //console.log("is this even working?");
    for(let i = 0; i < this.state.products.length; i++) //output an Item for each item in products
    {
      rows.push(<Item name={this.state.products[i].name} price={this.state.products[i].price} key={this.state.products[i].id} id={this.state.products[i].id} desc={this.state.products[i].desc} buyItem={this.addToCart} icon={'./items/' + this.state.products[i].icon}/>);
    }
    //this.state.prices.map((p) => (rows.push(<Item price={p} />)));
    console.log(rows);
    return rows;
  }
  addToCart = (i) => //add item to cart
  {
    for(let a in this.state.cart.items)
    {
      if(this.state.cart.items[a].id === i)//if already exists in cart
      {
        console.log("dupe found");
        let oldState = this.state.cart;
        oldState.items[a].count = oldState.items[a].count+ 1; //add one to count
        oldState.count = oldState.count + 1;
        this.setState({cart:oldState}); //set the state to save it
        return; // exit loop safely
      }

    }
    console.log(i);
    for(const a in this.state.products)
    {
      if(this.state.products[a].id === i)//if it's a match
      {
        console.log("works");
        var toSend = this.state.products[a];
        toSend.count = 1;
        console.log(`before : ${this.state.cart.count}`);
        let oldState = this.state.cart;
        oldState.items.push(toSend);
        oldState.count = oldState.count + 1;
        this.setState(
          {
            cart:oldState
          }
          
        );
        console.log(`after mod: ${this.state.cart.count}`);
        return;
      }
    }

  }
  
  modifyItemCount = (id,amount) => //modify item count from id by amount
  {
    for(let a in this.state.cart.items)
    {
      console.log(`is ${a} === ${id}?`);
      if(this.state.cart.items[a].id === id) //if finds item
      {
        let oldState = this.state.cart;
        oldState.items[a].count = oldState.items[a].count + amount; //mod count by amount
        if(oldState.items[a].count <= 0)
          oldState.items.splice(a,1); //if 0 or less delete item

        oldState.count = oldState.count + amount;
        this.setState({cart:oldState}); //save state
        return;
      }
    }
  }

  render(){
    return (
      <React.Fragment>
        <Router>
          <Toolbar count={this.state.cart.count}/>
          <br /> <br /> <br />
          <Switch>
              <Route exact path="/" component={() => <Main addToCart={this.addToCart} loadStore={this.loadStore} items={this.state.products} />} />
              <Route path="/news" component={News} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About}/>
              <Route path="/cart" component={() => <CartPage cart={this.state.cart.items} modifyCart={this.modifyItemCount} />} />
          </Switch>
          <Footer />
        </Router>

      </React.Fragment>
    );
  }
}

export default App;