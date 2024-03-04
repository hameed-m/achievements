import { FaPython, FaJava, FaNodeJs, FaReact,  } from "react-icons/fa";
import { TbBrandReactNative, TbBrandFlutter, TbBrandNextjs  } from "react-icons/tb";
import { SiDynamics365 } from "react-icons/si";



export const achievements = [
  {
    cardTitle: "Backoffice App Enhancements",
    url: "",
    cardSubtitle:
      "Streamlined warehouse operations by developing transfer management features for company-wide MS Dynamics integration.",
    cardDetailedText:
      "Contribution: Created 'Transfer to Ship,' 'Transfer to Receive,' and 'Check Transfer Order' modules for efficient inventory movement.",
    date: "2023/12/05 - 2024/01/05",
    techs: ["Flutter, ", "MS Dynamics"],
    backgroundColor: "#042B59",
    icon: <TbBrandFlutter />
  },
  {
    cardTitle: "DiMilano App",
    url: "",
    cardSubtitle:
      "Led frontend development and contributed significantly to the backend for a successful cross-platform customer loyalty app launch.",
    cardDetailedText:
      "Contribution: Built intuitive user interfaces (React Native) and robust backend architecture (Node.js, Fastify) for rewards tracking and redemption.",
    date: "2024/01/05 - 2024/03/04",
    techs: ["React Native, ", "Node.js, ", "Fastify"],
    backgroundColor: "#61DBFB",
    icon: <TbBrandReactNative />
  },
  {
    cardTitle: "MS Dynamics",
    url: "",
    cardSubtitle:
      "Facilitated company-wide adoption of MS Dynamics by assisting with data management and troubleshooting. Enhanced system functionality through integration projects.",
    cardDetailedText:
      "Contribution: Aided in data updates, resolved usage issues, and supported colleagues during transition phases.",
    date: "2023/12/05 - present",
    techs: ["MS Dynamics"],
    backgroundColor: "#1160b7",
    icon: <SiDynamics365 />
  },
  {
    cardTitle: "Al-Amer E-commerce Platform Upgrade",
    url: "",
    cardSubtitle:
      "Rebuilt existing website to deliver an enhanced user experience and optimize performance using modern technologies.",
    cardDetailedText:
      "Contribution: Drove technical improvements with a focus on scalability and seamless online ordering.",
    date: "2024/02/25 - present",
    techs: ["Next.js, ", "Prisma, ", "GraphQL"],
    backgroundColor: "#000000",
    icon: <TbBrandNextjs />
  },
];
