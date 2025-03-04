import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Heart, Zap, Coffee } from 'lucide-react';
import { gsap } from 'gsap';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const timelineRef = useRef(null);
  
  useEffect(() => {
    if (isInView && timelineRef.current) {
      gsap.to('.timeline-dot', {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
      
      gsap.to('.timeline-line', {
        height: '100%',
        duration: 1.5,
        ease: 'power2.out'
      });
    }
  }, [isInView]);

  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'I strive for excellence in every project, focusing on quality and attention to detail.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Passion',
      description: 'Passionate about creating beautiful, functional, and user-friendly digital experiences.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and approaches to solve complex problems.'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Dedication',
      description: 'Committed to delivering projects on time and exceeding client expectations.'
    }
  ];

  const timelineEvents = [
    {
      year: '2018',
      title: 'Started Coding Journey',
      description: 'Began learning web development through online courses and bootcamps.'
    },
    {
      year: '2019',
      title: 'First Professional Role',
      description: 'Joined a startup as a junior developer working on frontend projects.'
    },
    {
      year: '2021',
      title: 'Senior Developer',
      description: 'Promoted to senior developer, leading a team of 5 developers.'
    },
    {
      year: '2023',
      title: 'Freelance Career',
      description: 'Started freelancing, working with clients worldwide on diverse projects.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Get to know more about me, my journey, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate frontend developer and UI/UX designer with over 5 years of experience creating beautiful, 
              functional, and user-friendly websites and applications. My journey in web development began when I was 
              fascinated by how technology could transform ideas into interactive experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Throughout my career, I've worked with startups, agencies, and established companies, helping them build 
              products that users love. I believe in the power of clean code, thoughtful design, and continuous learning.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm">UI/UX Design</span>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-sm">Responsive Design</span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm">Node.js</span>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-8"
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div ref={timelineRef} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 timeline-line h-0"></div>
              
              {timelineEvents.map((event, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute left-0 w-4 h-4 bg-white dark:bg-gray-900 border-2 border-purple-600 dark:border-purple-500 rounded-full -translate-x-1/2 timeline-dot scale-0 opacity-0"></div>
                  <div className="pl-6">
                    <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-sm font-medium mb-2">
                      {event.year}
                    </span>
                    <h4 className="text-lg font-semibold mb-1">{event.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;