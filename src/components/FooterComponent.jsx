import { Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom"

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Royal Desserts</h3>
            <p className="desc">Premiun Salad & Pudding Jogja
            Halal MUI Certified & Ready Stock</p>
              <div className="no mb-1 mt-4">
                <Link className="text-decoration-none" to="https://wa.me/628562997222">
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">+62 856-2997-222</p>
                </Link>
              </div>
              <div className="mail">
                <Link className="text-decoration-none">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">RoyalDesserts@gmail.com</p>
                </Link>
              </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-3">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/testimoni">Testimoni</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/keten">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-3">
            <h5 className="fw-bold">Follow untuk info menarik</h5>
            <div className="social">
              <Link to="https://instagram.com/royal_puddingjogja?igshid=MzRlODBiNWFlZA==">
              <i className="fa-brands fa-instagram"> ROYAL_PUDDINGJOGJA</i>
              </Link>
              <h3 className="location"><span className="fw-bold">Location:</span> <br/> Jl. Parasamya No.29, Beran Lor, Beran, Kec. Sleman, 
              Kabupaten Sleman, Daerah Istimewa Yogyakarta 55511</h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Royal Desserts</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent