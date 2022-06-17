import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { IService } from "../type";
 import {motion} from 'framer-motion';

const About: NextPage = () => {
  // console.log(services);

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
     className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
      Graduated in Intelligent Computer Systems Engineering. Motivated, able 
      to work in multitasking environments and with the ability to complete 
      multiple projects and provide original and effective solutions.
      
      A full stack developer who enjoy learning everything about development,
      knowledgeable in user interfaces and experiences.
     
      


      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2"
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
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <motion.div
            initial={{
              opacity:0,
              y:60,
             }}
             animate={{
              opacity:1,
              y:0,
              
             }}

              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};



export default About;
