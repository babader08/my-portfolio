import Accueil from "../components/Accueil";
import Contact from "../components/Contact ";
import Header from "../components/Header";
import Projects from "../components/Projects";
import WorkExperience from "../components/Workexperience";

const Home = () => {
  return (
    <main>
      <Header />
      <Accueil />
      <WorkExperience />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
