import React, { Component } from 'react'
export default class Contact extends Component {
  render() {
    return(
      <section data-section="contact">
        <div className="js-fullheight">
          <div className = "text-center">
            <h1 style={{color: "black", font: "Playfair Display ,Georgia, serif"}}>Let's Get in Touch</h1>
            <div className = "card">
              <p>Email address: vincentutama@gmail.com</p>
              <button href="https://github.com/vincentutama" target="_blank" rel="noopener noreferrer" className = "btn btn-primary-dark"><i className="icon-github"/>GitHub</button>
              <button href="https://linkedin.com/in/vincentutama" target="_blank" rel="noopener noreferrer" className = "btn btn-primary-dark"><i className="icon-linkedin2"/>Linkedin Profile</button>
            </div>
            <img src="images/bmo.gif" className="text-center" alt=""></img>
          </div>
        </div>
      </section>
    )
  }
}