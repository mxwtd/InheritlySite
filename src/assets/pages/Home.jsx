import HomeHero from "../components/HomeHero"
import HomeCards from "../components/HomeCards"

const Home = () => {
  return (
    <>
      <div className="px-0 md:px-5 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/80 z-0">
        <HomeHero />
        <HomeCards />
      </div>
    </>
  )
}

export default Home
