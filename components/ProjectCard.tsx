import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail:null|number;
  setShowDetail:(id:null|number)=>void
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail
}) => {


  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(id)}
        layout="responsive"
        height="250"
        width="300"
      />
     
      <p className="my-2 text-center">{name}</p>

      {showDetail == id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div
             initial={{
              opacity:0,
              y:60,
             }}
             animate={{
              opacity:1,
              y:0,
      
              transition:{
                staggerChildren:0.1,
              }
             }}>
            {/* <img src={image_path} alt={name} /> */}

            <motion.div
             initial={{
              opacity:0,
              y:60,
             }}
             animate={{
              opacity:1,
              y:0,
      
              transition:{
                staggerChildren:0.1,
              }
             }}
              className="border-gray-100 bor">
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="250"
              width="300"
            />
            </motion.div>
            <motion.div
             initial={{
              opacity:0,
              y:60,
             }}
             animate={{
              opacity:1,
              y:0,
      
              transition:{
                staggerChildren:0.1,
              }
             }} className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                rel="noreferrer"  
                target={'_blank'}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                rel="noreferrer"  
                target={'_blank'}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
             initial={{
              opacity:0,
              y:60,
             }}
             animate={{
              opacity:1,
              y:0,
      
              transition:{
                staggerChildren:0.1,
              }
             }}>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
