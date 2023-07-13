import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import TestiImage from '../assets/img/write.png';

const TestimoniPage = () => {
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

  return (
    <div className='testimonial-page'>
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className='text-center fw-bold'>Testimoni</h1>
              <p className='text-center'>Yukk beri kami testimoni bagaimana pengalaman anda merasakan menu pudding kami.</p>
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
                  <input type="submit" value="Send Message" />
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default TestimoniPage