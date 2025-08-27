import  { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/herosection.css";
import img1 from "../assets/images/home/hero1.webp";
import img2 from "../assets/images/home/hero2.webp";
import img3 from "../assets/images/home/hero3.webp";

const images = [img1, img2, img3];
const titles = ["Travels", "Rentals", "Events"];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startTransition = () => {
      const nextIndex = (currentSlide + 1) % images.length;
      const img = new Image();
      img.src = images[nextIndex];
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(nextIndex);
        setTimeout(() => setIsTransitioning(false), 400);
      }, 500);
    };

    intervalRef.current = setInterval(startTransition, 7000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentSlide]);

  return (
    <div className="hero-container">
      <div className="image-wrapper">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            alt={`Slide ${currentSlide}`}
            className="hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            loading="eager"
          />
        </AnimatePresence>

        <AnimatePresence>
          {isTransitioning && (
            <>
              <motion.div
                className="curtain left"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.div
                className="curtain right"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
              />
            </>
          )}
        </AnimatePresence>
      </div>

      <Container className="hero-content">
        <Row className="align-items-center">
          <Col lg={12} className="text-column">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="main-heading"
            >
              Waynox
              <AnimatePresence mode="wait">
                <motion.span
                  key={titles[currentSlide]}
                  className="rotating-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {titles[currentSlide]}
                </motion.span>
              </AnimatePresence>
            </motion.h1>
          </Col>

          <Col lg={6} className="text-column">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Adventure begins the moment you choose Waynox Travels.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="hero-button primary">START YOUR JOURNEY</button>
              <button className="hero-button secondary">LEARN MORE</button>
            </motion.div>
          </Col>
        </Row>
      </Container>
{/*
      <div className="stats-container">
        {[
          { value: 15, label: "Years of Excellence" },
          { value: 98, label: "Satisfaction Rate" },
          { value: 50000, label: "Happy Travelers" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
          >
            <h2>
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />+
            </h2>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default HeroSection;