import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bantuan 3D Printed Face Shield Kepada Tenaga Medis Indonesia<br/><span>April 2020</span></h2>
                        <p>Recently, I was working on personal protective equipment (PPE) designs and have been producing 3D-
                          printed face shields since the Covid-19 pandemic became an emergency in Indonesia. Throughout the
                          process, my team has improved the production process by implementing design and process optimization.
                          We halved the time and material consumption by creating a face shield design that can be 3D-printed
                          using Fused Deposition Modeling / Fused Filament Fabrication (FDM/FFF) style 3D printers at high speed
                          without sacrificing much of the build quality and functionality. With the support from Maranatha Christian
                          University, we have produced over 5000 face shields in less than 4 weeks and have distributed our face
                          shields to clinics, hospitals, and institutions across Indonesia.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>M.A.T Flash Hexacopter<br/><span>Oktober 2019</span></h2>
                          <p>
                          This is a hexacopter robot used by the Maranatha Aerial Team in KRTI 2019.
                          In the process of designing the robot, I used Autodesk Fusion 360 to
                          create the 3D model of the robot and applied several methods to
                          the design such as structural analysis and shape optimization to estimate the effect of loads on the
                          airframe and determining which regions of the components are to be optimized. I also improved the
                          topology of the airframe structural components like the main body, mounts, and landing gear to
                          accommodate successful manufacturing using 3D printing and CNC routing.
                          </p>
                          <img src="url(/images/drone.png)" style={{height:"300px"}} alt="none" />
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Pengabdian Kepada Masyarakat: Investigasi Kerusakan Pasca Kebakaran Vihara Satya Budhi Menggunakan UAV</h2>
                        <p>One of a community services conducted by Maranatha Christian University.
                          Applied UAV technology and 3D photogrammetry to investigate the
                          damage caused by fire in Satya Budhi Temple.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
