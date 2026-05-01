import "./Tabs-button.css";
import { Container, Tab, Tabs } from "react-bootstrap";

function TabsSecciones() {
    return (
        <>
        <Container className='Card'>
        
            <Tabs defaultActiveKey="Facturacion"  className="mb-3 custom-tabs" variant="tabs" fill>
                <Tab eventKey="Facturacion" title="Facturación" >
                    
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