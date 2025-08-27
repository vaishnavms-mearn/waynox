import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/ourservices.css";
import img1 from "../assets/images/home/photography.gif";
import img2 from "../assets/images/home/car.gif";
import img3 from "../assets/images/home/vintage-car.gif";
import img4 from "../assets/images/home/rental.gif";
import img5 from "../assets/images/home/event.gif";
import img6 from "../assets/images/home/travel.gif";

function OurServices() {
  const services = [
    {
      title: "Photography",

      image: img1,
      description: "Capture life's most precious moments with our professional photography services.",
    },
    {
      title: "Drivers",

      image: img2,
      description: "Get reliable and professional drivers for your comfortable journey anytime.",
    },
    {
      title: "Vintage Cars",

      image: img3,
      description: "Make your special moments timeless with our beautiful vintage car rentals.",
    },
    {
      title: "Rental Services",

      image: img4,
      description: "Rent top-quality equipment and props to enhance your event effortlessly.",
    },
    {
      title: "Event Management",

      image: img5,
      description: "We plan, organize, and execute events to create lasting memories for you.",
    },
    {
      title: "Travel and Tourism",

      image: img6,
      description: "Explore breathtaking destinations with our customized travel packages.",
    },
  ];

  return (
 <section className="ourservices-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Our Signature Services</h2>
          <p className="section-subtitle">Experience the world like never before</p>
        </div>

<Row className="services-grid gx-4 gy-3">
          {services.map((service, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="service-col">
              <div className="service-card">
                <div className="card-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="card-image"
                  />
                </div>
                <div className="card-content">
                  <div className="content-wrapper">
                    <div className="service-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3 className="service-title">{service.title}</h3>
                    </div>
                    <div className="service-description">
                      <p>{service.description}</p>
                    </div>
                  </div>

                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default OurServices;