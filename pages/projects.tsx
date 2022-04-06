import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number|null>()
 

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
    initial={{
      opacity:0,
         }}
  animate={{
  opacity:1,
  transition:{
    delay:0.1,
    duration:0.1,
  },

}}

exit={{
  opacity:0,
  transition:{
    delay:0.1,
    ease:"easeInOut",
  }
}}  
    className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div 
      className="relative grid grid-cols-12 gap-4 my-3"
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
      >
         {
         projects.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div   initial={{
            opacity:0,
            y:60,
           }}
           animate={{
            opacity:1,
            y:0,
    
            transition:{
              staggerChildren:0.1,
            }
           }}className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}  key={project.name} />
          </motion.div>
        ))
        } 
      </motion.div>
    </motion.div>
  );
};

export default Projects;
