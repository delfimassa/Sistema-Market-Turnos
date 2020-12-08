import React, { Fragment, useState } from "react";
import { Container, Form, Button} from "react-bootstrap";
export default function Contacto() {
  const [contacto, setContacto] = useState({
    subject: "",
    mail: "",
    msg: "",
    mailuser: "",
  });
  const handleChange = (event) => {
    setContacto({
      ...contacto,
      [event.target.name]: event.target.value,
      mail: "gimenalazarte7@gmail.com",
    }); // mail del veterinario
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (contacto.subject === "") {
      alert("Ingrese Tema");
      return;
    }
    if (contacto.mail === "") {
      alert("Ingrese mail");
      return;
    }
    if (contacto.msg === "") {
      alert("Ingrese msg");
      return;
    }

    //  const {subject,mail,msg}=req.body;
    ///api/enviarEmail
    const solicitud = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/api/enviarEmail/",
      {
        method: "POST",
        body: JSON.stringify(contacto),
        headers: {
          "Content-Type": "application/json",
          // "x-token": token,
        },
      }
    );
    const respuesta = await solicitud.json();
    if (solicitud.ok) {
      alert("Mail entregado");
      setContacto({ subject: "", mail: "", msg: "", mailuser: "" });
    } else {
    }
    setContacto({ subject: "", mail: "", msg: "", mailuser: "" });
  };
  return (
    
      <section className="container mt-5">
        <div className="row mt-3"> 
       
          <div className="col-12 col-md-6 mt-5"> 
          <h3 className=" text-center">Formulario de Contacto</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNombre">
                <Form.Label>Motivo del Contacto</Form.Label>
                <Form.Control
                  placeholder=""
                  name="subject"
                  value={contacto.subject}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="mail"
                  defaultValue="gimenalazarte7@gmail.com"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email del usuario</Form.Label>
                <Form.Control
                  type="email"
                  name="mailuser"
                  value={contacto.mailuser}
                  placeholder=""
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Label className="fuente">
                Déjanos tu mensaje, ¡A la brevedad nos pondremos en contacto!:{" "}
              </Form.Label>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows="3"
                  maxLength="100"
                  name="msg"
                  defaultValue={contacto.msg}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button className="float-right mb-5 orange" type="submit">
                Enviar
              </Button>
            </Form>
          </div>

          <div className="col-12 col-md-6 mt-5">
            <h2 className="font text-center mt-5">
              <i className="fa fa-home patita2"></i> Dirección
            </h2>
            <ul className="list-unstyled text-center">
              <li> Rolling St. 38 </li>
              <li> San Miguel de Tucumán, Tucumán, Argentina</li>
            </ul>

            <h2 className="font text-center">
              <i className="fa fa-phone-square patita2"></i> Telefonos
            </h2>
            <ul className="list-unstyled text-center">
              <li> (0381) 438 2324 </li>
              <li> (0381) 155 234 432 </li>
            </ul>

            <h2 className="font text-center">
              <i className="fa fa-envelope patita2" aria-hidden="true"></i> Email
            </h2>
            <ul className="list-unstyled text-center">
              <li>veterinaria@gmail.com </li>
            </ul>
          </div>
        </div>
      </section>
    
  );
}
