import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomeFeatures = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Set to true to ensure animation only happens once
  });

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl">
          <motion.div
            className="bg-slate-50/50 dark:bg-slate-700/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-3xl p-8 md:p-12 mb-8 shadow-xl hover:backdrop-blur-xl transition-all duration-300 ease-in-out"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.3}}
            ref={ref}
          >
            <div>
              <h1 className="mb-3 text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">Features</h1>
              <p className="mb-3 text-sm md:text-lg text-slate-500 dark:text-slate-400">A wide array of features to help you track and view your family assets globally.</p>
              <div className='grid grid-cols-2 lg:grid-cols-4 justify-items-center pt-10'>
                <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                  <svg fill="none" className='w-20 h-20 text-slate-500 dark:text-slate-400' stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                  <h2 className="text-center text-sm md:text-lg text-slate-500 dark:text-slate-400">Easy For the family</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                  <svg fill="none" className='w-20 h-20 text-slate-500 dark:text-slate-400' stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                  </svg>
                  <h2 className="text-center text-sm md:text-lg text-slate-500 dark:text-slate-400">Track all your Assets</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                  <svg fill="none" className='w-20 h-20 text-slate-500 dark:text-slate-400' stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <h2 className="text-center text-sm md:text-lg text-slate-500 dark:text-slate-400">Multi-device support</h2>
                </div>
                <div className='flex flex-col justify-center items-center gap-3 mb-4'>
                  <svg fill="none" className='w-20 h-20 text-slate-500 dark:text-slate-400' stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                  </svg>
                  <h2 className="text-center text-sm md:text-lg text-slate-500 dark:text-slate-400">Securely stored information</h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomeFeatures
