import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className=" d-flex justify-content-center">
      <div className="card hero-card w-75">
        {userInfo ? (
          <div className="card-body d-flex flex-column align-items-center">
            <h2 className="mb-4">MERN AUTH APP</h2>
            <p className="text-center">Welcome back, {userInfo.name}!</p>
            <p className="card-text text-center">
              This is a Mern Project that focuses on Authentication. It stores the JWT token in a
              HTTP-only cookie. The technologies used in the project are React via Vite, React Redux
              Toolkit, React Bootstrap with a custom theme file, Express for the backend API and
              MongoDB for the RESTful database.
            </p>
          </div>
        ) : (
          <div className="card-body d-flex flex-column align-items-center">
            <h2 className="mb-4">MERN AUTH APP</h2>
            <p className="card-text text-center">
              This is a Mern Project that focuses on Authentication. It stores the JWT token in a
              HTTP-only cookie. The technologies used in the project are React via Vite, React Redux
              Toolkit, React Bootstrap with a custom theme file, Express for the backend API and
              MongoDB for the RESTful database.
            </p>
            <div className="d-flex">
              <LinkContainer to="/login">
                <Button variant="primary" className="me-3" size="sm">
                  Login
                </Button>
              </LinkContainer>
              <LinkContainer to="/register">
                <Button variant="info" className="me-3" size="sm">
                  Register
                </Button>
              </LinkContainer>
            </div>
            <p className="card-text mt-3">
              <strong>Note:</strong> You can use the following credentials to login:
            </p>
            <p className="card-text">
              <strong>Email:</strong> steve@gmail.com
            </p>
            <p className="card-text">
              <strong>Password:</strong> steve12345
            </p>

            <p className="card-text">
              Or you can register your own account by clicking the Register button above.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
