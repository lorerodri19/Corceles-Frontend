import "./Tabs-button.css";
import"./facturacion.jsx";
import { Container, Tab, Tabs } from "react-bootstrap";
import Facturacion from "./facturacion.jsx";

function TabsSecciones() {
    return (
        <>
        <Container className='Card'>
        
            <Tabs defaultActiveKey="Facturacion"  className="mb-3 px-0 custom-tabs" variant="tabs" >
                <Tab eventKey="Facturacion" title="Facturación" >
                    <Facturacion/>
                </Tab>
                <Tab eventKey="Ventas" title="Ventas" >
                    
                </Tab>
                <Tab eventKey="Productos" title="Productos" >
                    
                </Tab>
            </Tabs>
            
        </Container>
    </>
    )
}
export default TabsSecciones;