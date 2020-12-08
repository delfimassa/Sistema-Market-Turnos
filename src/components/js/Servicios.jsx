import React from "react";
import { Container, } from "react-bootstrap";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card'
import styled from "styled-components";
import servicios1 from "../img/servicios1.jpg";
import servicios2 from "../img/servicios2.jpg";
import servicios3 from "../img/servicios3.jpg";
import servicios4 from "../img/servicios4.jpg";
import servicios5 from "../img/servicios5.jpg";
import servicios6 from "../img/servicios6.jpg";
import servicios7 from "../img/servicios7.jpg";
import servicios8 from "../img/servicios8.jpg";
import servicios9 from "../img/servicios9.jpg";
import servicios10 from "../img/servicios10.jpg";
import servicios11 from "../img/servicios11.jpg";
import servicios12 from "../img/servicios12.jpg";
import servicios13 from "../img/servicios13.jpg";
import servicios14 from "../img/servicios14.jpg";
import servicios15 from "../img/servicios15.jpg";
import servicios16 from "../img/servicios16.jpg";
import servicios17 from "../img/servicios17.jpg";
import servicios18 from "../img/servicios18.jpg";
import video from ".././img/Euk_Homepage_Video.mp4";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Servicios() {
  return (
    <Container>
      <div className="container fluid mt-3">
        <h3 className="text-center mt-5"> Nuestros Servicos </h3>
      </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          <img src={servicios15} className="imgserv p-2" alt="" />
          <img src={servicios13} className="imgserv p-2" alt="" />
          <img src={servicios2} className="imgserv p-2" alt="" />
          <img src={servicios17} className="imgserv p-2" alt="" />
          <img src={servicios11} className="imgserv p-2" alt="" />
          <img src={servicios3} className="imgserv p-2" alt="" />
          <img src={servicios6} className="imgserv p-2" alt="" />
          <img src={servicios18} className="imgserv p-2" alt="" />
          <img src={servicios9} className="imgserv p-2" alt="" />
          <img src={servicios4} className="imgserv p-2" alt="" />
          <img src={servicios5} className="imgserv p-2" alt="" />
          <img src={servicios10} className="imgserv p-2" alt="" />
          <img src={servicios12} className="imgserv p-2" alt="" />
          <img src={servicios16} className="imgserv p-2" alt="" />
        </Carousel>
      </div>

      <div className="jumbotron text-center container">
        <p className="letra1">
          Lo primero que tienes que saber es que amamos a los animales, tenemos
          personal dedicado y avocado a la salud de todos nuestros amigos
          peludos, por eso le damos a tu mascota el mejor cuidado. Te ofrecemos:
        </p>
        <ul className="list-unstyled ">
          <li>Consultario Veterinario 24hs</li>
          <li>Especialistas</li>
          <li>Internacion</li>
          <li>Cirugia</li>
          <li>Laboratorio propio</li>
          <li>Revision general</li>
            <li>Asistencia integral</li>
            <li>Vacunacion</li>
            <li>Desparasitaciones</li>
            <li>Certificado de salud</li>
            <li>Colocacion de microchip en mascotas</li>
        </ul>
      </div>
<section className="row text-center justify-content-center py-3">
<CardDeck>
  <Card>
    <Card.Img variant="top" src={servicios14} />
    <Card.Body>
      <Card.Title>Urgencias</Card.Title>
      <Card.Text>
      Tenemos un gran equipo de
            medicos veterinarios capacitados para darle atención integral a tu
            mascota las 24HS - 365 dias del Año. Algunos servicios para tu
            mascota en nuestro consultorio.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={servicios7} />
    <Card.Body>
      <Card.Title>Asistencia todo el año</Card.Title>
      <Card.Text>
      Gracias a nuestra
              disponibilidad 24 horas los 365 dias del año,tambien podemos
              ofrecerte el servicio de internacion.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={servicios8} />
    <Card.Body>
      <Card.Title>Cirugias </Card.Title>
      <Card.Text>
      Disponemos de un quirofano
          completamente equipado para realizar todo tipo de cirugias;desde las
          mas sencilla hasta intervenciones quirurgicas de alta complejidad
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>
     
      </section>
    </Container>
  );
}
