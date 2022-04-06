import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { BsCircleFill } from "react-icons/bs";
import { IProject, IService, ISkill } from "./type";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b> bootstrap</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using  <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Network administrator",
    about: "Guaranteeing the proper functioning of a company's computer network. It sets up IT projects, administers the network and acts as a support for users. ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "IT Project Managerr",
    about:
      "Constitute and lead working groups supervise the project phases from analysis to implementation of the solution. ",
  },
 
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "AI Engineering (NLP, Python)",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script,Node Js,Next Js",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "JEE",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C++,C#",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Angular, Material U,",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap,HTTML,CSS,Tailwind Css",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  { 
    id:1,
    name: "Parc Informatique",
    description:
      "web application for the management of computer equipment in an organization, is in progress.",
    image_path: "/Images/parc.jpg",
    deployed_url: "/",
    github_url: "https://github.com/Ahlem-exol/ParcInfo",
    category: ["Angular"],
    key_techs: ["Angular", "Node Js"],
  },
  { id:2,
    name: "Alrim SPA",
    image_path: "/Images/alrim.jpg",
    deployed_url: "http://www.alrim.dz/",
    github_url: "/",
    category: ["CMS"],
    description:
      "maintenance of this website, which shows the information of the Company EPE Alrim Spa ",
    key_techs: ["CMS", "Drupal"],
  },

  {
    id:3,
    name: "Eco SMART Lab",
    image_path: "/Images/eco.jpg",
    deployed_url: "http://www.fablab1.alrim.dz/",
    github_url: "https://github.com/Ahlem-exol/EcoSmartLab",
    category: ["CMS"],
    description:
      "website that  displays information such as texts, images, logo. for the startups ",
    key_techs: [
      "CMS",
      "Wordpress",
      "Elementor",
      "Express",
    ],
  },

  {
    id:4,
    name: "Portfolio",
    image_path: "/Images/Capture web_6-4-2022_211445_localhost.jpeg",
    deployed_url: "https://portfolio-ds9xb8ijr-ahlem-exol.vercel.app/",
    github_url: "https://github.com/Ahlem-exol/Portfolio",
    category: ["js"],
    description:
      "I made this portfolio to share with you my projects and skills. ",
    key_techs: [
      "Next Js",
      " React ",
      "Tailwind  CSS",
    ],
  },

];
