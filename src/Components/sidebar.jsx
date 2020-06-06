import React, { Component } from 'react'
const fullName = "Vincent Utama";
const jobName = "Electrical Engineering Student";
const jobPlace = "Maranatha Christian University"
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">{fullName}</a></h1>
              <span className="position">{jobName}<br/>{jobPlace}</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#activities" data-nav-section="activities">Activities</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Tugas Individu Pemrograman Web 2020<br></br>
                  Dosen: Agus Prijono 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}