'use client'
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    ref={ref}
  >
    <SectionHeading>
      about
    </SectionHeading>
    <p className='mb-3'>
      My journey began with online tutorials and courses that laid the foundation for my {" "}
      <span className="font-medium">skills</span>, I decided to pursue my
      passion for programming. I did hands-on projects and learned{" "}
      <span className="font-medium">web development</span>.{" "}
      <span className="italic">My favorite part of programming</span> is the
      problem-solving aspect. I <span className="underline">love</span> the
      feeling of finally figuring out a solution to a problem. My core stack
      is{" "}
      <span className="font-medium">
        Next.js 
      </span>
      . I am also familiar with TypeScript. I am always looking to
      learn new technologies. I am currently looking for a{" "}
      <span className="font-medium">full-time position</span> as a frontend web development.
    </p>
    <p>
      <span className="italic">When I'm not coding</span>, I enjoy playing
      video games and watching movies. I also enjoy{" "}
      <span className="font-medium">learning new things</span>. I am currently
      learning about{" "}
      <span className="font-medium">content creation</span>.
    </p>
  </motion.section>
}

export default About