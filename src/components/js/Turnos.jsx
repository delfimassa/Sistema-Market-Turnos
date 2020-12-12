import React, { useState, Fragment } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalTurnos from "./ModalTurnos";
import Emergencia from "../img/Emergencia.jpg";
import Castracion from "../img/Castracion.jpg";
import Controles from "../img/Control.jpg";
import ClinicaVet from "../img/ClinicaVet.jpg";
import Peluqueria from "../img/Peluqueria.jpg";
import Guarderia from "../img/Guarderia.jpg";
import { animateScroll as scroll } from "react-scroll";
export default function Turnos({
  setBanderaTurnos,
  turno,
  setTurno,
  turnos,
  setTurnos,
}) {
  const [modalblock, setModalblock] = useState(false);
  const handleOnclick = () => {
    setModalblock(true);
    //scroll.scrollToBottom();
  };
  return (
    <Fragment>
      <Container className="d-flex inline-block mt-5">
        <Row className="justify-content-center">
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Emergencia}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title className="text-cenetr">Emergencias</Card.Title>
              <Card.Text>
                Contamos con un servicio veterinario de emergencias, una guardia
                disponible las 24hs del día, los 365 días del año.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Castracion}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title>Castraciones</Card.Title>
              <Card.Text>
                Ofrecemos un servicio de castraciones económicas para tus
                mascotas, con todos los estándares correspondientes para la
                salud de tu mascota.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Controles}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title>Controles</Card.Title>
              <Card.Text>
                Ofrecemos continuos controles para tus mascotas, asegurándonos
                así su salud y correcta evolución del tratamiento.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={ClinicaVet}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title>Clínica</Card.Title>
              <Card.Text>
                Una amplia clínica con excelentes profesionales, con marcada
                trayectoria profesional. Además, disponemos de todos los
                elementos necesarios (Rayos, Ecografías, etc.) para la atención
                de tu mascota.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Peluqueria}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title>Peluquería</Card.Title>
              <Card.Text>
                Contamos con todos los elementos necesarios para el cuidado de
                tus mascotas, sabemos que su limpieza es tan importante como su
                salud! También retiramos a tus mascotas de tu domicilio!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="my-3 mx-1 shadow" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={Guarderia}
              className="border border-light"
              style={{ height: "11rem" }}
            />
            <Card.Body>
              <Card.Title>Guardería Canina</Card.Title>
              <Card.Text>
                Sabemos que pueden presentarse ocaciones en el que necesites
                algún lugar dónde dejar tu mascota, nosotros te ofrecemos un
                lugar dónde tu mascota estará siempre en excelente cuidado!
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Row>
        <Button
          className="mt-5 mb-5 nav-info orange mx-auto"
          size="lg"
          onClick={handleOnclick}
        >
          Reserva de turno Online
        </Button>
      </Row>
      {modalblock ? (
        <ModalTurnos
          setBanderaTurnos={setBanderaTurnos}
          modalblock={modalblock}
          setModalblock={setModalblock}
          turno={turno}
          setTurno={setTurno}
          turnos={turnos}
          setTurnos={setTurnos}
        />
      ) : (
          ""
        )}
    </Fragment>
  );
}
