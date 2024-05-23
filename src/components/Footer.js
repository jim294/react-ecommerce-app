import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">S'abonner aux infos</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Votre adresse Email"
                  aria-label="Votre adresse Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  S'inscrire
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contactez-moi</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <address className="text-white fs-6">
                    Adresse : 277 Near Vill Chopal,
                    <br />
                    Sonipat, Haryana <br />
                    Pincode : 131103
                  </address>
                  <a
                    href="tel: +33 611706667"
                    className="mt-3 d-block mb-1 text-white"
                  >
                    +33 611706667
                  </a>
                  <a
                    href="mailto: jeanmariedeschamps25@gmail.com: +33 611706667"
                    className="mt-2 d-block mb-0 text-white"
                  >
                    jeanmariedeschamps25@gmail.com
                  </a>
                  <div className="social_icons d-flex align-items-center gap-30 mt-4">
                    <a className="text-white" href="https://www.linkedin.com/in/jean-marie-deschamps25">
                      <BsLinkedin className="fs-4" />
                    </a>
                    <a className="text-white" href="https://www.linkedin.com/in/jean-marie-deschamps25">
                      <BsGithub className="fs-4" />
                    </a>
                    <a className="text-white" href="https://www.linkedin.com/in/jean-marie-deschamps25">
                      <BsYoutube className="fs-4" />
                    </a>
                    <a className="text-white" href="https://www.linkedin.com/in/jean-marie-deschamps25">
                      <BsInstagram className="fs-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informations</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                  <Link className="text-white py-2 mb-1">Refund Policy</Link>
                  <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                  <Link className="text-white py-2 mb-1">Terms of Service</Link>
                  <Link className="text-white py-2 mb-1">blogs</Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Compte</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1">Search</Link>
                  <Link className="text-white py-2 mb-1">About Us</Link>
                  <Link className="text-white py-2 mb-1">Faq</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                  <Link className="text-white py-2 mb-1">Size Chart</Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liens</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablettes</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} By JM
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
