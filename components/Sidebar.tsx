import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiOutlineCloudDownload } from "react-icons/ai";
import { SiFiverr} from "react-icons/si";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <Image
        src="/Images/R.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"

      /> */}
      {/* #ffb6c1 */}
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        Hello it s  <span className="text-pink ">Ahelm</span> CHELLI
      </h3>
      {/* <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p> */}
         <span className='text-pink-light'>
                        <Typewriter
                        options={{
                            strings: ['Full stack Developer','Artificial Intelligence Engineer','Ui Designer','IT Project Manager'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed:20
                        }}
                        />
                    </span>
      {/* Resume */}
      <br></br>
      <a
      // i should creat a assets dossier 
        href="/Doc/Encv.pdf"
        download="Encv.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <AiOutlineCloudDownload className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-pink md:w-full ">
        <a href="https://www.fiverr.com/ahlemexol?up_rollout=true">
          <SiFiverr className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ahlem-chelli-03660a1a1/" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/Ahlem-exol">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Alger,Algeria </span>
        </div>
        <p className="my-2 "> chelliahelm98@gmail.com </p>
        <p className="my-2"> +213 6 76 55 80 79 </p>
      </div>

      {/* Email Button */}
<p>I will give your business a new creative start right away! contact me now</p><br></br>
      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-pink to-gray-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:chelliahlem98@gmail.com")}
      >
        Email me
      </button>
      {/* <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-pink to-gray-500 focus:outline-none hover:scale-105 "
      >
   
        Toggle Theme
      </button> */}
    </>
  );
};

export default Sidebar;
