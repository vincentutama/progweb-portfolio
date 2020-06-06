import React, { Component } from 'react'

export default class boutCards extends Component{
  render(){
    return(
    <div>
        <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
            <div className="services color-1">
                <span className="icon2"><i className="icon-bulb"></i></span>
                <h3>Graphic Design</h3>
            </div>
        </div>
        <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
            <div className="services color-2">
                <span className="icon2"><i className="icon-globe-outline"></i></span>
            <h3>Web Design</h3>
            </div>
        </div>
        <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
            <div className="services color-3">
                <span className="icon2"><i className="icon-data"></i></span>
            <h3>Software</h3>
            </div>
        </div>
        <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
            <div className="services color-4">
                <span className="icon2"><i className="icon-phone3"></i></span>
            <h3>Application</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="hire">
                <h2>Check out my latest activity! <br/>"Maranatha Produksi Face Shield 3D Printing untuk Donasi APD Tim Medis"</h2>
                <a href="http://news.maranatha.edu/maranatha-produksi-face-shield-3d-printing-untuk-donasi-apd-tim-medis/" className="btn-hire" target="_blank" rel="noopener noreferrer">Click Here</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}