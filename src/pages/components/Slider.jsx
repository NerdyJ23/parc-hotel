import React, { Component } from 'react'
import $ from 'jquery'

import { Carousel } from 'bootstrap'; //dont listen to it saying we dont need it, need for buttons to go brr
export class Slider extends Component {
    constructor(props)
    {
        super(props);
        this.renderCarouselIndicators = this.renderCarouselIndicators.bind(this);
        this.renderCarouselItems = this.renderCarouselItems.bind(this);
    }
    state=
    {
        slides: ["ph-carousel-4.jpg","ph-carousel-2.jpg","ph-carousel-3.jpg","ph-carousel-1.jpg"],
        path : "./slides/"
    }
    carouselPrev()
    {
        $("#carousel").carousel('prev');
    }
    carouselNext()
    {
        $("#carousel").carousel('next');
    }

    renderCarouselItems()
    {
        let images = [];
        for(let i = 0; i < this.state.slides.length; i++)
        {
            let name = "carousel-item ";
            if(i === 0)
                name += "active";
                
            images.push(<div className={name} key={i}><img src={this.state.path + this.state.slides[i]} className="d-block w-100" alt="Carousel" data-interval="10000" /></div>)
        }
        console.log(images);
        return images;
    }
    renderCarouselIndicators()
    {
        let indicators = [];

        for(let i = 0; i < this.state.slides.length; i++)
        {
            indicators.push(<li key={i} data-slide-to={i}></li>);
        }
        console.log(indicators);
        return indicators;
    }
    render() 
    {
        return (
            <div className="container-fluid col-sm-10" >
                <div id= "carousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {this.renderCarouselIndicators()}
                    </ol>
                    <div className="carousel-inner">
                        {this.renderCarouselItems()}
                    </div>
                    <a href="#sliderPrev" className="carousel-control-prev" role="button" onClick={this.carouselPrev} data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#sliderNext" role="button" onClick={this.carouselNext} data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        
        )
        
    }
}

export default Slider
