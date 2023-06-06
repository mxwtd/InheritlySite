import AboutIntro from "./AboutIntro";
import AboutCompanyInfo from "./AboutCompanyInfo";
import TeamCard from "./TeamCard";

const AboutCards = () => {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12 lg:px-6">
          <AboutIntro />
          <AboutCompanyInfo />
          <TeamCard />
        </div>
      </section>
    </>
  )
}

export default AboutCards;
