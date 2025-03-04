import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Palette, Database, Server, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Vue.js', level: 75 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Sketch', level: 70 },
        { name: 'User Research', level: 75 },
        { name: 'Prototyping', level: 82 },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', level: 78 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'Firebase', level: 82 },
        { name: 'REST APIs', level: 85 },
      ]
    },
    {
      title: 'Other Skills',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'Git/GitHub', level: 88 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'SEO Basics', level: 75 },
        { name: 'Testing', level: 72 },
      ]
    }
  ];

  const certifications = [
    {
      title: 'Advanced React & Redux',
      issuer: 'Udemy',
      date: '2022',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'UI/UX Design Masterclass',
      issuer: 'Interaction Design Foundation',
      date: '2021',
      icon: <Palette className="w-5 h-5" />
    },
    {
      title: 'MongoDB Database Administrator',
      issuer: 'MongoDB University',
      date: '2020',
      icon: <Database className="w-5 h-5" />
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2022',
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical skills, expertise, and professional certifications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-purple-600 to-blue-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + (skillIndex * 0.1) }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-5 border-t-4 border-purple-600 dark:border-purple-500"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                    {cert.icon}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;