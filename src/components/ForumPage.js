import React, { Component } from 'react'
import user from '../assets/user.png';
import girluser from '../assets/girluser.png';
import './forum.css'
import { Container, Row, Col } from 'react-bootstrap';
export default class ForumPage extends Component {
    render() {
        return (
            <div style={{ paddingleft: 50 }}>
                <Row style={{ backgroundColor: '#edf1f3' }}>
                    <Col>  <h1 style={{ marginLeft: 100, }}>Soru & Cevap</h1></Col>
                    <Col style={{ marginLeft: 100, }}> <button style={{ borderRadius: 20, width: 200, marginLeft: 350, marginTop: 15 }} type="button" class="btn btn-primary"> +   Soru Sor</button></Col>


                </Row>
                <Row style={{ backgroundColor: '#edf1f3', height: 200 }}>
                    <Col><div style={{ width: 700, height: 70, marginLeft: 100, paddingleft: 50, paddingTop: 20 }} class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Soru Cevap Ara" aria-label="Search"
                            aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div></Col>
                    <Col>

                        <div class="btn-group">
                            <button style={{ backgroundColor: 'white', marginLeft: 100, marginTop: 20, width: 400, height: 50 }} type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                -Herhangi
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
                <Row >
                    <ul style={{ marginLeft: 500, }} class="nav nav-tabs mb-3" id="myTab0" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button
                            style={{color:'#2855ac', fontWeight:'bold'}}
                                class="nav-link active"
                                id="home-tab0"
                                data-mdb-toggle="tab"
                                data-mdb-target="#home0"
                                type="button"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                            >
                                Tüm Sorular
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button
                            style={{color:'grey', fontWeight:'bold'}}
                                class="nav-link"
                                id="profile-tab0"
                                data-mdb-toggle="tab"
                                data-mdb-target="#profile0"
                                type="button"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Cevaplanmayan Sorular
                            </button>
                        </li>

                    </ul>
                    <div class="tab-content" id="myTabContent0">
                        <div
                            class="tab-pane fade show active"
                            id="home0"
                            role="tabpanel"
                            aria-labelledby="home-tab0"
                        >
                            <div style={{ paddingleft: 300, marginLeft: 100, width: 1200, height:200, boxShadow: 50 }} class="cardforum">

                                <div style={{ width: 1200, boxShadow: 500 }} class="container">
                                    <h4 style={{ color: '#263170' }}><b>Ahşap Oyun Evi</b></h4>
                                    < p style={{ color: 'grey' }}> Tüm ahşap çocuk oyun evi evlerimiz ve diğer modellerimiz  Ahşap Oyun Evi  </p>
                                    <Row class="row">
                                        <Col xs="1" >   <img src={user} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img></Col>

                                        <Col xs="4"> <h5 style={{ color: 'grey', fontSize: 15, fontWeight: 'lighter', paddingTop: 7 }}>Serkan Akçay</h5>
                                            <p style={{ color: 'grey', fontSize: 12 }}>20 Ağustos 2021 tarihinde soruldu</p>
                                        </Col>
                                        <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#oyunevi</button> </Col>
                                        <Col style={{ marginLeft: 250, fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="1"> <p>8 cevap</p> </Col>
                                        <Col style={{ fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="2"> <p>20 görüntülenme</p></Col>


                                    </Row>

                                </div>
                            </div>
                            <div style={{ paddingleft: 300, marginLeft: 100, width: 1200, boxShadow: 50, marginTop: 30 }} class="cardforum">

                                <div style={{ width: 1200, boxShadow: 500 }} class="containerforum">
                                    <h4 style={{ color: '#263170' }}><b>Merhaba sertifikayı nasıl indirebilirim?</b></h4>
                                    < p style={{ color: 'grey' }}> sertifikamı görüyorum ama indiremiyorum yardımcı olur musunuz?  </p>
                                    <Row class="row">
                                        <Col xs="1" >   <img src={girluser} style={{ width: 50, paddingBottom: 10, borderRadius:150 }} alt="Avatar" class="avatar"></img></Col>

                                        <Col xs="4"> <h5 style={{ color: 'grey', fontSize: 15, fontWeight: 'lighter', paddingTop: 7 }}>
                                            Seda Yüngül</h5>
                                            <p style={{ color: 'grey', fontSize: 12 }}>19 Ağustos 2021 tarihinde soruldu</p>
                                        </Col>
                                        <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#oyunevi</button> </Col>
                                        <Col style={{ marginLeft: 250, fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="1"> <p>2 cevap</p> </Col>
                                        <Col style={{ fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="2"> <p>18 görüntülenme</p></Col>


                                    </Row>

                                </div>
                            </div>
                            <div style={{ paddingleft: 300, marginLeft: 100, width: 1200, boxShadow: 50, marginTop: 30 }} class="cardforum">

                                <div style={{ width: 1200, boxShadow: 500 }} class="container">
                                    <h4 style={{ color: '#263170' }}><b>Profesyonel Bir Çevirmende Olması Gereken Nitelik Nelerdir?</b></h4>
                                    < p style={{ color: 'grey' }}> Güçlü bir profesyonel çeviri hizmetinin, bir metni dilin zengin yapısını bozmadan bir başka dile aktarabilmesi beklenir. Peki, bunun mümkün olması için bir çevirmende bulunması gereken özellikler nelerdir?  </p>
                                    <Row class="row">
                                        <Col xs="1" >   <img src={user} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img></Col>

                                        <Col xs="4"> <h5 style={{ color: 'grey', fontSize: 15, fontWeight: 'lighter', paddingTop: 7 }}>Meltem Mutlu</h5>
                                            <p style={{ color: 'grey', fontSize: 12 }}>18 Ağustos 2021 tarihinde soruldu</p>
                                        </Col>
                                        <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#cevirmen</button> </Col>
                                        <Col style={{ marginLeft: 250, fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="1"> <p>0 cevap</p> </Col>
                                        <Col style={{ fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="2"> <p>19 görüntülenme</p></Col>


                                    </Row>

                                </div>
                            </div>
                            <div style={{ paddingleft: 300, marginLeft: 100, width: 1200, boxShadow: 50, marginTop: 30 }} class="cardforum">

                                <div style={{ width: 1200, boxShadow: 500 }} class="container">
                                    <h4 style={{ color: '#263170' }}><b>Makine öğrenmesinde RMSE değeri nereye kadar kabul görür? Yorumlarken iyi veya kötü derken bir sınır var mı?</b></h4>
                                    < p style={{ color: 'grey' }}> Örneğin bir RMSE değeri 666 çıktı bu neye göre iyi veya kötü olduğuna nasıl bakacağım ? </p>
                                    <Row class="row">
                                        <Col xs="1" >   <img src={user} style={{ width: 50, paddingBottom: 10 }} alt="Avatar" class="avatar"></img></Col>

                                        <Col xs="4"> <h5 style={{ color: 'grey', fontSize: 15, fontWeight: 'lighter', paddingTop: 7 }}>Sümeyye Balcı</h5>
                                            <p style={{ color: 'grey', fontSize: 12 }}>16 Ağustos 2021 tarihinde soruldu</p>
                                        </Col>
                                        <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#makineogrenmesi</button> </Col>
                                        <Col style={{ marginLeft: 250, fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="1"> <p>8 cevap</p> </Col>
                                        <Col style={{ fontWeight: 'bold', color: 'grey', fontSize: 13 }} xs="2"> <p>20 görüntülenme</p></Col>


                                    </Row>

                                </div>
                            </div>
                        </div>


                        <div class="tab-pane fade" id="profile0" role="tabpanel" aria-labelledby="profile-tab0">
                            Tab 2 content
                        </div>

                    </div>
                </Row>


            </div>
        )
    }
}
