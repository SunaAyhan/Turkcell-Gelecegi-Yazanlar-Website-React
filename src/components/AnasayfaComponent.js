
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
    <h3 style={{fontSize:20, fontWeight:'bold'}}>D??nyan??n e??itimi burada!</h3>
    <p style={{fontSize:20, color:'grey'}}>Binlerce saat e??itim ve zengin sertifika program?? ile her g??n kendini geli??tir.</p>
    </Col>
    <Col style={{paddingLeft:150}}>
    <img style={{width:150, height:150}} src={learn} alt="logo"></img>
    <h3 style={{fontSize:20, fontWeight:'bold'}}>T??rkiye???nin en b??y??k yaz??l??m toplulu??unda sen de yerini al!</h3>
    <p style={{fontSize:20, color:'grey'}}>Teknoloji konulu blog, etkinlik ve yar????malar ile trendleri yak??ndan takip ederken, binlerce soru-cevap i??eri??iyle ????rendiklerini geli??tir!</p>
    </Col>
    <Col style={{paddingLeft:150}}>
    <img style={{width:150, height:150}} src={chance} alt="logo"></img>
    <h3 style={{fontSize:20, fontWeight:'bold'}}>Hayalindeki kariyer f??rsatlar??n?? yakala!</h3>
    <p style={{fontSize:20, color:'grey'}} >Uzmanl??????n?? e??itimlerimiz ile geli??tir, kariyerinde yeni bir sayfa a??!</p>
    </Col>
  </Row>

  <Row style={{backgroundColor:'#edf1f3', height:100}}>

<Col>
<h1 style={{ fontWeight:'bold', fontSize:30, textAlign:'center', paddingTop:10}}>Gelece??inize Nas??l ??ekil Verebilirsiniz?</h1>
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
<h3 style={{fontSize:20, padding:10}}>Veri Taban?? Programlama</h3>
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
          <h2 style={{paddingLeft:100, paddingBottom:20,paddingTop:20, fontWeight:'bold'}}>Pop??ler ????erikler</h2>
          </Col>
         
      </Row>
 <Row>
  <div style={{width:500, height:300,paddingLeft:100 }} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Blue Team Bak???? A????s??yla Windows Sistem Processleri</h5>
    <p style={{color:'grey'}} class="card-text">10 May??s 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-g??venlik</button>
    
  </div>
  </div>
  <div style={{width:500, height:300,paddingLeft:50}} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Profesyonel Bir ??evirmende Olmas?? Gereken Nitelik Nelerdir?</h5>
    <p style={{color:'grey'}} class="card-text">10 May??s 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-g??venlik</button>
    
  </div>
  </div>
  <div style={{width:500, height:300, paddingLeft:50}} class="w3-card-4">
  <img src={mavi_pop} class="card-img-top" alt="..."></img>
  <div class="w3-display-container w3-text-white">
    <h5 class="card-title">Blue Team Bak???? A????s??yla Windows Sistem Processleri 3: explorer.exe</h5>
    <p style={{color:'grey'}} class="card-text">10 May??s 2021 | BLOG</p>
  
    <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:10}} disabled>#siber-g??venlik</button>
    
  </div>
  </div>
  </Row>
  <Row style={{paddingLeft:550, paddingTop:60}}>
  <button style={{borderRadius:20, width:200,}}  type="button" class="btn btn-warning">Daha fazla g??r</button>
  <h2  style={{fontWeight:'bold', paddingTop:40, fontSize:40, paddingBottom:40,}}>Sosyal Programlar</h2>
  </Row>
  <Row>
      <Col style={{paddingLeft:150}}>
      <img src={game} alt="Avatar" class="avatar" style={{width:300, height:300}}></img>
      <h3 style={{fontSize:20, paddingLeft:50}}>Gameeventure</h3>
      </Col>
      <Col style={{paddingLeft:80}}>
      <img src={digit} alt="Avatar" class="avatar" style={{width:300, height:300,borderRadius:200}}></img>
      <h3 style={{fontSize:20,paddingLeft:40}}>Dijital Okuryazarl??k</h3>
      </Col>
      <Col style={{paddingLeft:80}}>
      <img src={scratzh} alt="Avatar" class="avatar" style={{width:300, height:300}}></img>
      <h3 style={{fontSize:20, paddingLeft:80}}>Scratchc 3.0</h3>
      </Col>
  </Row>
  <Row style={{backgroundColor:'#edf1f3', paddingLeft:550, paddingTop:30, paddingBottom:30}}>
      <h2>Ba??ar?? Hikayeleri</h2>
  </Row>
  <Row  style={{backgroundColor:'#edf1f3', paddingLeft:150}}>

    <Col >
   <img style={{width:130, height:130, alignContent:'center'}} src={hasibe} alt="logo"></img>
    <h3 style={{fontSize:20}}>Hasibe Zafer</h3>
    <p style={{color:'grey', paddingRight:150}}>Gelece??i Yazanlar ile ??niversite y??llar??nda tan????an Hasibe Zafer, ba??vurusunun ard??ndan Karab??k ??niversitesi Gelece??i Yazanlar El??isi olarak se??ildi. Gelece??i Yazan Kad??nlar projesinde elde etti??i ba??ar??larla Cumhurba??kanl?????? K??lliyesi???nde sunum yapma f??rsat?? bulan Zafer, ??u anda Turkcell???de Android Developer olarak ??al????makta.</p>


    </Col>
    <Col >
  <img style={{width:130, height:130, alignContent:'center'}} src={ercument} alt="logo"></img>

<h3 style={{fontSize:20}}>Erc??ment Erol ??l??er</h3>
<p style={{color:'grey',paddingRight:150}}>Erc??ment Erol ??l??er, ??nlisans e??itimi ald?????? y??llarda Gelece??i Yazanlar taraf??ndan verilen 2 g??nl??k Android geli??tirme e??itimine kat??ld??. Bu e??itimin ard??ndan Android geli??tirmeye ba??layan ??l??er, hen??z ????rencilik y??llar??nda kendi okulunun bilgi-i??lem uygulamas??n?? geli??tirdi. Sonras??nda geli??tirdi??i projeler do??rultusunda e??itim bursu kazand?? ve Bilgisayar M??hendisli??ine ge??i?? yapt??. ??u anda Gelece??i Yazan Kad??nlar projesinde Android e??itmeni olarak g??rev almakta.</p>
    </Col>
    <Col >
    <img style={{width:130, height:130, alignContent:'center'}} src={elif} alt="logo"></img>
<h3 style={{fontSize:20}}>Elif G??kta??</h3>
<p style={{color:'grey',paddingRight:150}}>Kayseri???de ev han??m?? olarak hayat??n?? s??rd??ren Elif G??kta??, Gelece??i Yazanlar ile tan????t?? ve online e??itimler almaya ba??lad??. Sonras??nda Gelece??i Yazan Kad??nlar projesine kat??ld?? ve ald?????? e??itimlerin ard??ndan Turkcell???de tester olarak ??al????maya ba??lad??. 1 y??l 8 ay boyunca tester olarak g??rev alan G??kta??, Eyl??l 2019???dan bu yana Turkcell Genel Merkezi???nde Gelece??i Yazan Kad??nlar tak??m lideri olarak ??al??????yor.</p>
    </Col>
  
   
    
  </Row>

  <Row>
      <h2 style={{paddingLeft: 500, paddingTop: 50, fontWeight:'bold', paddingBottom: 50}}>
          Aram??za Kat??l!
      </h2>
      <p style={{paddingLeft: 200, paddingRight:300, fontSize:20}}>
      Gelece??i Yazanlar portal??na ??ye olarak, uygulama geli??tiricilere sa??lanacak olan pek ??ok avantajdan faydalanabilir ve etkinliklerden haberdar olabilirsin!
      </p>
      <div style={{paddingLeft: 600, paddingBottom:40}}>
      <button style={{borderRadius:20, width:200, }}  type="button" class="btn btn-warning">??ye Ol</button>
      </div>
  </Row>
  <Row style={{backgroundColor:'#263170', paddingLeft:150,paddingTop:50}}>
<Col>
<a style={{color:'white',textDecoration:'none', }} href="url">Hakk??m??zda</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white', textDecoration:'none'}} href="url">Kullan??m ??artlar??</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">Gizlilik Politikas??</a>

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
<a style={{color:'white',textDecoration:'none'}} href="url">Bize Ula????n</a>

</Col>
  </Row>
  <Row style={{backgroundColor:'#263170',paddingLeft:150,paddingTop:15}}>
<Col>
<a style={{color:'white',textDecoration:'none'}} href="url">E??itimler</a>

</Col>
  </Row>

</div>

        )
    }
}
