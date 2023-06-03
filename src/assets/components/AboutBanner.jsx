import { motion } from 'framer-motion';

const AboutBanner = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className="grid grid-cols-3 gap-4 w-full max-w-screen-xl">
          <motion.div
            className='bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out col-span-1'
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className='flex-row justify-center'>
              <p className='text-xl font-semibold text-slate-900 dark:text-white my-3'>Our Mission</p>
              <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Your Assets,</span><br />in one place.</h1>
            </div>
          </motion.div>
          <motion.div
            className="bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out col-span-2"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3}}
          >
            <div>
              <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-200/60 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Dashboard launched</span>
                <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </a>
              <h1 className="mb-4 text-5xl font-extrabold text-slate-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Your Assets,</span><br />in one place.</h1>
              <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-200">At Inheritly, we concentrate on creating a seamless digital platform where technology and comprehensive asset management meet. Our goal is to transform estate planning and wealth tracking, driving effective long-term wealth growth for families.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AboutBanner
