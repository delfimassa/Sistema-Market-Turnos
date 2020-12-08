import React, { useState } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card_Flipp from "./Card_Flipp";

export default function Conocenos() {
  return (

    <section className="container mt-5">
      <Jumbotron className=" content m-2">
         <h3 className="fuente text-center">Quienes somos</h3>
  <p>
    Somos una clínica veterinaria con más de 10 años de experiencia en el
          rubro y profesionales altamente calificados y especialmente
          seleccionados, trabajamos a diario con el objetivo de lograr la
          satisfacción de nuestros pacientes y brindarle una atención de la más
          alta calidad.
   
  </p>
  <p>
    Contamos con veterinarios profesionales con amplia experiencia que
          ofrecen un trato esmerado al momento de atender cualquier situación
          que se presente con su mascota.
  </p>
     <p className="mb-0">
            La Medicina cura al hombre,la Medicina Veterinaria cura a la
            humanidad. {" "}
            <cite title="Source Title">Luis Pasteur</cite>
          </p>
         

</Jumbotron>
      

      {<Card_Flipp />}
    </section>
  );
}
