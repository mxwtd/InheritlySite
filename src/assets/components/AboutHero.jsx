import AboutBanner from "./AboutBanner";
import TeamCard from "./TeamCard";

const AboutHero = () => {
  return (
    <>
      <section>
        <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
          <div className="text-left">
              <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-slate-800 dark:text-slate-300">About</h1>
              <p className="font-light text-slate-500 lg:mb-16 sm:text-xl dark:text-slate-400">Meet the Team.</p>
          </div>
          <AboutBanner />
          <div>
            <TeamCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHero;
