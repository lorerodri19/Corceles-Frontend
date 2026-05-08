import { Container, CardBody, Card, Button, Form, Row, Col } from "react-bootstrap";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import "./Facturacion.css";


function Facturacion (){
    const [codigo, setCodigo] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0);
    const [recibido, setRecibido] = useState(0);
    const [tipoVenta, setTipoVenta] = useState("cliente");

    const cambio = recibido - total;
    return(
        <>
        <Container className="card-facturacion">
    <Card className="card-facturacion">
      <CardBody className="p-0">

        {/* ENCABEZADO */}
        <div className="encabezado-facturacion section-padding">
          <h2 className="d-flex align-items-center gap-2 m-0 text-white">
            <LuShoppingCart /> Sistema de Facturación
          </h2>
          <p className="fecha-actual m-0">fecha actual</p>
        </div>

        {/* INPUTS */}
        <div className="section-padding">
          <Row className="mb-3">
            <Col md={8}>
              <Form.Group>
                <Form.Label className="label">Código del producto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Escanea o ingresa el codigo"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group>
                <Form.Label className="label">Cantidad</Form.Label>
                <Form.Control
                  type="text"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* BOTÓN AGREGAR */}
          <Button className="w-100 m-0 Botton-agregar">
            + Agregar al carrito
          </Button>
        </div>

        {/* BLOQUE INFERIOR */}
        <div className="section-padding">

          <div className="cuerpo2 section-padding">

            {/* TOTAL */}
            <div className="total-pagar">
              <p className="m-0 total">Total a pagar</p>
              <h2 className="to">${total}</h2>
            </div>

            {/* PAGO */}
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label className="label">Dinero recibido</Form.Label>
                  <Form.Control
                    type="number"
                    value={recibido}
                    onChange={(e) => setRecibido(Number(e.target.value))}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label className="label">Cambio</Form.Label>
                  <Form.Control
                    type="text"
                    value={`$${cambio >= 0 ? cambio : 0}`}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* TIPO DE VENTA */}
            <Form.Label className="label">Tipo de Venta</Form.Label>
            <div className="button-section mb-3">
              <Button
                variant="secondary"
                onClick={() => setTipoVenta("cliente")}
                className={`flex-fill ${tipoVenta === "cliente" ? "active" : ""}`}
              >
                Venta a Cliente
              </Button>

              <Button
                variant="secondary"
                onClick={() => setTipoVenta("hogar")}
                className={`flex-fill ${tipoVenta === "hogar" ? "active" : ""}`}
              >
                Consumo Hogar
              </Button>
            </div>

            {/* FINALIZAR */}
            <Button
              variant="secondary"
              className="w-100 botton-finalizar"
              disabled={total === 0}
            >
              Finalizar venta
            </Button>

          </div>
        </div>

      </CardBody>
    </Card>
  </Container>
        </>
    )
}
export default Facturacion;