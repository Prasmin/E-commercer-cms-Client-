import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { requestSuccess } from "../login/authSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleOnLogout = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(requestSuccess({}));
  };
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Brand href="/">Admin-CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/register" className="nav-link">
                  <i class="fa-solid fa-bell" title="Notifications"></i>
                </Link>
                <Link to="/register" className="nav-link">
                  <i class="fa-solid fa-user-pen" title="User Profile"></i>
                </Link>

                <Link to="/" className="nav-link" onClick={handleOnLogout}>
                  <i class="fa-solid fa-right-to-bracket" title="Log out"></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  {" "}
                  <i
                    className="fa-solid fa-right-to-bracket"
                    title="User Profile"
                  ></i>
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  {" "}
                  <i className="fa-solid fa-user" title="LogOuts"></i>Sign Up{" "}
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
