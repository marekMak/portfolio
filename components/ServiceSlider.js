// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {
  FaWindows,
  FaLinux,
  FaRaspberryPi,
  FaAsterisk,
  FaDocker,
  FaPython,
  FaSistrix,
} from "react-icons/fa";

import { SiCisco, SiVirtualbox, SiGnubash } from "react-icons/si";

import { TbWorldWww } from "react-icons/tb";

// service data
export const serviceData = [
  {
    icon: <FaWindows />,
    title: "Windows",
  },
  {
    icon: <FaLinux />,
    title: "Linux",
  },
  {
    icon: <TbWorldWww />,
    title: "Siete",
  },
  {
    icon: <SiCisco />,
    title: "Cisco",
  },
  {
    icon: <FaRaspberryPi />,
    title: "Raspberry",
  },
  {
    icon: <FaAsterisk />,
    title: "Asterisk",
  },
  {
    icon: <FaDocker />,
    title: "Docker",
  },
  {
    icon: <FaPython />,
    title: "Python",
  },
  {
    icon: <FaSistrix />,
    title: "Zabbix",
  },
  {
    icon: <SiVirtualbox />,
    title: "Virtualizacia",
  },
  {
    icon: <SiGnubash />,
    title: "Scriptovanie",
  },
];

const ServiceSlider = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {serviceData.map((item, index) => (
        <a
          href={`./${item.title.toLowerCase()}`}
          className="bg-[rgba(65,47,123,0.15)] z-50 h-max rounded-lg px-6 py-8 flex flex-1 sm:flex-col  group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
        >
          {/* icon */}
          <div className="text-2xl text-accent mb-4 mr-2">{item.icon}</div>
          {/* title & desc */}
          <div className="mb-8">
            <div className="mb-2">{item.title}</div>
          </div>
          {/* arrow */}
          <div className="text-2xl">
            <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServiceSlider;
