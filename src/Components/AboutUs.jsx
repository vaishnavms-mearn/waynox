import { Button, Col, Container, Row } from "react-bootstrap";
import { m, LazyMotion, domAnimation } from "framer-motion";
import img from "../assets/images/home/aboutus.webp";
import "../assets/css/aboutus.css";

// Motion Variants
const sectionFade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const textStaggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonReveal = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 1.2,
    },
  },
};

function AboutUs() {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.section
        className="aboutus-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionFade}
      >
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            {/* Image */}
            <Col lg={6} className="order-lg-1 order-2">
              <m.div className="image-wrapper-with-dots" variants={imageVariant}>
                <img
                  src={img}
                  alt="About Us"
                  className="aboutus-img"
                  loading="lazy"
                  decoding="async"
                />
              </m.div>
            </Col>

            {/* Text Content */}
            <Col lg={6} className="order-lg-2 order-1">
              <m.div variants={textStaggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <m.h1 className="aboutus-title mb-4" variants={textItem}>
                  About <span className="highlight-text">Waynox</span>
                </m.h1>

                <m.p className="aboutus-paragraph mb-4" variants={textItem}>
                  At Waynox, our mission is to redefine the travel experience.
                  With years of excellence, we provide unmatched adventures,
                  premium rentals, and unforgettable events across the globe.
                </m.p>

                <m.p className="aboutus-paragraph mb-4" variants={textItem}>
                  Whether you seek serenity or excitement, Waynox brings your
                  dreams to life with our carefully curated experiences and
                  exceptional service.
                </m.p>

                {/* Stats */}
                <m.div className="stats-container" variants={textItem}>
                  <Row className="g-3">
                    <Col xs={4}>
                      <div className="stat-item">
                        <div className="stat-number">10K+</div>
                        <div className="stat-label">Happy Travelers</div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="stat-item">
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Destinations</div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support</div>
                      </div>
                    </Col>
                  </Row>
                </m.div>

                {/* Button */}
                <m.div className="mt-4 mb-4" variants={buttonReveal}>
                  <Button
                    as={m.button}
                    className="custom-success-button"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(182, 95, 233, 0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Discover More <span className="button-icon">→</span>
                  </Button>
                </m.div>
              </m.div>
            </Col>
          </Row>
        </Container>
      </m.section>
    </LazyMotion>
  );
}

export default AboutUs;
