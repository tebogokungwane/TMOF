import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from '../hoc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

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

        <br /><br />
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Privacy
        </button>

        {/* Contact Information */}
        <div className="mt-8 space-y-2">
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span>CALL: <a href="tel:0792669298">079 266 9298</a> / <a href="tel:0109701740">010 970 1740</a></span>
          </div>
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <span>EMAIL: <a href="mailto:Mofokengtshidiso00@gmail.com">Mofokengtshidiso00@gmail.com</a> | <a href="mailto:info@tmofcouriers.co.za">info@tmofcouriers.co.za</a></span>
          </div>
          <div className="flex items-center text-secondary text-[17px]">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            <span>VISIT: <a href="https://www.google.com/maps/search/?api=1&query=1768/21+Mist+Flower+Street+Protea+Glen+ext+10+1819" target="_blank" rel="noopener noreferrer">1768/21 Mist Flower Street, Protea Glen, ext 10, 1819</a></span>
          </div>
        </div>
      </motion.p>

      {/* Modal for additional information */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white w-[70%] p-8 rounded-lg max-w-4xl text-center relative overflow-hidden">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">More About Us</h3>
            <div className="max-h-[500px] overflow-y-auto p-4 text-left text-gray-700 space-y-4">
              {/* Privacy policy content */}
              <p><strong>PRIVACY POLICY STATEMENT</strong></p>
              <p>
                This Privacy Policy is prepared by TMOF COURIERS and whose registered address is 17684/21 Mist Flower str, Protea Glen, Soweto, Johannesburg, 1819...
              </p>
              {/* (Rest of the privacy policy content here) */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
