import HeroSection from '../components/HeroSection/HeroSection';
import KnowledgeSection from '../components/KnowledgeSection/KnowledgeSection';
import PortfolioNavbar from '../components/PortfolioNavbar/PortfolioNavbar';
import ProjectsResumeSection from '../components/ProjectsResumeSection/ProjectsResumeSection';
import SkillsSection from '../components/SkillsSection/SkillsSection';

const Home = (): JSX.Element => {
  return (
    <div>
      <PortfolioNavbar />
      <main>
        <HeroSection />
        <KnowledgeSection />
        <SkillsSection />
        <ProjectsResumeSection />
      </main>
    </div>
  );
};

export default Home;
