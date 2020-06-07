import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage:"url(images/photogram.jpg)"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className=" js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div>
                          <h1 style={{color:"#ffbb00"}}><small style={{color:"#FFFFFF"}} >Hi, my name is</small><br/> Vincent Utama.<br/><small style={{color:"#FFFFFF"}}>I fly drones, build robots and 3D print stuffs.</small></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1EfkiF6VN-ejak4T8JClo2BOPk9lgre5N/view?usp=sharing" target="_blank" rel="noopener noreferrer">Check out my CV <i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}