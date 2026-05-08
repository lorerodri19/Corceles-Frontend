import { useState } from "react";
import { Card, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import "./formInicioSesion.css";
import { LuStore } from "react-icons/lu";
import { FaLock } from "react-icons/fa";

function FormInicioSesion() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(usuario, password);
  };

  return (
    <div className="container-login">
      <Card className="card-login">
          <Card.Body className="card-body">
            <div className="card-header-login">
              <div className="icono"><LuStore /></div>
              <h2 className="titulo-login">Los Corceles </h2>
              <p className="desc-login">Sistema de ventas e inventario</p>
            </div>
            
  
          <Form className="section-padding" onSubmit={handleLogin}>
            <div className="inputs">
            <FormLabel className="labelform">Usuario</FormLabel>
              <Form.Control
              className="mb-3"
              type="text"
              placeholder="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}/>
            </div>
             <div className="inputs">
              <Form.Label className="labelform">Contraseña</Form.Label>
                <Form.Control className="mb-3"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </div>
    
          </Form>
          <div className="button section-padding">
          <Button type="submit" className="bottoninit " >Iniciar Sesión</Button>
          </div>
          <p className="nota section-padding"><FaLock /> Acceso exclusivo para personal autorizado</p>
          </Card.Body>
          </Card>  
          </div> 
  );
}
export default FormInicioSesion;