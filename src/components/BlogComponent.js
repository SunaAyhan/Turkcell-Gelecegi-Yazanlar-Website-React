import React, { Component } from 'react'
import './blog.css'
import { Container, Row, Col } from 'react-bootstrap';
import sliderimg from '../assets/sliderimg.PNG';
import sliderimg2 from '../assets/sliderimg2.PNG';
import publicimg from '../assets/publicimg.png';
import user from '../assets/user.png';
import sliderimg3 from '../assets/sliderimg3.PNG';
import kilit from '../assets/kilit.png';
import burp from '../assets/burp.png';
import mehmet from '../assets/mehmet.png';
export default class BlogComponent extends Component {
  render() {
    return (
      <div>
        <Row className="grey"><h2 style={{ fontWeight: 'bold', marginLeft: 150, marginTop: 30 }}>Geleceği Yazanlar Blog</h2></Row>

        <Row style={{ backgroundColor: '#edf1f3', height: 280 }}>
          <Col><div style={{ width: 700, height: 70, marginLeft: 100, paddingleft: 50, paddingTop: 20 }} class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Blogda Ara" aria-label="Search"
              aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div></Col>
          <Col>

            <div class="btn-group">
              <button style={{ backgroundColor: 'white', marginLeft: 100, marginTop: 20, width: 400, height: 50 }} type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Kategoriye göre
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </div>
          </Col>

        </Row>
        <Row className="grey">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className="sliderimg" src={sliderimg} alt="First slide"></img>
              </div>
              <div class="carousel-item">
                <img className="sliderimg" src={sliderimg2} alt="Second slide"></img>
              </div>
              <div class="carousel-item">
                <img className="sliderimg" src={sliderimg3} alt="Third slide"></img>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </Row>
        <Row>
          <div>

          </div>

        </Row>
        <Row className='grey' >
          <div style={{ paddingleft: 300, marginLeft: 150, width: 1200, height: 360, marginTop: 30, }} class="cardblog">

            <div style={{ width: 1200, boxShadow: 100 }} class="container">
              <Row> <Col xs="2"><img src={kilit} style={{ width: 200, paddingBottom: 20, borderRadius: 10 }} alt="Avatar" class="avatar"></img></Col>
                <Col> <h3 style={{ marginLeft: 10 }}> Blue Team Bakış Açısıyla Windows Sistem Processleri 3: explorer.exe</h3>
                  < p style={{ color: 'grey', marginLeft: 10 }}>Bilgisayarımızda beklenmedik yavaşlık, donma veya ısınma sorunları oluştuğunda hepimizin ilk baktığı yer olan görev yöneticisi çeşitli işlemlere ev sahipliği yapmaktadır. Görev yöneticisi; yürütülen işlemler, kullanılan işlemci ve hafıza oranları gibi bizlere çeşitli bilgiler vermektedir: Bu işlemler kim tarafından yapılıyor? Bilgisayarımda virüs, madencilik zararlısı var mı? Hangi işlemler, servisler paket aktarımı gerçekleştiriyor?</p>
                </Col>
                <Row style={{ marginLeft: 190 }}>
                  <Col className="avatar" xs="1" >
                    <img src={mehmet} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img>
                  </Col>
                  <Col xs="3">
                    <p>
                      Mehmet Selim Kartal | 10.05.2021</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 200 }} disabled>#siber</button> </Col>
                  <Col xs="2">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 205 }} disabled>#guvenlik</button> </Col>
                </Row>
                <hr class="solid"></hr>
                <p style={{marginLeft:190,}}>23 yorum</p>
              </Row>
            </div>
          </div>
        </Row>
        <Row className='grey' >
          <div style={{ paddingleft: 300, marginLeft: 150, width: 1200, height: 360, marginTop: 30, }} class="cardblog">

            <div style={{ width: 1200, boxShadow: 100 }} class="container">
              <Row> <Col xs="2"><img src={burp} style={{ width: 200, paddingBottom: 20, borderRadius: 10 }} alt="Avatar" class="avatar"></img></Col>
                <Col> <h3 style={{ marginLeft: 10 }}>Burp Suite: Proxy Yapılandırması</h3>
                  < p style={{ color: 'grey', marginLeft: 10 }}>Burp Suite, HTTP isteklerini/cevaplarını görebilmemizi ve onlar üzerinde çeşitli manipülasyonlar yapabilmemize olanak tanıyan bir web proxy aracıdır.</p>
                </Col>
                <Row style={{ marginLeft: 190 }}>
                  <Col className="avatar" xs="1" >
                    <img src={user} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img>
                  </Col>
                  <Col xs="3">
                    <p>
                     
Haktan Emik | 03.05.2021</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 200 }} disabled>#siber</button> </Col>
                  <Col xs="2">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 205 }} disabled>#guvenlik</button> </Col>
                </Row>
                <hr class="solid"></hr>
                <p style={{marginLeft:190,}}>25 Yorum</p>
              </Row>
            </div>
          </div>
        </Row>

        <Row className='grey' >
          <div style={{ paddingleft: 300, marginLeft: 150, width: 1200, height: 360, marginTop: 30, }} class="cardblog">

            <div style={{ width: 1200, boxShadow: 100 }} class="container">
              <Row> <Col xs="2"><img src={publicimg} style={{ width: 200, paddingBottom: 20, borderRadius: 10 }} alt="Avatar" class="avatar"></img></Col>
                <Col> <h3 style={{ marginLeft: 10 }}>PKI Token Cihazları</h3>
                  < p style={{ color: 'grey', marginLeft: 10 }}>Günümüzde yaşadığımız pandemi süreci nedeniyle yaygınlaşan uzaktan çalışma yöntemleri, bulut uygulamalarının kullanımının artması, artan siber saldırılar, güvenlikteki en zayıf halka olan insan faktörünün sistem kaynaklarına güvenli erişimlerini daha önemli hale getirmiştir. Bu anlamda birçok iki faktörlü kimlik doğrulama yöntem kullanılırken, Açık Anahtar Altyapısı (Public Key Infrastructure- PKI) kullanımı güven faktörünü çok arttırdığı için kurumsal kullanımlarda öne çıkmaktadır. Bu doğrultuda PKI Token cihazlarının kullanımı günden güne artmaktadır. Bu makale Açık Anahtar Altyapısını açıklayıp, Digital İmzalar ve Sertifikalardan bahsedip, günümüzdeki popüler PKI Token cihazlarını ve kullanımlarını açıklayıp, benzer bir alt yapı olan FIDO2’yi ve onu destekleyen cihazları da tanıtmayı amaçlamaktadır.</p>
                </Col>
                <Row style={{ marginLeft: 190 }}>
                  <Col className="avatar" xs="1" >
                    <img src={user} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img>
                  </Col>
                  <Col xs="3">
                    <p>
                     

                    Emre Tanrıverdioğlu | 20.04.2021</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 200 }} disabled>#siber</button> </Col>
                  <Col xs="2">  <button type="button" class="btn" style={{ backgroundColor: '#ecf0f2', borderRadius: 10, marginLeft: 205 }} disabled>#guvenlik</button> </Col>
                </Row>
                <hr class="solid"></hr>
                <p style={{marginLeft:190,}}>25 Yorum</p>
              </Row>
            </div>
          </div>
        </Row>
      </div>
    )
  }
}
