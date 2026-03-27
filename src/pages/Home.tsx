import Hero from '../components/Hero/Hero';
import Knowledge from '../components/Knowledge/Knowledge';
import Navbar from '../components/Navbar/Navbar';
import Contact from '../components/Contact/Contact';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Skills from '../components/Skills/Skills';

const Home = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Knowledge />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
