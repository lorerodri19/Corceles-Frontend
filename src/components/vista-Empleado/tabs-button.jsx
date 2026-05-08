import "./Tabs-button.css";
import"./facturacion.jsx";
import { Container, Tab, Tabs } from "react-bootstrap";
import Facturacion from "./facturacion.jsx";
import Ventas from "./ventas.jsx";
import Productos from "./productos.jsx"

function TabsSecciones() {
    return (
        <>
        <Container className='Card'>
        
            <Tabs defaultActiveKey="Facturacion"  className="mb-3 px-0 custom-tabs" variant="tabs" >
                <Tab eventKey="Facturacion" title="Facturación" >
                    <Facturacion/>
                </Tab>
                <Tab eventKey="Ventas" title="Ventas" >
                    <Ventas/>
                </Tab>
                <Tab eventKey="Productos" title="Productos" >
                    <Productos/>
                </Tab>
            </Tabs>
            
        </Container>
    </>
    )
}
export default TabsSecciones;