import React, { Component } from 'react'


export class Gallery extends Component {
    render() {
        return (
            <div className="container-fluid col-sm" style={{display:"inline-flex"}}>
                <div className="media col-sm-4 container-fluid border" style={{margin:'10px', backgroundColor:"#ffffff"}}>
                    <div style={{marginTop:"15px", marginBottom:"15px"}}>
                        <div className="media-body" style={{padding:'5px',textAlign:"center"}}>
                            <h4 className="display-5">Our beachside resort</h4>
                        </div>
                        <img src="./slides/ph-carousel-1.jpg" alt="beach" className='mr-3 img-thumbnail img-fluid float-left' />
                    </div>
                </div>

                <div className="media col-sm-4 container-fluid border" style={{margin:'10px', backgroundColor:"#ffffff"}}>
                    <div style={{marginTop:"15px", marginBottom:"15px"}}>
                        <div className="media-body" style={{padding:'5px',textAlign:"center"}}>
                            <h4 className="display-5">One of our 5 star award winning hotel rooms</h4>
                        </div>
                        <img src="./slides/ph-carousel-3.jpg" alt="hotel room" className='mr-3 img-thumbnail img-fluid float-left' />
                    </div>
                </div>

                <div className="media col-sm-4 container-fluid border" style={{margin:'10px', backgroundColor:"#ffffff"}}>
                    <div style={{marginTop:"15px", marginBottom:"15px"}}>
                        <div className="media-body" style={{padding:'5px',textAlign:"center"}}>
                            <h4 className="display-5">Roberto</h4>
                        </div>
                        <img src="./items/cfo.jpg" alt="Roberto" className='mr-5 img-thumbnail img-fluid float-left' style={{height:"55vh"}}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default Gallery
