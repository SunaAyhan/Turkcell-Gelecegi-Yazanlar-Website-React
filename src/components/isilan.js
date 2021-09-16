import React, { Component } from 'react'
import './isilan.css'
import { Container, Row, Col } from 'react-bootstrap';
export default class isilan extends Component {
  render() {
    return (
      <div>
        <Row className="grey"><h2 style={{ fontWeight: 'bold', marginLeft: 150, marginTop: 50 }}>Geleceği Yazanlar İş İlanları
        </h2></Row>

        <Row style={{ backgroundColor: '#edf1f3', height: 280 }}>
          <Col><div style={{ width: 1300, height: 70, marginLeft: 100, paddingleft: 50, paddingTop: 90 }} class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="İş İlanı Ara" aria-label="Search"
              aria-describedby="search-addon" />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div></Col>
          <Col>


          </Col>

        </Row>
        <Row style={{ backgroundColor: '#edf1f3' }} >
          <Col xs="1"><div style={{ width: 300, height: 500, marginLeft: 100 }} class="cardis">
            <div class="vertical-menu">
              <h5 style={{ marginLeft: 5 }}>ŞEHİRLER</h5>
              <hr class="solid"></hr>
              <Row><Col xs="7">  <a href="#">İstanbul Avrupa</a></Col>
              <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:5, width:30, }} disabled>0</button></Col>
<Col xs="2">
<h3 style={{marginLeft:30, color:'blue'}}> {'>'} </h3>
</Col>
              </Row>



              <hr class="solid"></hr>

              <Row><Col xs="7">  <a href="#">Ankara</a></Col>
              <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:5, width:30, }} disabled>0</button></Col>
<Col xs="2">
<h3 style={{marginLeft:30, color:'blue'}}> {'>'} </h3>
</Col>
              </Row>

              <hr class="solid"></hr>
              <Row><Col xs="7">  <a href="#">İzmir</a></Col>
              <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:5, width:30, }} disabled>0</button></Col>
<Col xs="2">
<h3 style={{marginLeft:30, color:'blue'}}> {'>'} </h3>
</Col>
              </Row>

              <hr class="solid"></hr>
              <a href="#">İLAN BAŞLANGIÇ TARİHİ</a>
              <hr class="solid"></hr>
              <Row><Col xs="7">  <a href="#">Bugünün ilanları</a></Col>
              <Col xs="1">  <button type="button" class="btn" style={{backgroundColor:'#ecf0f2', borderRadius:5, width:30, }} disabled>0</button></Col>
<Col xs="2">
<h3 style={{marginLeft:30, color:'blue'}}> {'>'} </h3>
</Col>
              </Row>

            </div>
          </div></Col>
          <Col>
          <div style={{ width: 1000, height: 500, marginLeft: 300 }} class="cardis">

  <div class="containeris">
   
  </div>
</div>
          </Col>


        </Row>
      </div>
    )
  }
}
