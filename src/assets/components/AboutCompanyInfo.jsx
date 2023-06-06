import { motion } from 'framer-motion';

const AboutCompanyInfo = () => {

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className="grid md:grid-cols-3 lg:gap-8 w-full max-w-screen-xl grid-cols-1">
          <motion.div
            className='bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out md:col-span-1'
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <div className='flex flex-col justify-start items-left h-full'>
              <h1 className="mb-4 text-2xl font-extrabold text-slate-900 dark:text-white lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Our Vision</span></h1>
              <p className="text-sm md:text-lg font-normal text-slate-500 dark:text-slate-200">To revolutionise family estate wealth management, empowering families to secure their financial legacies with confidence, while providing a seamless user experience.</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out md:col-span-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3}}
          >
            <div>
              <h1 className="mb-4 text-2xl font-extrabold text-slate-900 dark:text-white lg:text-3xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Our Mission</span></h1>
              <p className=" text-sm md:text-lg font-normal text-slate-500 dark:text-slate-200">Our mission is to empower families to confidently navigate and manage their wealth, ensuring a lasting legacy for future generations. We strive to simplify the complexities of estate management through our interface, providing accessible tools and resources that promote transparency, collaboration, and informed decision-making. By leveraging technology and fostering a user-centric approach, we aim to revolutionise the way families preserve and grow their financial assets.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AboutCompanyInfo
