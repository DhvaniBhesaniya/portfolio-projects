import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: 'Leading the frontend development team in building and maintaining enterprise-level web applications.',
      achievements: [
        'Reduced page load time by 40% through performance optimization techniques',
        'Implemented a component library that increased development speed by 30%',
        'Led the migration from Angular to React, improving maintainability and developer experience',
        'Mentored junior developers, conducting code reviews and technical training sessions'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions Agency',
      location: 'New York, NY',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed responsive web applications for clients across various industries.',
      achievements: [
        'Built 15+ client websites using React, Vue.js, and modern CSS frameworks',
        'Implemented CI/CD pipelines that reduced deployment time by 50%',
        'Created a custom CMS solution that improved content management efficiency',
        'Collaborated with designers to ensure pixel-perfect implementation of designs'
      ]
    },
    {
      title: 'UI/UX Designer & Developer',
      company: 'CreativeMinds Studio',
      location: 'Austin, TX',
      period: 'Jun 2018 - Feb 2020',
      description: 'Combined design and development skills to create cohesive user experiences.',
      achievements: [
        'Designed and developed the company website, increasing lead generation by 35%',
        'Created wireframes and prototypes for mobile applications using Figma',
        'Implemented responsive designs with HTML, CSS, and JavaScript',
        'Conducted user testing sessions and implemented feedback to improve UX'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Innovations',
      location: 'Seattle, WA',
      period: 'Jan 2017 - May 2018',
      description: 'Assisted in the development of web applications and learned modern development practices.',
      achievements: [
        'Contributed to the development of a SaaS product used by 10,000+ users',
        'Learned and implemented responsive design principles across projects',
        'Fixed 100+ bugs in the existing codebase, improving application stability',
        'Participated in agile development processes, including daily standups and sprint planning'
      ]
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
    <section id="experience" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 md:mb-0 relative ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
              }`}
              style={{ maxWidth: '48%' }}
            >
              <div className={`hidden md:block absolute top-0 ${
                index % 2 === 0 ? 'right-0 -translate-x-1/2' : 'left-0 translate-x-1/2'
              } w-10 h-10 bg-white dark:bg-gray-900 border-4 border-purple-600 dark:border-purple-500 rounded-full z-10`}>
                <div className="w-full h-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Briefcase size={16} />
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4 md:hidden">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                </div>
                
                <h3 className="text-xl font-bold mb-2 hidden md:block">{exp.title}</h3>
                
                <div className={`flex flex-wrap gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4 ${
                  index % 2 === 0 ? 'md:justify-end' : ''
                }`}>
                  <div className="flex items-center mr-4">
                    <Award size={16} className="mr-1" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600 dark:text-purple-400">Key Achievements:</h4>
                  <ul className={`space-y-1 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rounded-full mt-1.5 mr-2 md:hidden"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;