import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import styles from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "./utils/motion";
import { FaFilePdf } from "react-icons/fa";
import PlacesAutocomplete from "react-places-autocomplete";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    pickupAddress: "",
    dropAddress: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddressChange = (address, field) => {
    setForm({ ...form, [field]: address });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simple validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    if (!/^\d{10}$/.test(form.mobile)) {
      alert("Mobile number must be 10 digits.");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: `${form.name} would like to contact you. Their message: ${form.message}.`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            mobile: "",
            pickupAddress: "",
            dropAddress: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Place Order</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Mobile</span>
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              maxLength="10"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Pick-up Address</span>
            <PlacesAutocomplete
              value={form.pickupAddress}
              onChange={(address) => handleAddressChange(address, "pickupAddress")}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Select pick-up location",
                      className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                    })}
                  />
                  <div className="autocomplete-dropdown">
                    {suggestions.map((suggestion) => (
                      <div {...getSuggestionItemProps(suggestion)} className="suggestion-item">
                        <span>{suggestion.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Drop Address</span>
            <PlacesAutocomplete
              value={form.dropAddress}
              onChange={(address) => handleAddressChange(address, "dropAddress")}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: "Select drop location",
                      className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium",
                    })}
                  />
                  <div className="autocomplete-dropdown">
                    {suggestions.map((suggestion) => (
                      <div {...getSuggestionItemProps(suggestion)} className="suggestion-item">
                        <span>{suggestion.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="mt-4">
          <a
            href="/path-to-your-privacy-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white font-medium"
          >
            <FaFilePdf className="mr-2 text-2xl" />
            Privacy Policy
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
