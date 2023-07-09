import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Hero = () => {
  return (
    <div className=" d-flex justify-content-center">
      <div className="card hero-card w-75">
        <div className="card-body d-flex flex-column align-items-center">
          <h2>MERN AUTH APP</h2>
          <p className="card-text text-center">
            This is a Mern Project that focuses on Authentication. It stores the JWT token in a
            HTTP-only cookie. The technologies used in the project are React via Vite, React Redux
            Toolkit, React Bootstrap with a custom theme file, Express for the backend API and
            MongoDB for the RESTful database.
          </p>
          <div className="d-flex">
            <LinkContainer to="/login">
              <Button variant="primary" className="me-3" size="sm">
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to="/register">
              <Button variant="info" className="me-3" size="sm">
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
