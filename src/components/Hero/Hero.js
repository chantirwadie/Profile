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
        Étudiant ingénieur, en 5ème année dans l'école nationale des sciences
        appliquées El Jadida. Maintenant, je suis à la recherche d'une
        opportunité de stage PFE en Big Data, Data science, BI, Machine
        Learning.
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