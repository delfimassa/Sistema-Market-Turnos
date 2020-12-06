import React from "react";
import { Container,Form } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <Container fluid className="nav-info py-4">
      <section className="py-4">
        <div className="text-center row text-light py-3">
          <div className="col-sm-12 col-md-4 list-unstyled mb-4 d-flex flex-column justify-content-around">
            <Form>
              <h3 className="text-white mt-3">Accesos</h3>

              <Link to="/Home/Inicio" className="nav-link text-light"></Link>
              <Link to="/Home/Conocenos" className="nav-link text-white">
                Conocenos
              </Link>
              <Link to="/Home/Servicios" className="nav-link text-white">
                Servicios
              </Link>
              <Link to="/Home/Tienda" className="nav-link text-white">
                Tienda
              </Link>
              <Link to="/Home/Contacto" className="nav-link text-white">
                Contacto
              </Link>
              <Link to="/Home/Cart" className="nav-link text-white">
                Ir a mis compras
              </Link>
            </Form>
          </div>
         
          <div className="col-sm-12 col-md-4 sm-mb-4">
            <h4 className="text-white mb-4 text-center">¡¡Síguenos!!</h4>
            
              <a href="http://www.facebook.es" target="blank">
                <i className="fab fa-facebook-square  patita2 pl-1 mr-1"></i>
              </a>
              <a href="http://www.youtube.com" target="blank">
                <i className="fab fa-youtube-square patita2  mr-1"></i>
              </a>
              <a href="http://www.instagra.com" target="blank">
                <i className="fab fa-instagram-square patita2 mr-1"></i>
              </a> 
              <p className="carrito text-light mt-2">
              <i className="fa fa-phone-square"> </i>Tel de contacto: +54 9
              (0381) 155 234 432
            </p>
            <p className="carrito text-light">
              <i className="fa fa-home"></i> Dirección: Rolling St. 38 - San
              Miguel de Tucumán, Tucumán - Argentina.
            </p>
            <h5 className="border-top text-light text-center ">
              Emergencias las 24hs.
            </h5>
            </div>
        <div className="col-sm-12 col-md-4 sm-mb-4">
            <div className="text-center">
              <i className="fas fa-paw patita2 mr-2"></i>
              <h4 className="text-white">Veterinaria</h4>
            </div>
            {/* <blockquote className="blockquote mt-4">
              <p className="text-white">
                Un veterinario no solo ama a los animales, los cuida hasta
                silenciar un dolor mudo, que los humanos no podemos escuchar. -
                J.C.-{" "}
              </p>
            </blockquote> */}
        </div>
        </div>
        <div className=" text-center text-light">
          <h6>&copy; Todos los derechos reservados</h6>
        </div>
       </section>
    </Container>
  );
}