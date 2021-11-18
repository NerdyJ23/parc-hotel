import React, { Component } from 'react'

export class News extends Component {
    render() {
        return (
            <React.Fragment>
                <h2 className="display-2" style={{textAlign:"center"}}>News</h2>

                <div className="container-fluid col-sm-8 border" style={{backgroundColor:"white",marginBottom:"10px"}}>
                    <div className="panel panel-default">
                        <div className="panel-header">
                            <h3> Parc Hotel wins best hotel 2015 award</h3>
                            <em><sub><span>John Smith</span>    1/1/2015</sub></em>
                        </div>
                        <div className="panel-body" style={{paddingBottom:"10px"}}>
                            <br /><br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab numquam voluptas modi tenetur? Ex alias est sed aliquam optio architecto minima blanditiis aspernatur pariatur, dolores dignissimos ipsam, cum, veritatis aut.
                            </div>
                    </div>
                </div>
                
                <div className="container-fluid col-sm-8 border" style={{backgroundColor:"white"}}>
                    <div className="panel panel-default">
                        <div className="panel-header">
                            <h3> Parc Hotel opens for business</h3>
                            <em><sub><span>John Smith</span>    1/1/2011</sub></em>
                        </div>
                        <div className="panel-body" style={{paddingBottom:"10px"}}>
                            <br /><br />
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab numquam voluptas modi tenetur? Ex alias est sed aliquam optio architecto minima blanditiis aspernatur pariatur, dolores dignissimos ipsam, cum, veritatis aut.
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default News