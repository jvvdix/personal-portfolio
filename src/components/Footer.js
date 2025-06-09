import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/logoJMS2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon6.svg";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-gradient-overlay"></div>
      <Container className="footer-content">
        <Row className="footer-main align-items-center">
          <Col xs={12} md={6} className="footer-brand">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="footer-logo" />
            </div>
          </Col>

          <Col xs={12} md={6} className="footer-social-section">
            <div className="social-links">
              <h5 className="social-title">{t("footer.contact")}</h5>
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/judith-molina-sánchez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <img src={navIcon1} alt="LinkedIn" />
                  <span className="social-tooltip">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jvvdix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="GitHub"
                >
                  <img src={navIcon2} alt="GitHub" />
                  <span className="social-tooltip">GitHub</span>
                </a>
                <a
                  href="#contact"
                  className="social-link email"
                  aria-label="Email"
                >
                  <img src={navIcon3} alt="Email" />
                  <span className="social-tooltip">Email</span>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="footer-bottom">
          <Col xs={12}>
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">{t("footer.copyright")}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
