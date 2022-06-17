import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from 'framer-motion';

const Resume = () => {



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
 className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div 
        
            initial={{
              opacity:0,
              y:60,
            }}
             animate={{
              opacity:1,
              y:0,
             }}
        
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            Artificial Intelligence Engineer

            </h5>
            <p className="font-semibold">Master&apos;s degree - University of Algiers, Algeria (2018-2020)</p>
            <p className="my-3">
            
            </p>
          </div>
        </motion.div>
       <motion.div 
            initial={{
              opacity:0,
              y:60,
            }}
             animate={{
              opacity:1,
              y:0,
             }}
        
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Computer Engineer.</h5>
            <p className="font-semibold">EPE ALRIM Spa</p>
            <p className="my-3"> Intervene on the IT infrastructure, Server Management and 
System Administration;</p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
