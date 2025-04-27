import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import ProjectElement from '../components/ProjectElement';

function Project() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className='flex item-center justify-center flex-col-reverse lg:justify-between lg:flex-row p-5 lg:p-10 gap-10'>

      {/* Left Part */}
      <motion.div 
        className='relative w-full lg:sticky lg:top-10 lg:w-1/2 lg:h-screen'
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
      >
        <Cards />
      </motion.div>

      {/* Right Part */}
      <div className="w-full flex flex-col max-sm:pl-2 lg:pl-20 gap-28">
        
        {/* Project - element */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <ProjectElement />
        </motion.div>

        {/* Contact - element */}
        <motion.div 
          initial={{ x: 200, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <Contact />
        </motion.div>
      </div>

    </div>
  );
}

export default Project;