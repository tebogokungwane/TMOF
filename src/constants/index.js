import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  same,
  normal,
  errand,
  normalD,
} from "../assets";
import { FaHome, FaInfo, FaServicestack, FaBriefcase } from "react-icons/fa";
import React from "react";


// Function-based icons to avoid JSX syntax in plain JavaScript
const FaHomeIcon = () => React.createElement(FaHome, { className: "text-black mr-2" });
const FaServicestackIcon = () =>
  React.createElement(FaServicestack, { className: "text-black mr-2" });
const FaBriefcaseIcon = () =>
  React.createElement(FaBriefcase, { className: "text-black mr-2" });
const FaInfoIcon = () => React.createElement(FaInfo, { className: "text-black mr-2" });

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
    icon: FaHomeIcon,
  },
  {
    id: "services",
    title: "Our Service",
    icon: FaServicestackIcon,
  },
  {
    id: "work",
    title: "Our Work",
    icon: FaBriefcaseIcon,
  },
  {
    id: "about",
    title: "About Us",
    icon: FaInfoIcon,
  },
];

const services = [
  {
    title: "IBM BPM Application Developer",
    icon: web,
  },
  {
    title: "IBM WebPhere Message Broker ",
    icon: mobile,
  },
  {
    title: "National Certificate NQF Level 5",
    icon: backend,
  },
  {
    title: "Oracle Java EE Web Component",
    icon: creator,
  },
  {
    title: "Oracle Java SE 5 Programming",
    icon: creator,
  },
  {
    title: "Oracle Java SE  6 Programming",
    icon: creator,
  },
];

const experiences = [
  {
    title: "TMOF COURIERS",
    company_name: "Door-to-Door",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "TMOF COURIERS, established by Tshidiso Mofokeng",
      "Reputable courier company",
      "Specializing in efficient door-to-door services.",
    ],
  },
  {
    title: "Reliable Delivery",
    company_name: "Deliver",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Legitimate registered and licensed",
      "Ensure security",
      "Reliable delivery",
    ],
  },
  {
    title: "Customer satisfaction",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "The commitment to customer satisfaction",
      "TMOF Courier a trusted choice",
      "Seamless and timely courier solutions",
    ],
  },
  {
    title: "Express Delivery Service",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    points: ["Fast Delivery", "Arrives safely", "Handled with care"],
  },
];

const projects = [
  {
    name: "SAME-DAY DELIVERY",
    description: "Urgent documents or Parcels... We've got you!",
    tags: [],
    image: normal,
    source_code_link: "https://github.com/",
  },
  {
    name: "NORMAL DELIVERY",
    description: "3 day delivery for non-urgent Parcels",
    tags: [],
    image: normalD,
    source_code_link: "https://github.com/",
  },
  {
    name: "SWIFT ERRAND",
    description: "Let us run your errands",
    tags: [],
    image: errand,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, projects };
