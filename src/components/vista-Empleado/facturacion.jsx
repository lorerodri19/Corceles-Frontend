import { Container, CardBody, Card, Button, Form, Row, Col } from "react-bootstrap";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";


function Facturacion (){

    const [codigo, setCodigo] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [total, setTotal] = useState(0);
    const [recibido, setRecibido] = useState(0);
    const [tipoVenta, setTipoVenta] = useState("cliente");

    const cambio = recibido - total;
    return(
        <>
        <Container className="container-facturacion">
            <Card className="card-facturacion">
                <CardBody>
                    {/* ENCABEZADO */}
                    <div className="encabezado-facturacion">
                        <div className="title-facturacion">
                        <LuShoppingCart /> Sistema de Facturación
                        <p className="fecha-actual">fecha actual</p>
                        </div>
                    </div>
                     {/* INPUTS */}
                     <Row className="mb-3">
                        <Col md={8}>
                        <Form.Group>
                            <Form.Label>Código del producto</Form.Label>
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
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                            type="number"
                            value={cantidad}
                            onChange={(e) => setCantidad(e.target.value)}
                            />
                        </Form.Group>
                        </Col>
                     </Row>
                     {/* BOTÓN AGREGAR */}
                     <Button>
                        + Agregar al carrito 
                     </Button>
                     {/* TOTAL */}
                     <div>

                     </div>
                    <div>
                        <p className="total">Total a pagar </p>
                        <h2 className="to">${total}</h2>
                    </div>
                     {/* PAGO */}
                     <Row className="mb-3">
                        <Col>
                        <Form.Group>
                            <Form.Label>Dinero recibido</Form.Label>
                            <Form.Control
                            type="number"
                            value={`$${cambio >= 0 ? cambio : 0}`}
                            onChange={(e) => setRecibido(Number(e.target.value))}
                            />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                            <Form.Label>Cambio</Form.Label>
                            <Form.Control
                            type="text"
                            value={`$${cambio >= 0 ? cambio : 0}`}
                            disabled
                            />
                        </Form.Group>
                        </Col>
                     </Row>
                     {/* TIPO DE VENTA */}
                     <div className="button-section">
                        <Button
                        variant={tipoVenta === "cliente" ? "warning" : "secondary"}
                        onClick={() => setTipoVenta("cliente")}
                        className="w-50"
                        >Venta a Cliente</Button>
                        <Button
                        variant={tipoVenta === "hogar" ? "warning" : "secondary"}
                        onClick={() => setTipoVenta("hogar")}
                        className="w-50"
                        >Consuamo Hogar </Button>

                     </div>
                      {/* FINALIZAR */}
                       <Button
                        variant="secondary"
                        className="w-100"
                        disabled={total === 0}
                    >
                        Finalizar venta
                    </Button>

                </CardBody>
            </Card>
        </Container>
        </>
    )
}
export default Facturacion;