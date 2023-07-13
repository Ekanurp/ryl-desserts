import {Container, Row, Col} from "react-bootstrap";

const KetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="fw-bold text-center mb-2">Syarat & Ketentuan</h1>
            <h5 className="text-center mb-3">Ketentuan Order Hampers Hari Besar</h5>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col>
            <p>1. Fix order bisa langsung mengisi format order yang tersedia di Whatsapp</p>
            <p>2. Hampers yang dapat dipesan hanya yang tersedia di pricelist</p>
            <p>3. Setelah mengisi format order, admin akan memberi info total dan no. Rekening</p>
            <p>4. Pembayaran All via. Transfer BCA-BRI-Mandiri dengan menyertakan bukti transfer</p>
            <p>5. Jika dalam 48 jam belum ada konfirmasi dari customer, maka order dianggap batal</p>
            <p>6. Jam pengambilan pudding 09.00-16.00 (jika perlu jam khusus silakan konfirmasi ke admin)</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default KetenPage