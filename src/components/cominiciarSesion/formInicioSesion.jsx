import { useState } from "react";
import { Card, Button, Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";
import "./FormInicioSesion.css";
import { LuStore } from "react-icons/lu";

export default function FormInicioSesion() {

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
            
  
          <Form className="form" onSubmit={handleLogin}>
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
          <div className="button">
          <Button className="bottoninit w-100">Iniciar Secion</Button>
          </div>
          </Card.Body>
          </Card>  
          </div> 
  );
}