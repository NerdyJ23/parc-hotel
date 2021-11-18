import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery'
import Logo from '../../img/ph-logo_1.png'
import CartIcon from '../../img/icons/cart.png'


export class Toolbar extends Component {

    componentDidMount()
    {
        //https://codepen.io/gearmobile/pen/bByZdG
        $( '.navbar-nav Link' ).on( 'click', function () 
        {
            $( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
            $( this ).parent('li').addClass('active');
        });

    }
    updateLink()//i feel like such a genius with this simple script
    {
        let loc = window.location.pathname.slice(1,window.location.pathname.length);
        //console.log(loc);

        $(".active").removeClass("active");
        if(window.location.pathname === "/")
            $("#home").addClass("active");
        else
            $(`#${loc}`).addClass("active"); 
        
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-collapse-xs navbar-expand-md bg-dark navbar-dark fixed-top" role="navigation"  onClick={this.updateLink}>
                    <div className="container-fluid col-sm-12">
                        <div className="navbar-header">
                            <Link to={"/"} className="navbar-brand">
                                <img src={Logo} alt="Parc Hotel Logo" style={{width:100}} />
                            </Link>
                        </div>
                        
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" id="home" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="news" to={"/news"}>News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="gallery" to={"/gallery"}>Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="contact" to={"/contact"}>Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" id="about" to={"/about"}>About Us</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <ul className="navbar-nav nav">
                                <li>
                                    <Link className="nav-link" id="cart" to={"/cart"}>
                                        <img src={CartIcon} alt="Cart Icon" /> <span className="badge badge-secondary">{this.props.count} </span> Cart
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </nav>
            </div>
        )
    }
}

export default Toolbar
