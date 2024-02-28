import Blog from "./Components/Blog";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import FunFact from "./Components/FunFact";
import Hero from "./Components/Hero";
import SkillsAndTools from "./Components/SkillsAndTools";
import Works from "./Components/Works";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Hero />
      <Experience />
      <Education />
      <SkillsAndTools />
      <Works />
      <FunFact />
      <Blog />
    </div>
  )
}

export default Home