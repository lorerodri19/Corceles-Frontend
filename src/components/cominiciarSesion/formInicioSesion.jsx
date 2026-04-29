import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import "./FormInicioSesion.css";

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

        <h2 className="titulo">Los Corceles 🐎</h2>

        <Form onSubmit={handleLogin}>

          <Form.Control
            className="mb-3"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <Form.Control
            type="password"
            className="mb-3"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="w-100">
            Iniciar sesión
          </Button>

        </Form>

      </Card>

    </div>
  );
}