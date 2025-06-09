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
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex flex-column align-items-center align-items-sm-end"
          >
            <div className="social-icon mb-2">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>{t("footer.copyright")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
