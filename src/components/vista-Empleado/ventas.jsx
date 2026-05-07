import { Container, CardBody, Card, Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Ventas.css"
import { LuDollarSign } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { FiTrendingUp } from "react-icons/fi";
import Table from 'react-bootstrap/Table';

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
            <div className="porcentaje-ventas ">
                <Card className="distribucion-ventas section-padding">
                    <h5>Distribución De Ventas</h5>
                    <div className="fila-venta">
                        <p className="distri">Ventas A Clientes</p>
                        <p className="tot">${0}</p>
                    </div>

                    <div className="fila-venta">
                        <p className="distri">Consumo Hogar</p>
                        <p className="tot">${0}</p>
                    </div>
                </Card>
            </div>
            <div className="div-historial">
                <div className="title-historial-ventas section-padding">
                    <h5>Historial de ventas del día</h5>
                </div>

                <table className="tabla-historial ">
                    <thead>
                        <tr>
                            <th>HORA</th>
                            <th>TIPO</th>
                            <th>ITEMS</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>10:30 AM</td>
                            <td>Efectivo</td>
                            <td>3</td>
                            <td>$25.000</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </Container>
        </>
        )
}
export default Ventas;