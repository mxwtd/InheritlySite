import { motion } from "framer-motion";

const HomeHero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
          <motion.div
            className="px-4 mx-auto mt-[-8rem] max-w-screen-xl z-10 relative"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row bg-slate-50/50 dark:bg-slate-700/40 mt-32 md:mt-0 py-10 md:py-20 rounded-3xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 ease-in-out border border-slate-200 dark:border-slate-700 shadow-xl">
              <div id='column1' className="flex-1 mb-8 md:mb-0 mt-5 flex justify-center items-center px-10 md:px-40 lg:px-10">
                <img className="w-[100%]" src="https://res.cloudinary.com/djr22sgp3/image/upload/v1686063453/Mockup-Home_0.5x_jj6yyi.webp" alt="device-mockup"/>
              </div>
              <div id='column2' className="flex-1 text-left px-10 md:py-8">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-200/60 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-xs md:text-sm font-medium">Dashboard</span>
                  <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Your Assets,</span><br />in one place.</h1>
                <p className="mb-8 text-sm md:text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-200">At Inheritly, we concentrate on creating a seamless digital platform where technology and comprehensive asset management meet. Our goal is to transform estate planning and wealth tracking, driving effective long-term wealth growth for families.</p>
              </div>
            </div>
          </motion.div>
      </section>
    </>
  )
}

export default HomeHero;
