import { Container, Card } from "react-bootstrap";
import { FaUsers, FaHeadset, FaGlobe, FaStar } from "react-icons/fa";
import "../assets/css/whychooseus.css";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUsers />,
      title: "Trusted by Thousands",
      desc: "Over 10,000 happy customers around the world choose us every year.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      desc: "Day or night, our support team is ready to assist you anytime.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Destinations",
      desc: "Explore top destinations across continents with our curated trips.",
    },

  ];

  return (
    <section className="why-choose-us-section">
      <div className="overlay">
        <Container className="why-container">
          <div className="why-content">
            <h2>Why Choose Us</h2>
    <p>Waynox Travels blends expertise and passion to craft unforgettable journeys for every traveler.</p>


          </div>

          <div className="features-wrapper">
            {features.map((item, index) => (
              <Card className="feature-card" key={index}>
                <div className="feature-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default WhyChooseUs;
