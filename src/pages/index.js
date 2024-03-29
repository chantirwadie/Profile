import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import ProjectsBigData from '../components/ProjectsBigData/ProjectsBigData';
import Technologies from '../components/Technologies/Technologies';
import Algorithms from '../components/Algorithms/Algorithms';
import { useEffect } from "react";

import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section ,DivWitoutImg} from '../styles/GlobalComponents';

const Home = () => {
  useEffect(() => {
    document.title = "CHANTIR Wadie";
  }, []);

  return (
    <Layout>
     <Section grid>
        <Hero />
        <DivWitoutImg>
          <BgAnimation />
        </DivWitoutImg>
        
       </Section> 
      <Projects />
      <ProjectsBigData />

      <Technologies />
      <Algorithms />

      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
