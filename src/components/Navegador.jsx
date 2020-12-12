import React, { useState } from "react";
import {
  Container,
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  Dropdown,
  ButtonGroup,
  Row,
  Col
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Sesion from "./js/Sesion";
import Registro from "./js/Registro";
import "../App.css";

export default function Navegador({
  setBanderaProductos1,
  ModalShow,
  setModalShow,
  prod,
  setprod,
  productos,
  suma,
  carroTotal,
  autenticado,
  token,
  setToken,
  usuarioAuth,
  setUsuarioAuth,
  setAutenticado,
  encontrado,
  setEncontrado,
  search,
  setSearch,
  setSuma
}) {
  const history = useHistory();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleOnClick = (event) => {
    if (search) {
      setBanderaProductos1(true);
      history.push("/Home/Tienda");
    }
  };

  return (
    <>
      <Container fluid className=" fixed-top nav-info ">
            <Navbar expand="lg">
              <Navbar.Brand>
                <Link to="/Home" className="nav-link m-0">
                  <i className="fas fa-paw patita2 nav-link">
                    <span className=" m-0 p-0"> Veterinaria</span>
                  </i>{" "}
                </Link>{" "}
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="basic-navbar-nav "
                className="nav-info "
              />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className=" mr-auto">
                  
                    <div className="mt-3 d-flex flex-column flex-lg-row">
                      <Link
                        to="/Home/Conocenos"
                        className="nav-link  text-white d-inline"
                      >
                        Conocenos{" "}
                      </Link>
                      <Link
                        to="/Home/Servicios"
                        className="nav-link  text-white d-inline"
                      >
                        Servicios{" "}
                      </Link>
                      <Link
                        to="/Home/Tienda"
                        className="nav-link  text-white d-inline"
                      >
                        Tienda{" "}
                      </Link>
                      <Link
                        to="/Home/Contacto"
                        className="nav-link  text-white d-inline"
                      >
                        Contacto{" "}
                      </Link>
                      <Link
                        to="/Home/Turnos"
                        className="nav-link text-white d-inline"
                      >
                        Turnos{" "}
                      </Link>

                      {autenticado && !usuarioAuth.isUser ? (
                        <Link to="/Admin" className="nav-link ">
                          Admin 
                        </Link>
                      ) : (
                        ""
                      )}
                      <Nav.Link
                        onClick={() => setModalShow(true)}
                        className="nav-link  text-white"
                      >
                        {usuarioAuth ? "" : "Login"}
                      </Nav.Link>
                      <Sesion
                        setModalShow={setModalShow}
                        show={ModalShow}
                        onHide={() => setModalShow(false)}
                        setToken={setToken}
                        setUsuarioAuth={setUsuarioAuth}
                        setAutenticado={setAutenticado}
                      />
                      {!autenticado ? (
                        <Redirect to="/home " />
                      ) : (
                        () => setModalShow(false)
                      )}
                    </div>
                    <div className="mt-2 p-2 d-inline">
                      <div className="d-flex nowrap">
                        {autenticado ? (
                          <Dropdown className="text-warning  b-0 d-inline ml-2 mr-4 ">
                            <Dropdown.Toggle
                              id="dropdown-basic"
                              variant="nav-link"
                              className=" btnsesion text-warning m-0  d-inline"
                            >
                              <i className="far fa-user link orange1   ml-1 "></i>{" "}
                              <p className="d-inline">
                                Hola {usuarioAuth.nombre}!
                              </p>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="nav-info butnsesion  b-0">
                              <Button
                                variant="link"
                                className="text-warning  b-0 m-0 "
                                onClick={() => {
                                  setToken(null);
                                  setSuma(0);
                                }}
                              >
                                Cerrar Sesion
                              </Button>
                            </Dropdown.Menu>
                          </Dropdown>
                        ) : (
                          ""
                        )}

                        <Link
                          to="/Home/Cart/"
                          className="text-white d-inline "
                          title="Ir a mis compras"
                        >
                          {!autenticado ? (
                            <Nav.Link
                              onClick={() => setModalShow(true)}
                              className="nav-link  text-white d-inline "
                            >
                              <i className="fas fa-shopping-cart patita2 mr-1 "></i>{" "}
                            </Nav.Link>
                          ) : (
                            <Link
                              to="/Home/Cart/"
                              className="nav-link  text-white d-inline"
                            >
                              <i className="fas fa-shopping-cart patita2 mr-1"></i>
                            </Link>
                          )}
                        </Link>
                        <p className="text-light ">${suma}</p>
                      </div>
                    </div>
                </Nav>
              
            <Form className="d-flex nowrap">
              <FormControl
                type="text"
                placeholder="Buscar productos,categorias,etc ..."
                className=""
                name="search"
                value={search}
                id="buscarProducto"
                onChange={handleChange}
              ></FormControl>
              <Button variant="src-header" onClick={handleOnClick}>
                <i className="fas fa-search patita2"></i>
              </Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
      </Container>
    </>
  );
}