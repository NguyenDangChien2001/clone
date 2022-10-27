import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function Footer() {
  const facebook = "#";
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white">
        <section className="d-flex justify-content-between p-4">
          <div style={{ fontSize: "2rem" }}>
            <Link as={Link} to={facebook} className="text-white me-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
            <Link as={Link} to={facebook} className="text-white me-4">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link as={Link} to={facebook} className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link as={Link} to={facebook} className="text-white me-4">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row">
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">Describe Sound</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">investor relations</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">policy notification</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">help center</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">jobs</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">cookie option</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">gift card</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">terms of use</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">business information</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">multimedia center</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">privacy</p>
              </div>
              <div className="col-4 col-md-3">
                <p className="text-uppercase fw-bold">Contact us</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3">
          © 20202 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            NguyenDangChien
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
