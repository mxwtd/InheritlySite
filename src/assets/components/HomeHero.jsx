import { motion } from "framer-motion";

const HomeHero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center md:mt-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full top-0 left-0 z-0">
          <motion.div
            className="px-4 mx-auto mt-[-6rem] max-w-screen-xl z-10 relative"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row bg-slate-50/50 dark:bg-slate-700/40 mt-32 md:mt-0 py-10 md:py-20 rounded-3xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 ease-in-out border border-slate-200 dark:border-slate-600 shadow-xl">
              <div id='column1' className="flex-1 overflow-hidden px-10 mb-8 md:mb-0 mt-5">
                <div className="relative mx-auto border-slate-600 dark:border-slate-800 bg-slate-600 dark:bg-slate-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                  <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-slate-800">
                      <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-3xl" alt="" />
                      <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt=""/>
                  </div>
                </div>
                <div className="relative mx-auto bg-slate-500 dark:bg-slate-600 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-slate-800"></div>
                </div>
              </div>
              <div id='column2' className="flex-1 text-left px-10">
                <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-200/60 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Dashboard launched</span>
                  <svg aria-hidden="true" className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
                <h1 className="mb-4 text-5xl font-extrabold text-slate-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">Your Assets,</span><br />in one place.</h1>
                <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-200">At Inheritly, we concentrate on creating a seamless digital platform where technology and comprehensive asset management meet. Our goal is to transform estate planning and wealth tracking, driving effective long-term wealth growth for families.</p>
              </div>
            </div>
          </motion.div>
      </section>
    </>
  )
}

export default HomeHero;
