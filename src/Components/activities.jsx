import React, { Component } from 'react'

export default class Activities extends Component {
  render() {
    return(
      <section data-section="activities">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
            <span className="heading-meta">Pengalaman Organisasi dan Tim</span>
            <h2 className="colorlib-heading animate-box">Activities</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
            <div className="fancy-collapse-panel">
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Maranatha 3D Design and Printing Research Group
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                         <div className="panel-body">
                            <div className="row">
                            <div className="col-md-3">
                              <p>Agustus 2018 - Sekarang<br/><strong>Jabatan: Ketua</strong></p>
                            </div>
                            <div className="col-md-9">
                              <ul>
                                <li>In charge of the 3D printing facility in the Electrical Engineering
                                Department of Maranatha Christian University.</li>
                                <li>
                                Conducted 3D design and 3D printing courses for students in the
                                electrical engineering department of Maranatha Christian University.
                                </li>
                                <li>
                                Represented Maranatha Christian University in Imajin 3Days Maker
                                Festival Indonesia as a speaker in promoting robotics design with 3D
                                printing.
                                </li>
                              </ul>                              
                            </div>
                          </div>
                         </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Maranatha Aerial Team
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                              <p>April 2018<br/><strong>Peran: Desainer dan Mekanik</strong></p>
                            </div>
                            <div className="col-md-9">                     
                               <ul>
                                <li>Contributed in the design and engineering of the team’s VTOL aircraft.</li>
                                <li>
                                Designed an autonomous multirotor UAV in Autodesk Fusion 360 and
                                applied topology optimization in airframe design. Built and made the
                                airframe’s component using CNC and 3D printing.
                                </li>
                                <li>
                                Participated in Indonesia’s Flying Robot Contest 2019.
                                </li>
                              </ul>                              
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Himpunan Mahasiswa
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div className="panel-body">
                            <div className="row">
                              <div className="col-md-3">
                              <p>BPH HME 2019<br/><strong>Jabatan: Anggota RnD</strong></p>
                              </div>
                              <div className="col-md-9">
                                <ul>
                                  <li>Menyelenggarakan workshop pelatihan IoT menggunakan NodeMCU dan Firebase</li>
                                </ul>
                              </div>  
                            </div>

                            <div className="row">
                              <div className="col-md-3">
                                <p>BPH HME 2018<br/><strong>Jabatan: Anggota Logistik</strong></p>
                              </div>
                              <div className="col-md-9">
                                <ul>
                                  <li>Merawat fasilitas di dalam ruang sekretariat Himpunan Mahasiswa Elektro Maranatha</li>
                                  <li>Membantu menyelenggarakan acara himpunan dengan menyediakan alat dan bahan yang dibutuhkan</li>
                                </ul>
                              </div>  
                            </div>

                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Pengajar dan Pembicara
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-3">
                              <p><strong>Pengajar Eskul Robotik SMP BPK Penabur 1 Bandung</strong><br/>Agustus - Desember 2019</p>
                            </div>
                            <div className="col-md-9">
                              <p>Mengajar eskul robotik kepada siswa SMP BPK Penabur 1 Bandung. Materi pelajaran meliputi pemrograman Arduino, elektronika sederhana, dan perakitan robot.</p>
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="col-md-3">
                              <p><strong>Pembicara Workshop IoT Menggunakan NodeMCU dan Firebase</strong><br/>2019</p>
                            </div>
                            <div className="col-md-9">
                              <p>Menyampaikan materi pemrograman Arduino.</p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-3">
                              <p><strong>Tutor 3D Design & 3D Printing</strong><br/>Agustus 2018 - Sekarang</p>
                            </div>
                            <div className="col-md-9">
                              <p>Membuat silabus dan modul pelatihan 3D Design menggunakan aplikasi Autodesk Fusion 360 dan pelatihan penggunaan mesin 3D Printer di Teknik Elektro Universitas Kristen Maranatha.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                        <h4 className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Kepanitiaan
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div className="panel-body">
                          <div className="row">
                            <ul>
                              <li><strong>Panitia Lomba Indonesia Robot Festival 2019</strong></li>
                              <li><strong>Panitia Bimbingan Mahasiswa Baru Teknik Elektro Maranatha 2019</strong></li>
                              <li><strong>Panitia Lomba Indonesia Robot Festival 2018</strong></li>
                              <li><strong>Panitia Lomba STEM Fun With Robotics 2018</strong></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}