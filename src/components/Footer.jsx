import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fcd403; /* Updated to black */
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 10px 0;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 24px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const LinksContainer = styled.div`
  margin: 15px 0;
`;

const Link = styled.a`
  margin: 0 10px;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://www.instagram.com/tmofcouriers/?igsh=MWt4bmVxaDM2aWk4Ng%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/people/TMOF-COURIERS/100091386369993/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="https://www.tiktok.com/@tmofcouriers?_t=8ksCuc8JBqP&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </SocialLink>
  
      </SocialLinks>
 
      <Copyright>
        © 2024 TMOF. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
