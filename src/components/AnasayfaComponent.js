
import React, { Component } from 'react'

import Slider from '@farbenmeer/react-spring-slider';

import logo from '../assets/logo.svg';
import improve from '../assets/improve.svg';
import game from '../assets/game.png';
import mavi_pop from '../assets/mavi_pop.png';
import bn from '../assets/bn.png';
import learn from '../assets/learn.svg';
import chance from '../assets/chance.svg';
import mobil from '../assets/mobil.png';
import populer from '../assets/populer.png';
import yapay from '../assets/yapay.png';
import prog from '../assets/prog.png';
import hasibe from '../assets/hasibe.png';
import ercument from '../assets/ercument.png';
import elif from '../assets/elif.png';

import scratzh from '../assets/scratzh.png';
import digit from '../assets/digit.png';
import oyun from '../assets/oyun.png';
import popu2 from '../assets/popu2.png';
import slider1 from '../assets/slider1.PNG';
import sliderjava from '../assets/sliderjava.PNG';
import slider2 from '../assets/slider2.PNG';
import slider3 from '../assets/slider3.PNG';
import './Navi.css'
import {Container, Row, Col} from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider>
    <div data-src="assets/slider1.PNG" />
    <div data-src="assets/slider1.PNG" />
    <div data-src="assets/slider1.PNG" />
  </AwesomeSlider>
);
const images = [
    { url: {slider1}},
    { url: "assets/slider1.PNG" },
    { url: "assets/slider1.PNG" },
  

  ];
export default class AnasayfaComponent extends Component {
    render() {
        return (
          <div>
               <Row>
               <div style={{paddingTop:30}} id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className="sliderimg" src={sliderjava} alt="First slide"></img>
              </div>
              <div class="carousel-item">
                <img className="sliderimg" src={slider2} alt="Second slide"></img>
              </div>
              <div class="carousel-item">
                <img className="sliderimg" src={slider3} alt="Third slide"></img>
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
  <Row>
    <Col style={{paddingLeft:150}}>
    <img style={{width:150, height:150}} src={improve} alt="logo"></img>
    <h3 style={{fontSize:20, fontWeight:'bold'}}>Dünyanın eğitimi burada!</h3>
    <p style={{fontSize:20, color:'grey'}}>Binlerce saat eğitim ve zengin sertifika programı ile her gün kendini geliştir.</p>
    </Col>
    <Col style={{paddingLeft:150}}>
    <img style={{width:150, height:150}} src={learn} alt="logo"></img>
    <h3 style={{fontSize:20, fontWeight:'bold'}}>Türkiye’nin en büyük yazılım topluluğunda sen de yerini al!</h3>
    <p style={{fontSize:20, color:'grey'}}>Teknoloji konulu blog, etkinlik ve yarışmalar ile trendleri yakından takip ederken, binlerce soru-cevap içeriğiyle öğrendiklerini geliştir!</p>
    </Col>
    <Col style={{paddingLeft:150}}>
    <img style={{width:150, height:150}} src={chance} alt="logo"></img>
    <h3 style={{fontSize:20, fontWeight:'bold'}}>Hayalindeki kariyer fırsatlarını yakala!</h3>
    <p style={{fontSize:20, color:'grey'}} >Uzmanlığını eğitimlerimiz ile geliştir, kariyerinde yeni bir sayfa aç!</p>
    </Col>
  </Row>

  <Row style={{backgroundColor:'#edf1f3', height:100}}>

<Col>
<h1 style={{ fontWeight:'bold', fontSize:30, textAlign:'center', paddingTop:10}}>Geleceğinize Nasıl Şekil Verebilirsiniz?</h1>
<img style={{width:50, height:50, paddingLeft:20}} src={bn} alt="bn"></img>
</Col>

  </Row>

  <Row  style={{backgroundColor:'#edf1f3', paddingLeft:150}}>
    <Col >
    <figure style={{backgroundColor:'#0c0776', borderRadius:100, width:200, height:200}}>  <img style={{width:130, height:130, alignContent:'center',margin:30}} src={mobil} alt="logo"></img>
    <h3 style={{fontSize:20, padding:10}}>Mobil Programlama</h3>
</figure>

    </Col>
    <Col >
    <figure style={{backgroundColor:'#0c0776', borderRadius:100, width:200, height:200}}>  <img style={{width:130, height:130, alignContent:'center',margin:30}} src={yapay} alt="logo"></img>
</figure>
<h3 style={{fontSize:20, padding:10}}>Veri Bilimi</h3>
    </Col>
    <Col>
    <figure style={{backgroundColor:'#0c0776', borderRadius:100, width:200, height:200}}>  <img style={{width:130, height:130, alignContent:'center',margin:30}} src={prog} alt="logo"></img>
</figure>
<h3 style={{fontSize:20, padding:10}}>Veri Tabanı Programlama</h3>
    </Col>
    <Col style={{}}>
    <figure style={{backgroundColor:'#0c0776', borderRadius:100, width:200, height:200}}>  <img style={{width:130, height:130, alignContent:'center',margin:30}} src={oyun} alt="logo"></img>
</figure>
<h3 style={{fontSize:20, padding:10}}>Oyun Programlama</h3>
    </Col>
    <Col >
   
    <figure style={{backgroundColor:'#0c0776', borderRadius:100, width:200, height:200}}>  <img style={{width:130, height:130, alignContent:'center', margin:30}} src={chance} alt="logo"></img>
</figure>
<h3 style={{fontSize:20, padding:10}}> Web Programlama</h3>
    </Col>
    
  </Row>
  
      <Row>
      
          <Col>
          <h2 style={{paddingLeft:100, paddingBottom:20,paddingTop:20, fontWeight:'bold'}}>Popüler İçerikler</h2>
          </Col>
         
      </Row>
 <Row>
  <div style={{width:500, height:300,paddingLeft:100 }} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Blue Team Bakış Açısıyla Windows Sistem Processleri</h5>
    <p style={{color:'grey'}} class="card-text">10 Mayıs 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-güvenlik</button>
    
  </div>
  </div>
  <div style={{width:500, height:300,paddingLeft:50}} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Profesyonel Bir Çevirmende Olması Gereken Nitelik Nelerdir?</h5>
    <p style={{color:'grey'}} class="card-text">10 Mayıs 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-güvenlik</button>
    
  </div>
  </div>
  <div style={{width:500, height:300, paddingLeft:50}} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="w3-display-container w3-text-white">
    <h5 class="card-title">Blue Team Bakış Açısıyla Windows Sistem Processleri 3: explorer.exe</h5>
    <p style={{color:'grey'}} class="card-text">10 Mayıs 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-güvenlik</button>
    
  </div>
  </div>
  </Row>
  <Row style={{paddingLeft:550, paddingTop:60}}>
  <button style={{borderRadius:20, width:200,}}  type="button" class="btn btn-warning">Daha fazla gör</button>
  <h2  style={{fontWeight:'bold', paddingTop:40, fontSize:40, paddingBottom:40,}}>Sosyal Programlar</h2>
  </Row>
  <Row>
      <Col style={{paddingLeft:150}}>
      <img src={game} alt="Avatar" class="avatar" style={{width:300, height:300}}></img>
      <h3 style={{fontSize:20, paddingLeft:50}}>Gameeventure</h3>
      </Col>
      <Col style={{paddingLeft:80}}>
      <img src={digit} alt="Avatar" class="avatar" style={{width:300, height:300,borderRadius:200}}></img>
      <h3 style={{fontSize:20,paddingLeft:40}}>Dijital Okuryazarlık</h3>
      </Col>
      <Col style={{paddingLeft:80}}>
      <img src={scratzh} alt="Avatar" class="avatar" style={{width:300, height:300}}></img>
      <h3 style={{fontSize:20, paddingLeft:80}}>Scratchc 3.0</h3>
      </Col>
  </Row>
  <Row style={{backgroundColor:'#edf1f3', paddingLeft:550, paddingTop:30, paddingBottom:30}}>
      <h2>Başarı Hikayeleri</h2>
  </Row>
  <Row  style={{backgroundColor:'#edf1f3', paddingLeft:150}}>

    <Col >
   <img style={{width:130, height:130, alignContent:'center'}} src={hasibe} alt="logo"></img>
    <h3 style={{fontSize:20}}>Hasibe Zafer</h3>
    <p style={{color:'grey', paddingRight:150}}>Geleceği Yazanlar ile üniversite yıllarında tanışan Hasibe Zafer, başvurusunun ardından Karabük Üniversitesi Geleceği Yazanlar Elçisi olarak seçildi. Geleceği Yazan Kadınlar projesinde elde ettiği başarılarla Cumhurbaşkanlığı Külliyesi’nde sunum yapma fırsatı bulan Zafer, şu anda Turkcell’de Android Developer olarak çalışmakta.</p>


    </Col>
    <Col >
  <img style={{width:130, height:130, alignContent:'center'}} src={ercument} alt="logo"></img>

<h3 style={{fontSize:20}}>Ercüment Erol Ölçer</h3>
<p style={{color:'grey',paddingRight:150}}>Ercüment Erol Ölçer, önlisans eğitimi aldığı yıllarda Geleceği Yazanlar tarafından verilen 2 günlük Android geliştirme eğitimine katıldı. Bu eğitimin ardından Android geliştirmeye başlayan Ölçer, henüz öğrencilik yıllarında kendi okulunun bilgi-işlem uygulamasını geliştirdi. Sonrasında geliştirdiği projeler doğrultusunda eğitim bursu kazandı ve Bilgisayar Mühendisliğine geçiş yaptı. Şu anda Geleceği Yazan Kadınlar projesinde Android eğitmeni olarak görev almakta.</p>
    </Col>
    <Col >
    <img style={{width:130, height:130, alignContent:'center'}} src={elif} alt="logo"></img>
<h3 style={{fontSize:20}}>Elif Göktaş</h3>
<p style={{color:'grey',paddingRight:150}}>Kayseri’de ev hanımı olarak hayatını sürdüren Elif Göktaş, Geleceği Yazanlar ile tanıştı ve online eğitimler almaya başladı. Sonrasında Geleceği Yazan Kadınlar projesine katıldı ve aldığı eğitimlerin ardından Turkcell’de tester olarak çalışmaya başladı. 1 yıl 8 ay boyunca tester olarak görev alan Göktaş, Eylül 2019’dan bu yana Turkcell Genel Merkezi’nde Geleceği Yazan Kadınlar takım lideri olarak çalışıyor.</p>
    </Col>
  
   
    
  </Row>

  <Row>
      <h2 style={{paddingLeft: 500, paddingTop: 50, fontWeight:'bold', paddingBottom: 50}}>
          Aramıza Katıl!
      </h2>
      <p style={{paddingLeft: 200, paddingRight:300, fontSize:20}}>
      Geleceği Yazanlar portalına üye olarak, uygulama geliştiricilere sağlanacak olan pek çok avantajdan faydalanabilir ve etkinliklerden haberdar olabilirsin!
      </p>
      <div style={{paddingLeft: 600, paddingBottom:40}}>
      <button style={{borderRadius:20, width:200, }}  type="button" class="btn btn-warning">Üye Ol</button>
      </div>
  </Row>
  <Row style={{backgroundColor:'#263170', paddingLeft:150,paddingTop:50}}>
<Col>
<a style={{color:'white',textDecoration:'none', }} href="url">Hakkımızda</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white', textDecoration:'none'}} href="url">Kullanım Şartları</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">Gizlilik Politikası</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">Gamification</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">SSS</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">Bize Ulaşın</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">Eğitimler</a>

</Col>
  </Row>

</div>

        )
    }
}
