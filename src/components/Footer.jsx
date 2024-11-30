import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fcd403; /* Footer background color */
  color: ${({ theme }) => theme.text_primary || '#000'};
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
  font-size: 24px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const InstagramIcon = styled(FaInstagram)`
  color: #E1306C; /* Instagram's official color */
`;

const FacebookIcon = styled(FaFacebook)`
  color: #1877F2; /* Facebook's official color */
`;

const TiktokIcon = styled(FaTiktok)`
  color: #010101; /* TikTok's color (black/white can alternate) */
`;

const WhatsappIcon = styled(FaWhatsapp)`
  color: #25D366; /* WhatsApp's official green */
`;

const LinksContainer = styled.div`
  margin: 15px 0;
`;

const Copyright = styled.div`
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialLinks>
        <SocialLink href="https://www.instagram.com/tmofcouriers/?igsh=MWt4bmVxaDM2aWk4Ng%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/people/TMOF-COURIERS/100091386369993/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </SocialLink>
        <SocialLink href="https://www.tiktok.com/@tmofcouriers?_t=8ksCuc8JBqP&_r=1" target="_blank" rel="noopener noreferrer">
          <TiktokIcon />
        </SocialLink>
        <SocialLink href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
          <WhatsappIcon />
        </SocialLink>
      </SocialLinks>

      <Copyright>
        © 2024 TMOF. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
