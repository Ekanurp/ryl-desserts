import { Container, Row, Col } from "react-bootstrap";
import {semuaMenu} from "../data/index"

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-0.5s">Semua Menu</h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-0.75s">Coba semua variant pudding kami dan rasakan kelezatan menikmati buah dengan cara kekinian</p>
            </Col>
          </Row>
          <Row>
            {semuaMenu.map((menu) => {
                  return (
                    <Col key={menu.id} className='shadow rounded'>
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
                    </div>
                  </Col>
                )})}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MenuPage