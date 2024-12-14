import {
  FaShippingFast,
  FaGlobeAmericas,
  FaCheckCircle,
  FaHeadset,
  FaMobileAlt,
} from "react-icons/fa";
import OnionIcon from "../../assets/onion_icon.png";

export const skills = [
  {
    icon: (
      <img
        src={OnionIcon}
        alt="Onion Powder Export"
        style={{ width: "50px", height: "50px" }}
      />
    ),
    title: "Onion Powder Export",
    description:
      "We specialize in the export of high-quality onion powder to international markets, ensuring freshness and authenticity.",
    color: "#ff8c00",
  },
  {
    icon: <FaShippingFast />,
    title: "Logistics & Supply Chain Management",
    description:
      "Efficient logistics and supply chain management for fast and reliable delivery of onion powder worldwide.",
    color: "#306998",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "International Trade Expertise",
    description:
      "Expertise in international trade regulations, compliance, and negotiations to facilitate smooth cross-border transactions.",
    color: "#68a063",
  },
  {
    icon: <FaCheckCircle />,
    title: "Product Sourcing & Quality Control",
    description:
      "Strong network for sourcing high-quality onion powder and ensuring rigorous quality control standards.",
    color: "#92e6a7",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support & Service",
    description:
      "Providing exceptional customer service and assistance to ensure satisfaction and long-term partnerships.",
    color: "#FF9900",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Order Management",
    description:
      "Easy-to-use mobile platform for placing and tracking onion powder orders, ensuring a seamless experience for customers.",
    color: "#61dafb",
  },
];
