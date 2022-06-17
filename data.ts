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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b> bootstrap</b>  and <b>React.js</b> ... ",
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
    title: "IT Project Manager",
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
    name: "JEE,Spring BOOT, MVC",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C++,C#",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "IONIC,Angular, Material U",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "HTML,CSS,Bootstrap,Tailwind Css",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Git;GitHub",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Postman",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50",
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
      "Web application that atomatizes all the activities of the DSI, such as helpdesk management, hardware and software inventory ...,This app is in progress.",
    image_path: "/Images/parcInformatique.JPG",
    deployed_url: "/",
    github_url: "https://github.com/Ahlem-exol/ParcInfo",
    category: ["Angular"],
    key_techs: ["Angular", "Node Js","Express"],
  },
  { id:2,
    name: "Alrim SPA",
    image_path: "/Images/alrim.JPG",
    deployed_url: "http://www.alrim.dz/",
    github_url: "/",
    category: ["CMS"],
    description:
      "makes all types of maintenance in this website, which shows the information of the Company,This app is in progress. ",
    key_techs: ["CMS", "Drupal"],
  },

  {
    id:3,
    name: "Eco SMART Lab",
    image_path: "/Images/fablab.JPG",
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
    image_path: "/Images/portfilio.JPG",
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
  {
    id:5,
    name: "Espace Client",
    image_path: "/Images/espca.JPG",
    deployed_url: "/",
    github_url: "https://github.com/Ahlem-exol/EspaceClient",
    category: ["js"],
    description:
      "web and mobile application through the use of IONIC, this application for the purpose of simplifying the consultation of the progress of a project for the company's client ",
    key_techs: [
      "IONIC",
      " Angular ",
      "Node JS",
    ],
  },

];
