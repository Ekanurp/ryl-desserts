import {Container, Row, Col} from 'react-bootstrap';
import PuddingImage from '../assets/img/belgian.png';

import {menuTerbaru} from "../data/index";
import {useNavigate} from "react-router-dom"
import FaqComponent from "../components/FaqComponent"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const HomePage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yydc02c', 'template_h0rfn48', form.current, 'exY9VoZv3UztBupUT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
    
      e.target.reset();
  };

  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className='header-box d-flex align-items-center'>
            <Col lg="6">
              <h1 className='mb-4'>
                Premium Pudding <br/> <span>Dengan Rasa Terbaik!</span>
              </h1>
              <p className='mb-4'>Solusi terbaik mengkonsumsi buah dengan cara kekinian. 
              Keep Healthy and No Boring.</p>
              <button className='btn-menu btn btn-lg rounded-1 me-2' onClick={() => navigate("/menu")}>Lihat Menu</button>
              <button className='btn-promotion btn btn-lg rounded-1' onClick={() => navigate("/paket")}>Paket Hampers</button>
            </Col>
            <Col lg="6" className='pt-lg-0 pt-6'>
            <img src={PuddingImage} alt='Pudding-img'/>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="menu w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>New Variant</h1>
              <p className='text-center'>New Variant Special Size Edition Personal Cup.</p>
            </Col>
          </Row>
          <Row>
              {menuTerbaru.map((menu) => {
                return <Col key={menu.id} className='shadow rounded' data-aos="fade-up" 
                data-aos-duration="1000" data-aos-delay={menu.delay}>
                  <img src={menu.image} alt="unsplash.com" className='mb-3 rounded-top'/>
                  <div className='star mb-2 px-3'>
                    <i className={menu.star1}></i>
                    <i className={menu.star2}></i>
                    <i className={menu.star3}></i>
                    <i className={menu.star4}></i>
                    <i className={menu.star5}></i>
                  </div>
                  <h5 className='mb-4 px-3'>{menu.title}</h5>
                  <div className='ket d-flex justify-content-between align-items-center px-3 pb-3'>
                    <p className='m-0 text-primary fw-bold'>{menu.price}</p>
                    {/* <button className='btn rounded-1'>{kelas.buy}</button> */}
                  </div>
                </Col>
              })}
          </Row>
          <Row>
            <Col className='text-center'>
              <button className='btn rounded-5 btn-lg' onClick={() => navigate("/menu")}>Lihat Semua Menu 
              <i className='fa-solid fa-chevron-right ms-2'></i></button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="testimonial py-3">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Testimonial</h1>
              <p className='text-center mb-4'>Yukk beri kami testimoni bagaimana pengalaman anda merasakan menu pudding kami.</p>
            </Col>
          </Row>
          <Row>
            <Col lg="6" className='write-img pt-lg-0 pt-3'>
              <img src={TestiImage} alt='Testi-img'/>
            </Col>
            <Col lg="6 pt-lg-0">
              <div className='testimonipage'>
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send Message" className='btn-testi'/>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}
      {/* Section FAQ */}
      <FaqComponent/>
    </div>
  );
};

export default HomePage