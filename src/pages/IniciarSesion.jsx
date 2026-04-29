import { Container, Row, Col } from "react-bootstrap";
import FormInicioSesion from "../components/cominiciarSesion/formInicioSesion";

const IniciarSesion = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="justify-content-center w-100">
        <Col xs={12} md={6} lg={4}>
          <FormInicioSesion />
        </Col>
      </Row>
    </Container>
  );
};

export default IniciarSesion;