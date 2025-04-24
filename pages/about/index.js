import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLaravel,
  FaPhp,
  FaWindows,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiBlender,
  SiWireshark,
  SiCisco,
} from "react-icons/si";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

export const aboutData = [
  {
    title: "skills",
    info: [
      { title: "OS", icons: [<FaWindows />, <FaLinux />] },
      { title: "Network", icons: [<SiCisco />, <SiWireshark />] },
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaLaravel />,
          <FaPhp />,
        ],
      },
      {
        title: "Design",
        icons: [<SiBlender />, <SiAdobeillustrator />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "skúsenosti",
    info: [
      { title: "IKT Technician - NIVaM", stage: "2024 - " },
      { title: "IT specialyst - Asseco Solutions", stage: "2022 - 2023" },
      { title: "IT specialyst - Falck", stage: "2020 - 2022" },
    ],
  },
  {
    title: "certifikáty",
    info: [
      { title: "CISCO I", stage: "2011" },
      { title: "CISCO II", stage: "2009" },
      { title: "CISCO III", stage: "2006" },
      { title: "CISCO IV", stage: "2006" },
      { title: "Linux", stage: "2006" },
      { title: "Linux/Unix", stage: "2006" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full h-screen bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center gap-x-6">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            O <span className="text-accent">mne</span>
          </motion.h2>

          {/* Counter */}
         
        </div>

        {/* Info Section */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* Navigation */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`cursor-pointer capitalize xl:text-lg relative 
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 
                  ${index === itemIndex ? "text-accent after:w-full after:bg-accent" : "after:w-8"}
                `}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Detail Info */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
