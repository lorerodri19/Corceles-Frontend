import { Container, CardBody, Card, Button, Form, Row, Col} from "react-bootstrap";
import { LuPackage } from "react-icons/lu";
import "./Productos.css";
import { useState } from "react";
function Productos(){
    
    return(
        <>
        <Container>
            <Card className="card-producto">
                <CardBody>
                     {/* ENCABEZADO */}
                    <div className="encabezado-productos section-padding">
                        <h2>
                           <LuPackage/> Agregar nuevo producto
                        </h2>
                    </div>
                    {/* INPUTS */}
                    <div className="section-padding">
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Código del producto</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Nombre del producto</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            </Row>
                            <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Precio unitario</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Tipo de medida</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            </Row>
                            <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Cantidad disponible</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="label">Fecha de vencimiento</Form.Label>
                                    <Form.Control 
                                    type="date"
                                    placeholder=""
                                    />
                                </Form.Group>
                            </Col>
                        </Row> 
                        {/* BOTÓN AGREGAR */}
                        <Button className="w-100 m-0 Botton-agregar">
                        + Agregar Producto
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </Container>
        </>
    )
}
export default Productos;