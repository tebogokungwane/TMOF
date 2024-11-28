import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import { FaWhatsapp, FaPhone, FaTruck, FaTimes } from "react-icons/fa";
import ProfileImg from "./HeroBgAnimation/Tshidiso.jpg";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.9); }
`;

// Styled Components
const HomeContainer = styled.div`
  background: #fcd403;
  height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
`;

const Header = styled.h1`
  font-size: 2.5rem; /* Adjust font size as needed */
  font-weight: bold;
  color: #000; /* Black color for the text */
  text-transform: uppercase; /* Convert text to uppercase */
  margin-top: 80px; /* Adjust the margin for spacing */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Optional shadow effect */
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Adjust font size for smaller screens */
  }
`;

const SubHeader = styled.h2`
  font-size: 1.2rem; /* Optional: Keep the subheading in sync */
  color: #666; /* Lighter color for a subtle contrast */
  animation: ${fadeIn} 1.5s ease-out 0.5s;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProfileImage = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 1.5s ease-out;

  img {
    width: 100%;
    max-width: 300px;
    border: 5px solid #fcd403;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ContactSection = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 1.5s ease-out;

  div {
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 1.2rem;

    svg {
      margin-right: 10px;
      color: #25d366;
    }
  }
`;

const OrderButton = styled.button`
  margin-top: 60px;
  padding: 15px 30px;
  font-size: 1.2rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #e3e1af;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  position: relative;
  animation: ${(props) => (props.isClosing ? scaleOut : fadeIn)} 0.3s ease-out;

  h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #000;
  }

  .close-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5rem;
    color: #000;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    input {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 50px;
      font-size: 1rem;
      background: #fcd403;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      outline: none;

      &:focus {
        border-color: #000;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

// Component
const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    pickupAddress: "",
    dropAddress: "",
  });

  useEffect(() => {
    // Delay showing main content
    const timer = setTimeout(() => setShowContent(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    closeModal();
  };

  const toggleModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <HomeContainer>
      <Header>SAME DAY DELIVERY</Header>
      <SubHeader>We deliver parcels with speed and care</SubHeader>

      {!showContent && (
        <BackgroundText>Let us DELIVER your URGENT parcels</BackgroundText>
      )}

      {showContent && (
        <>
          <ProfileImage>
            <img src={ProfileImg} alt="Profile" />
          </ProfileImage>

          {/* <ContactSection>
            <div>
              <FaWhatsapp /> 079 266 9298
            </div>
            <div>
              <FaPhone /> 010 970 1740
            </div>
          </ContactSection> */}

          <OrderButton onClick={toggleModal}>
            <FaTruck /> Place an Order
          </OrderButton>

          {isModalOpen && (
            <ModalOverlay>
              <ModalContent isClosing={isClosing}>
                <FaTimes className="close-icon" onClick={closeModal} />
                <h3>Place Your Order</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="Your Mobile Number"
                    required
                  />
                  <input
                    type="text"
                    name="pickupAddress"
                    value={form.pickupAddress}
                    onChange={handleChange}
                    placeholder="Pick-up Address"
                    required
                  />
                  <input
                    type="text"
                    name="dropAddress"
                    value={form.dropAddress}
                    onChange={handleChange}
                    placeholder="Drop Address"
                    required
                  />
                  <OrderButton type="submit">
                    <FaTruck /> Submit
                  </OrderButton>
                </form>
              </ModalContent>
            </ModalOverlay>
          )}
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
