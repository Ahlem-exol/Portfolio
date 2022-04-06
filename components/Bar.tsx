import { FunctionComponent } from "react";

import { ISkill } from "../type";

import {motion} from "framer-motion"
const Bar: FunctionComponent<{ value: ISkill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-pink to-pink"
        style={{
          width: bar_width,
        }}
      
        initial={{
          width:0
        }}
        animate={{
          width: bar_width,
          transition :{
            duration:0.4,
            type:"spring",
            damping:10,
            stiffness:100,
          },
        }}
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
