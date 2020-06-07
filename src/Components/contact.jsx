import React, { Component } from 'react'
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'', email:'', keterangan:''};
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  handleKeteranganChange = (event) => {
    this.setState({keterangan: event.target.value});
  }

  postContact = (event) =>{
    event.preventDefault();
    if(this.state.name !== '' && this.state.email !== '' && this.state.keterangan !== '') {
      fetch('https://vincent-porto-api.herokuapp.com/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama: this.state.name,
          email: this.state.email,
          keterangan: this.state.keterangan
        })
      })
      this.setState({name:'', email:'', keterangan:''});
   }
  }
  render() {
    return(
      <section data-section="contact">
        <div className="js-fullheight container">
          <div className = "text-center">
            <h1 style={{color: "black", font: "Playfair Display ,Georgia, serif"}}>Let's Get in Touch</h1>
            <div>
              <p>Email address: vincentutama@gmail.com</p>
              <button href="https://github.com/vincentutama" target="_blank" rel="noopener noreferrer" className = "btn btn-primary-dark"><i className="icon-github"/>GitHub</button>
              <button href="https://linkedin.com/in/vincentutama" target="_blank" rel="noopener noreferrer" className = "btn btn-primary-dark"><i className="icon-linkedin2"/>Linkedin Profile</button>
            </div>
            <div style = {{display:'flex'}}>
              <div style={{width:'17.5%', paddingLeft:'2.5%'}}>
                <img src='images/bmo.gif' style={{width:'100%'}}/>
              </div>
              <div style = {{margin:'2rem auto', width:'50%'}}>
                <form onSubmit={this.postContact}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      onChange={this.handleNameChange}
                      value={this.state.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      onChange={this.handleEmailChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name=""
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                      onChange={this.handleKeteranganChange}
                      value={this.state.keterangan}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary-dark"
                      value="Send Message"
                      disabled={!(this.state.name && this.state.email && this.state.keterangan)}
                    />
                  </div>
                </form>
              </div>
              <div style={{width:'17.5%', paddingRight:'2.5%'}}>
                <img src='images/bmo.gif' style={{width:'100%', transform: 'scaleX(-1)'}}/>
              </div>	
            </div>		
          </div>
        </div>
      </section>
    )
  }
}