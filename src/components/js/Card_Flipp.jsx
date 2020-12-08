import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Container} from "react-bootstrap";
import clinica from "../img/clinica.jpg";
import cirugia from "../img/cirugia.jpg";
import radiog from "../img/radiog.jpg";
import guardia from "../img/guardia.jpg";

const cardStyle = {
  width: 250,
  height: 350,
  margin: 10,
};

const Card_Flipp = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <Container className="mt-5  text-center">
      <div  className="row  text-center">
        <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal "  >
          <div style={{ ...cardStyle }} >
            <img
              src={clinica}
              className="rounded-circle text-center mt-5" 
              width="236"
              height="236"
            />
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Clínica
            </button>
          </div>
         

          <div style={{ ...cardStyle }} className="text-center ">
            <br />
            <br />
            <br />
            <ul className="list-unstyled mt-5">
              <li>Dr. Juan José Ávila</li>
              <li>Dr. Ángel Maurenzzi</li>
            </ul>
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Clínica
            </button>
            </div>

        </ReactCardFlip>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div style={{ ...cardStyle }} className="text-center ">
            <img
              src={cirugia}
              className="rounded-circle mt-5"
              width="236"
              height="236"
            />
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Cirugía
            </button>
          </div>

          <div style={{ ...cardStyle }} className="text-center ">
            <br />
            <br />
            <br />
            <ul className="list-unstyled mt-5">
              <li>Dr. Marcelo Madkur</li>
              <li>Dra. Ileana Acosta</li>
            </ul>
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Cirugía
            </button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div style={{ ...cardStyle }} className="text-center ">
            <img
              src={radiog}
              className="rounded-circle mt-5"
              width="236"
              height="236"
            />
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Radiología
            </button>
          </div>

          <div style={{ ...cardStyle }} className="text-center ">
            <br />
            <br />
            <br />
            <ul className="list-unstyled mt-5">
              <li>Dr. José Ignacio Ruiz</li>
              <li>Dr. Hector Rodriguez</li>
            </ul>
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Radiología
            </button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
          <div style={{ ...cardStyle }} className="text-center ">
            <img
              src={guardia}
              className="rounded-circle mt-5"
              width="236"
              height="236"
            />
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Guardias
            </button>
          </div>

          <div style={{ ...cardStyle }} className="text-center ">
            <br />
            <br />
            <br />
            <ul className="list-unstyled mt-5">
              <li>Dr. Fernando Tomé</li>
              <li>Dra. Florencia Garcia</li>
            </ul>
            <button
              onClick={handleClick}
              className="mt-3 btn btn-primary btn-lg orange"
            >
              Guardias
            </button>
          </div>
        </ReactCardFlip>
      </div>
    </Container>
  );
};

export default Card_Flipp;
