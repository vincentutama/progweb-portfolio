import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return(
            <div className="col-md-12">
              <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                  <div className="about-desc">
                    <h2>About Me</h2>
                    <p>Saya adalah mahasiswa Teknik Elektro Universitas Kristen Maranatha. 
                      Di tahun ketiga kuliah saya, saya mengambil mata kuliah Pemrograman Web yang diajarkan oleh Dosen Agus Prijono.
                      Sebagai tugas UAS, saya diharuskan untuk membuat sebuah program web.
                      Saya memilih topik 'portfolio page' untuk tugas ini karena saya merasa 
                      portfolio page dapat mendemonstrasikan dengan baik penguasaan saya akan 
                      materi-materi yang telah diajarkan dalam mata kuliah Pemrograman Web.
                    </p>
                      Alat-alat yang digunakan dalam program web ini antara lain:
                      <ul>
                        <li>Bootstrap, untuk mempermudah styling page saya.</li>
                        <li>jQuery, memungkinkan rendering animasi pada component yang ada di program saya dengan mudah.</li>
                        <li>ReactJS, untuk menyederhanakan dan mempercepat proses coding program web.</li>
                        <li>HTML, CSS, dan JavaScript</li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
    )
  }
}