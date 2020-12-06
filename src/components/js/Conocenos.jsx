import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Card_Flipp from "./Card_Flipp";

export default function Conocenos() {
  return (
    <Container>
      <div>
        <h3 className="fuente text-center mt-5">Quienes somos</h3>
      </div>

      <div>
        <blockquote className="blockquote fuente text-center">
          Somos una clínica veterinaria con más de 10 años de experiencia en el
          rubro y profesionales altamente calificados y especialmente
          seleccionados, trabajamos a diario con el objetivo de lograr la
          satisfacción de nuestros pacientes y brindarle una atención de la más
          alta calidad.
        </blockquote>

        <blockquote className="blockquote fuente text-center">
          Contamos con veterinarios profesionales con amplia experiencia que
          ofrecen un trato esmerado al momento de atender cualquier situación
          que se presente con su mascota.
        </blockquote>

        <blockquote className="blockquote text-center patita2 mt-5">
          <p className="mb-0">
            La Medicina cura al hombre,la Medicina Veterinaria cura a la
            humanidad.
          </p>
          <footer className="blockquote-footer">
            {" "}
            <cite title="Source Title">Luis Pasteur</cite>
          </footer>
        </blockquote>
      </div>

      {<Card_Flipp />}
    </Container>
  );
}
