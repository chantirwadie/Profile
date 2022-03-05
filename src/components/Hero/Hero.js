import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chantir
        Wadie
      </SectionTitle>
      <SectionText>
        Bonjour, Je m’appelle Chantir Wadie. je suis marocain, j'habite à
        Eljadida mais je suis de Taza, c'est près de Fès. J'ai 21 ans, je suis
        étudiant à l'école nationale des sciences appliquées d'eljdida. Il me
        reste un an pour terminer mes études, tanque un ingénieur dans le
        domaine de l'informatique et des technologies émergentes, je parle 3
        langues : anglais, arabe et français. et maintenant je suis à la
        recherche d'un stage d'été.
      </SectionText>
      <Button onClick={()=>window.location='https://s3.eu-central-1.amazonaws.com/stagiaires.ma/candidates/resumes/2022/02/202859_wadie-chantir.pdf?v=1644428770'}>Mon cv</Button>
    </LeftSection>
  </Section>
);

export default Hero;