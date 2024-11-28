import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "react-modal";
import { FaWhatsapp, FaPhone, FaTruck, FaTimes } from "react-icons/fa";
import ProfileImg from "./HeroBgAnimation/Tshidiso.jpg";
import emailjs from "@emailjs/browser";
import PlacesAutocomplete from "react-places-autocomplete";

// Animations
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0; }
`;

// Styled Components
const HomeContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  background: #fcd403;
  padding: 20px;
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  position: absolute;
  top: 8%;
  font-size: 2.5rem;
  margin: 0;
  font-weight: bold;
  color: #000;
  animation: ${fadeIn} 1.5s ease-out;
`;

const SubHeader = styled.h2`
  position: absolute;
  top: 20%;
  font-size: 1.2rem;
  margin: 10px 0;
  color: #000;
  animation: ${fadeIn} 1.5s ease-out 0.5s;

  @media (max-width: 768px) {
    display: none;
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

const ProfileSection = styled.div`
  margin-top: 170px;
  animation: ${fadeIn} 1.5s ease-out;

  img {
    width: 100%;
    max-width: 300px;
    border: 5px solid #fcd403;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ContactContainer = styled.div`
  margin-top: 20px;
  animation: ${fadeIn} 1.5s ease-out;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  font-size: 1.2rem;

  svg {
    margin-right: 10px;
    color: #25d366;
  }
`;

const OrderButton = styled.button`
  margin-top: 10px;
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
  background: #e3e1af; /* Cream white */
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 500px;
  padding: 20px;
  position: relative;
  animation: ${(props) => (props.isClosing ? fadeOut : fadeIn)} 0.3s ease-out;

  h3 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
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

    input,
    select {
      padding: 15px 30px; /* Match button padding */
      border-radius: 50px; /* Rounded corners like the button */
      border: 1px solid #ccc;
      font-size: 1rem;
      background: #fcd403; /* Same as Home Background */
      color: #000;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow */
      outline: none;

      &:focus {
        border: 1px solid #000; /* Add focus border */
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); /* Glow effect on focus */
      }

      &:hover {
        background: rgba(255, 255, 255, 0.8); /* Slightly lighter hover effect */
      }
    }
  }
`;

const Home = () => {
  const formRef = useRef();
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
    alert("Form submitted: " + JSON.stringify(form, null, 2));
    closeModal();
  };

  const toggleModal = () => {
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300);
  };

  return (
    <HomeContainer>
      {!showContent && (
        <BackgroundText>Let us DELIVER your URGENT parcels</BackgroundText>
      )}
      <Header>SAME DAY DELIVERY</Header>
      <SubHeader>We deliver parcels with speed and care</SubHeader>

      {showContent && (
        <>
          <ProfileSection>
            <img src={ProfileImg} alt="Profile" />
          </ProfileSection>

          <ContactContainer>
            <ContactInfo>
              <FaWhatsapp />
              079 266 9298
            </ContactInfo>
            <ContactInfo>
              <FaPhone />
              010 970 1740
            </ContactInfo>
          </ContactContainer>

          <OrderButton onClick={toggleModal}>
            <FaTruck />
            Place an Order
          </OrderButton>

          {isModalOpen && (
            <ModalOverlay>
              <ModalContent isClosing={isClosing}>
                <FaTimes className="close-icon" onClick={closeModal} />
                <h3>Place Your Order</h3>
                <form ref={formRef} onSubmit={handleSubmit}>
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
