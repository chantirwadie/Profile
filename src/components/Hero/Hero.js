import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chantir Wadie
      </SectionTitle>
      <SectionText>
        Je veux mettre mes compétences et mes expériences en pratique. Je
        maîtrise les différentes étapes techniques de création d'un site ou
        d'une application web, depuis l'analyse des besoins des clients, la
        conception , l'implémentation côté front- end et back-end, y compris le
        déploiemen. et actuallement je suis à la recherche d'un stage PFE.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://www.stagiaires.ma/uploads_tmp/candidates/resumes/2022/11/1669390249_202859_wadie-chantir.pdf?v=1669390249")
        }
      >
        Mon cv
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;