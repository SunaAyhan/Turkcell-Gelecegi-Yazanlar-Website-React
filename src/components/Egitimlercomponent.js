import React, { Component } from 'react'
import ikon_egitim from '../assets/ikon_egitim.png';
import mobilc from '../assets/mobilc.png';
import c from '../assets/c.png';
import swift from '../assets/swift.png';
import linux1 from '../assets/linux1.png';
import java from '../assets/java.png';
import robotik from '../assets/robotik.png';
import kotlin from '../assets/kotlin.png';
import oyun_0 from '../assets/oyun_0.png';
import './egitimler.css'
import { Container, Row, Col } from 'react-bootstrap';
export default class Egitimlercomponent extends Component {
    render() {
        return (
            <div>
                <Row style={{ margin: 100 }}>
                    <h2 syle={{ fontweight: 'bold' }}>
                        Almak İstediğin Eğitimi Seç
                    </h2>
                    <p style={{ color: 'grey', fontweight: 'bold' }}>Teknoloji dünyasının en güncel ve kolay anlaşılır eğitimleriyle kendini geliştir! Geleceği Yazanlar Platformunda, mobil programlamadan veri bilimi ve yapay zekaya; oyun geliştirmeden, veri tabanı programlamaya kadar çok çeşitli ve zengin içerikli eğitim seni bekliyor. Gelişmek istediğin alanı seç ve hemen öğrenmeye başla! Kendine yatırım yap. Eğitim sertifikalarını birer birer tamamla. Geleceği bugünden öğrenerek yeni dünyanın fırsatlarını yakala</p>
                    <h5 style={{ fontweight: 'bold', color: 'black' }}>Dijital Okuryazarlık</h5>
                    <div style={{height:380}} className="card" >
                        <div className="cardHeader" >
                            <Row>
                                <Col > <h4 style={{ fontSize: 20 }} className="cardHeader" class="card-header">Dijital Okuryazarlık</h4></Col>
                                <Col ><img style={{ width: 0, height: 70, paddingLeft: 30 }} src={ikon_egitim} alt="logo"></img></Col>
                            </Row>



                        </div>
                        <div className="cardBody">
                            <div class="card-body">

                                <p class="card-text">Dijital Okuryazarlık eğitimi ile bilgisayar ve internet dünyasına ilk adımını atabilir, ofis programları, sosyal medya kullanımı, akıllı cihazlar ve uygulamalar hakkında temel bilgileri öğrenebilirsin.</p>
                                <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'} </a>
                                <hr class="solid"></hr>
                                <p>4 ders</p>
                            </div></div>
                    </div>
                    <h5 style={{ fontweight: 'bold', color: 'black', paddingTop:30 }}>Mobil Programlama</h5>
                    <Row> <div style={{height:380}} className="card">
                        <div className="cardMobilHeader" >
                            <Row>
                                <Col> <h4 style={{ fontSize: 20 }} className="cardMobilHeader" class="card-header">Android</h4></Col>
                                <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={mobilc} alt="logo"></img></Col>
                            </Row>



                        </div>
                        <div className="cardBody">
                            <div class="card-body">

                                <p class="card-text">Android eğitimine başlayarak mobil uygulama geliştirmenin temellerini öğrenebilir ve eğitimden edindiğin bilgilerle kendi Android uygulamanı hayata geçirebilirsin.</p>
                                <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                <hr class="solid"></hr>
                                <p>4 ders</p>
                            </div></div>
                    </div>
                        <div style={{height:380}} className="card">
                            <div className="cardMobilHeader" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="cardMobilHeader" class="card-header">App Inventor</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={mobilc} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Grafiksel arayüzündeki blokları kullanarak Android uygulamaları geliştirilmesine imkan tanıyan App Inventor eğitimini tamamla, uygulama geliştirenlerin dünyasına katıl.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>
                        <div style={{height:380}} className="card" >
                            <div className="cardMobilHeader" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="cardMobilHeader" class="card-header">iOS</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={mobilc} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">iOS eğitimi ile Objective-C dünyasıyla tanışabilir, dilin kavramları ve uygulamaya yönelik bilgiler edinebilir ve bu sayede iOS uygulamalarını hayata geçirebilirsin.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>


                    </Row>


                    <h5 style={{ fontweight: 'bold', color: 'black',paddingTop:30 }}>Oyun Programlama</h5>
                    <Row> <div  style={{height:380}} className="card">
                        <div className="cardOyunHeader" >
                            <Row>
                                <Col> <h4 style={{ fontSize: 20 }} className="cardOyunHeader" class="card-header">Oyun Geliştirme</h4></Col>
                                <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={oyun_0} alt="logo"></img></Col>
                            </Row>



                        </div>
                        <div className="cardBody">
                            <div class="card-body">

                                <p class="card-text">Oyun Geliştirme eğitimi ile oyuna hazırlık süreci, oyun tasarımı, oyun geliştirmede kullanılan teknolojiler ve çok daha fazlası hakkında bilgiler edinebilirsin.</p>
                                <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                <hr class="solid"></hr>
                                <p>4 ders</p>
                            </div></div>
                    </div>
                        <div style={{height:380}} className="card" >
                            <div className="cardOyunHeader" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="cardOyunHeader" class="card-header">Scratch</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={oyun_0} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Scratch eğitimi ile kendi projeni, animasyonunu, hikayeni, oyununu, müziğini ve simülasyonunu oluşturabilir, bilgisayar programlamanın kendine özgü özelliklerini öğrenebilirsin.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>
                        <div style={{height:380}} className="card">
                            <div className="cardOyunHeader" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="cardOyunHeader" class="card-header">Unity</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={oyun_0} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Unity eğitimi ile oyun dünyasına giriş yapabilir, hayal gücünüzü kullanarak kendi oyunlarınızı hayata geçirebilirsiniz.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>


                    </Row>
                    <h5 style={{ fontweight: 'bold', color: 'black' ,paddingTop:30}}>Programlama</h5>
                    <Row> 
                    <div style={{height:380}} className="card">
                            <div className="programC" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="programC" class="card-header">C# ile Algoritma ve Programlama</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={oyun_0} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Unity eğitimi ile oyun dünyasına giriş yapabilir, hayal gücünüzü kullanarak kendi oyunlarınızı hayata geçirebilirsiniz.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>
                        <div style={{height:380}} className="card">
                            <div className="java" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="java" class="card-header">Java</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={java} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Android eğitimine başlayarak mobil uygulama geliştirmenin temellerini öğrenebilir ve eğitimden edindiğin bilgilerle kendi Android uygulamanı hayata geçirebilirsin.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>
                        <div style={{height:380}} className="card" >
                            <div className="kotlin" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="kotlins" class="card-header">Kotlin</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={kotlin} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">Grafiksel arayüzündeki blokları kullanarak Android uygulamaları geliştirilmesine imkan tanıyan App Inventor eğitimini tamamla, uygulama geliştirenlerin dünyasına katıl.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>
                        <div style={{height:380}} className="card">
                            <div className="swift" >
                                <Row>
                                    <Col> <h4 style={{ fontSize: 20 }} className="swift" class="card-header">Swift</h4></Col>
                                    <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={swift} alt="logo"></img></Col>
                                </Row>



                            </div>
                            <div className="cardBody">
                                <div class="card-body">

                                    <p class="card-text">iOS eğitimi ile Objective-C dünyasıyla tanışabilir, dilin kavramları ve uygulamaya yönelik bilgiler edinebilir ve bu sayede iOS uygulamalarını hayata geçirebilirsin.</p>
                                    <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                    <hr class="solid"></hr>
                                    <p>4 ders</p>
                                </div></div>
                        </div>


                    </Row>
                    <h5 style={{ fontweight: 'bold', color: 'black',paddingTop:30 }}>Robotik ve Kodlama</h5>
                    <Row> <div style={{height:380}} className="card" >
                        <div className="robotik" >
                            <Row>
                                <Col> <h4 style={{ fontSize: 20 }} className="robotik" class="card-header">Android</h4></Col>
                                <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={robotik} alt="logo"></img></Col>
                            </Row>



                        </div>
                        <div className="cardBody">
                            <div class="card-body">

                                <p class="card-text">Android eğitimine başlayarak mobil uygulama geliştirmenin temellerini öğrenebilir ve eğitimden edindiğin bilgilerle kendi Android uygulamanı hayata geçirebilirsin.</p>
                                <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                <hr class="solid"></hr>
                                <p>4 ders</p>
                            </div></div>
                    </div>



                    </Row>
                    <h5 style={{ fontweight: 'bold', color: 'black', paddingTop:30 }}>Temel Network</h5>
                    <Row> <div style={{height:380}} className="card" >
                        <div className="linux" >
                            <Row>
                                <Col> <h4 style={{ fontSize: 20 ,}} className="linux" class="card-header">Temel Network</h4></Col>
                                <Col><img style={{ width: 70, height: 70, paddingLeft: 10 }} src={linux1} alt="logo"></img></Col>
                            </Row>



                        </div>
                        <div className="cardBody">
                            <div class="card-body">

                                <p class="card-text">Android eğitimine başlayarak mobil uygulama geliştirmenin temellerini öğrenebilir ve eğitimden edindiğin bilgilerle kendi Android uygulamanı hayata geçirebilirsin.</p>
                                <a style={{ textDecoration: 'none', }} className="incelefont" href="url">İncele {'>'}  </a>
                                <hr class="solid"></hr>
                                <p>4 ders</p>
                            </div></div>
                    </div>



                    </Row>
                    

                </Row>




            </div>
        )
    }
}
