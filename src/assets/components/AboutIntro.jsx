import { motion } from "framer-motion";

const AboutIntro = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className="mb-8">
          <motion.div
            className="z-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row bg-slate-50/50 dark:bg-slate-700/40 py-10 md:py-20 rounded-3xl backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 ease-in-out border border-slate-200 dark:border-slate-700 shadow-xl">
              <div id='column1' className="flex-1 mb-8 md:mb-0 mt-5 flex justify-center items-center">
                <img className="w-[80%]" src="https://res.cloudinary.com/djr22sgp3/image/upload/v1686062089/Mockup-About_0.5x_usdzxy.webp" alt="device-mockup"/>
              </div>
              <div id='column2' className="flex flex-col justify-center items-left flex-1 text-left px-8">
                <h1 className="mb-4 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-b to-teal-400 from-blue-700 dark:to-white dark:from-blue-700">A Vision</span><br />of clearer family estates.</h1>
                <p className="mb-4 text-sm md:text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-200">Inheritly is an comprehensive platform designed to help families consolidate and manage their assets in one place, facilitating effective estate planning.</p>
                <p className="text-sm md:text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-200">By streamlining the process of documenting and tracking various assets such as real estate and investment accounts, the app aims to create an accessible and transparent resource for family members and legal representatives.</p>
              </div>
            </div>
          </motion.div>
      </section>
    </>
  )
}

export default AboutIntro
