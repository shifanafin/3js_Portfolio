import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { VerticalTimeline } from "react-vertical-timeline-component";

const ProjectCards = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" bg-tertiary  p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
            src={image}
            alt={name}
            onClick={() => window.open(source_code_link, "_blank")}
          />
        
        </div>
        <div className="mt-5">
              <h3 className="text-white font-bold text-[24px] "> {name}</h3>
              <p className="mt-2 text-secondary text-[14px]" > {description}</p>
         
          
          
        </div>
        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag,index)=>(
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}



            </p>


          ))}

        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}> My Works.</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] mx-w-3xl leading-[30px]"
        >
          These Projects helps me to showcase my skills and entusiasam in
          building projects
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCards key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
