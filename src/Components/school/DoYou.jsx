import Hero_img from "../../assets/img/School/Png/Hero-img.png";
import { Col, Container, Row } from "react-bootstrap";
const DoYou = () => {
  return (
    <div className="bg-common_clr_blue py-do-you">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={6}>
            <div className="text-center text-lg-start">
              <h1 className="ff_Jakarta fw-bold fs_56 text-white lh_132">
                Nurturing Tomorrow's Leaders Through Public Speaking
              </h1>
              <p className="ff_Jakarta fw-medium fs_16 lh_175 text-white">
                Empower Your Students with Life-Changing Communication SkillsIn
                today's rapidly evolving world, the ability to communicate
                effectively isn't just an advantage – it's essential. At
                Summidence, we partner with schools to develop confident,
                articulate students who are prepared to lead in their future
                careers and communities.
              </p>
            </div>
          </Col>
          <Col md={8} lg={6}>
            <img className="w-100 h-100" src={Hero_img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoYou;
