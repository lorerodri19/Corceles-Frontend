import { Container, CardBody, Card, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Ventas.css"
import { LuDollarSign } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";

function Ventas (){
    return(
        <>
        <Container>
            <div className="tarjetas">
                <Card className="Total-vendido">
                    <p className="tex m-0">Total Vendido Hoy</p>
                    <h2 className="to">${0}</h2>
                    <LuDollarSign className="tarjetas-icons"/>
                </Card>
                <Card className="productos-vendidos">
                    <p className="tex m-0">Productos Vendidos</p>
                    <h2 className="to">{0}</h2>
                    <LuPackage className="tarjetas-icons"/>
                </Card>
                <Card className="total-ventas">
                    <p className="tex m-0">Total De Ventas</p>
                    <h2 className="to">{0}</h2>
                    <FiTrendingUp className="tarjetas-icons"/>
                </Card>
            </div>
            <div className="porcentaje-ventas">
                <Card className="distribucion-ventas">
                    <h5>Distribución De Ventas</h5>
                    <p className="distri">Ventas A Clientes</p>
                    <p className="distri">Consumo Hogar</p>
                </Card>
            </div>
        </Container>
        </>
        )
}
export default Ventas;