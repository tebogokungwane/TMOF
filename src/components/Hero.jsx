
//import { styles } from "./styles";
// import styles from "../styles";
import styled from "styled-components";
//import { Bio } from "../../data/constants";
import { Bio } from "./data/constants";
import Typewriter from "typewriter-effect";
//import HeroImg from "../../images/HeroImage.jpg";
import HeroImg from "./HeroBgAnimation/Tshidiso.jpg";
//import HeroBgAnimation from "../HeroBgAnimation";
// import HeroBgAnimation from "./HeroBgAnimation"
import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";
// import {
//   headContainerAnimation,
//   headContentAnimation,
//   headTextAnimation,
// } from "./utils/motion";


import { FaShoppingCart } from "react-icons/fa"; // Importing icon for "Place Order" button


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 300px; 
  z-index: 1;

  @media (max-width: 960px) {
  padding: 100px 300px; 
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 100px 30px; 


  @media (max-width: 960px) {
    flex-direction: column;
      padding: 100px 50px; 

  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 2;
  padding: 90px 30px; 
  margin-top: 20px; /* Added margin to move image down */
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    padding: 90px 30px; 

    
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 50px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 20px; /* Added margin to create spacing below title */

  @media (max-width: 960px) {
    text-align: center;
    padding: -50px -50px; 

  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
    padding: -50px -50px; 

  }
`;


const TextLoop = styled.div`
  font-weight: 500;
  font-size: 22px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  white-space: nowrap; /* Prevents text from wrapping */

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 15px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;


const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;


const Img = styled.img`
   width: 80%;
  max-width: 320px;
  aspect-ratio: 1; /* Makes the container square */
  border-radius: 50%; /* Makes the container circular */
  overflow: hidden; /* Ensures image is cropped within the circle */
  // border: 3px solid ${({ theme }) => theme.primary};
  opacity: 0.9;
    margin-top: 20px; /* Added margin to move image down */

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;


const ResumeButton = styled.a`
    display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  padding: 16px 0;
  background: transparent; /* Made button background transparent */
  border: 2px solid ${({ theme }) => theme.primary}; /* Added border */
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  transition: all 0.4s ease-in-out;
    margin-top: 24px; /* Added margin to move button down */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }

  /* Adding icon to the button */
  & > svg {
    margin-right: 8px;
  }
`;


const Hero = () => {
  return (

    <HeroContainer>
      <HeroInnerContainer>
        <HeroLeftContainer>
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I provide
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <ResumeButton href={Bio.resume} target="_blank">
            Place Order
          </ResumeButton>

        </HeroLeftContainer>
        <HeroRightContainer>
          <Tilt>
            <Img src={HeroImg} alt="Rishav Chanda" />
          </Tilt>

        </HeroRightContainer>

      </HeroInnerContainer>
    </HeroContainer>


  );
};
export default Hero;

