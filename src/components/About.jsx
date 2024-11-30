import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from '../hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FaFilePdf } from "react-icons/fa";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility and disable background scroll
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isModalOpen]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        TMOF COURIERS, established by Tshidiso Mofokeng, is a reputable courier company specializing in efficient door-to-door services.
        With proper registration and licensing, they ensure secure and reliable deliveries.
        Their commitment to customer satisfaction makes them a trusted choice for seamless and timely courier solutions.

        {/* Privacy Policy Link */}
        <div className="mt-4">
          <a
            href="/file/policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 font-medium hover:underline"
          >
            <FaFilePdf className="mr-2 text-red-600 text-2xl" />
            Privacy Policy
          </a>
        </div>


        {/* Contact Information */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-500 text-xl" />
            <span>
              CALL: <a href="tel:0792669298" className="text-blue-600 hover:underline">079 266 9298</a> /
              <a href="tel:0109701740" className="text-blue-600 hover:underline">010 970 1740</a>
            </span>
          </div>
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-yellow-500 text-xl" />
            <span>
              EMAIL: <a href="mailto:Mofokengtshidiso00@gmail.com" className="text-blue-600 hover:underline">Mofokengtshidiso00@gmail.com</a> |
              <a href="mailto:info@tmofcouriers.co.za" className="text-blue-600 hover:underline">info@tmofcouriers.co.za</a>
            </span>
          </div>
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-red-500 text-xl" />
            <span>
              VISIT: <a href="https://www.google.com/maps/search/?api=1&query=1768/21+Mist+Flower+Street+Protea+Glen+ext+10+1819"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline">
                1768/21 Mist Flower Street, Protea Glen, ext 10, 1819
              </a>
            </span>
          </div>
        </div>
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
