import React from "react";
import { Container } from "react-bootstrap";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";

function MainVideo({ video }) {
  let scrollTo = () => {
    scrollTo(500);
  };

  const { pathname } = useLocation();
  const showVideo =
    pathname !== "/Home/Tienda" &&
    pathname !== "/Home/Turnos" &&
    pathname !== "/Home/Cart";
  const className = `p-0 bg-light ${showVideo ? "" : "d-none"}`;
  return (
    <>
      <Container fluid className={className}>
        <div className="embed-responsive embed-responsive-16by9 hidden-xs">
          <video
            width="100%"
            height="100%"
            className="embed-responsive-item"
            id="home-hero-vid"
            autoPlay={true}
            loop={true}
            controls={false}
            muted
            src={video}
            onMouseMove={() => scroll.scrollTo(300)}
          >
            Your browser does not support the video tag.
          </video>
          <div>
            <h2 className="letravideo text-center">
              Por Un Mundo Mejor Para Tu Mascota
            </h2>
          </div>
        </div>
      </Container>
      {!showVideo && <div style={{ height: "90px" }}></div>}
    </>
  );
}

export default MainVideo;
