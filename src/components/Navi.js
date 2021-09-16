import React, { Component } from 'react'
import logo from '../assets/logo.svg';
import improve from '../assets/improve.svg';
import learn from '../assets/learn.svg';
import chance from '../assets/chance.svg';
import slider1 from '../assets/slider1.PNG';
import './Navi.css'
import {Container, Row, Col} from 'react-bootstrap';
import SimpleImageSlider from "react-simple-image-slider";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
export default class Navi extends Component {

    render() {
        return (
            <div>
                  <Container>
            <Row>
              <Col xs="4" className='logo'><img src={logo} alt="logo"></img></Col>

      <Col className="navitem"  xs="1">
      <a style={{textDecoration:'none',}} className="h" href="/forum">Forum</a>
      </Col>
      <Col style={{}} className="navitem"  xs="1">
      <a style={{textDecoration:'none',}} className="h" href="/blog">Blog</a>

    
      </Col>
      <Col  style={{}} className="navitem"  xs="1">
      <div class="dropdown">
      <a style={{textDecoration:'none',}} className="h"  href="/egitimler">Eğitimler</a>
  <div class="dropdown-content">
    <a href="#">Tüm Katalog</a>
    <a href="#">Temel Linux</a>
    <a href="#">Veri Bilimi</a>
    <a href="#">Mobil Programlama</a>
    <a href="#">Oyun Programlama</a>
    <a href="#">Programlama</a>
    <a href="#">Robotik Kodlama</a>
    <a href="#">Veritabanı Programlama</a>
    <a href="#">Dijital Okuryazarlık</a>
   
  </div>
</div>
      </Col>
      <Col  style={{}} className="navitem"  xs="1">
      <div class="dropdown">
      <a style={{textDecoration:'none',}} className="h"  href="/forum">Topluluk</a>
  <div class="dropdown-content">
    <a href="#">Sosyal Programlarımız</a>
    <a href="#">Gönüllülerimiz</a>
   
  </div>
</div>
      </Col>

      <Col style={{}} className="navitem"  xs="1">
      <a style={{textDecoration:'none',}} className="h"  href="/isilan">İş İlanları</a>
      
      </Col>
      
      
     
              <Col xs="2" className='buttongiris'><button  type="button" class="btn btn-warning">Giriş Yap</button></Col>
              <Col xs="1"  style={{paddingTop:30}} > <input type="text" name="search" placeholder="Search.."/> </Col>
            </Row>
       
    
          </Container>
            </div>
        )
    }
}
