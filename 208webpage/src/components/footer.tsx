
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">© 2024 208Trader</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#privacy" className="text-white-50 text-decoration-none me-2">Privacy Policy</a>
            <a href="#terms" className="text-white-50 text-decoration-none">Terms of Use</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
