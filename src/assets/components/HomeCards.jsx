import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeFeatures from './HomeFeatures';

const HomeCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Set to true to ensure animation only happens once
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true, // Set to true to ensure animation only happens once
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true, // Set to true to ensure animation only happens once
  });

  return (
    <>
      <section className="mt-10 min-h-screen pb-10">
        <div className="px-4 mx-auto max-w-screen-xl">
          <HomeFeatures />
          <motion.div
            className="bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3}}
            ref={ref}
            >
              <p className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-slate-600 dark:text-blue-400 mb-4">
                Explore
              </p>
              <h1 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-3">Your family assets, visualised.</h1>
              <p className="text-lg font-normal text-slate-500 dark:text-slate-400 mb-6">Our fintech app empowers you to effortlessly manage your family estate. Gain full control over your assets, streamline planning, and make informed decisions. Unlock financial opportunities, collaborate with ease, and secure a prosperous future. Simplify wealth management and embrace the future of estate planning with our intuitive platform.</p>
              <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-2xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Explore Features
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
          </motion.div>
          <div className="grid h-full md:grid-cols-2 gap-8">
            <motion.div
                className="h-full bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out"
                variants={cardVariants}
                initial="hidden"
                animate={inView2 ? "visible" : "hidden"}
                transition={{ duration: 0.3}}
                ref={ref2}
            >
              <p className="bg-green-200 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-slate-600 dark:text-green-400 mb-3">
                AI Generator
              </p>
              <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-3">Effortless Will creation with AI</h2>
              <p className="text-lg font-normal text-slate-500 dark:text-slate-400 mb-4">Our app features an AI-powered will generator for seamless estate planning. Say goodbye to complex paperwork and hello to a simplified process. Experience the convenience of creating a comprehensive will with ease, backed by intelligent algorithms. Secure the future of your estate effortlessly and efficiently.</p>
              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Try the Will Generator
                <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
            <motion.div
              className="h-full bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out"
              variants={cardVariants}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              transition={{ duration: 0.3}}
              ref={ref3}
            >
              <p className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-slate-600 dark:text-purple-400 mb-3">
                Simple
              </p>
              <h2 className="text-slate-900 dark:text-white text-3xl font-extrabold mb-3">Family-Friendly Simplicity</h2>
              <p className="text-lg font-normal text-slate-500 dark:text-slate-400 mb-4">Collaborate effortlessly with our app, designed to simplify wealth management for the entire family. Seamlessly track assets, share documents, and make decisions together. Enjoy a user-friendly interface that promotes transparency and strengthens family unity. Experience hassle-free collaboration while securing a prosperous future.</p>
              <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Try it Free
                <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeCards;
