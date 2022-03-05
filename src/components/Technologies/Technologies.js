import React from 'react';
import { DiFirebase, DiReact, DiZend,DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <div>
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Les technologies</SectionTitle>
      <SectionText>
        J'ai travaillé avec une gamme de technologies dans le monde du
        développement Web et Mobile. Du back-end au front-end
      </SectionText>
      <List>
        <ListItem>
          <picture>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Expérience avec
              <br />
              React.js
              <br />
              Angular.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiFirebase size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Expérience avec
              <br />
              NodeJs / ExpressJs
              <br />
              Php / Laravel
              <br />
              JavaEE / Spring
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiZend size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Expérience avec
              <br />
              des outils comme Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture>
            <DiAndroid size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Mobile</ListTitle>
            <ListParagraph>
              Expérience avec
              <br />
              Ionic/ AngulairJS
              <br />
             Android Studio  
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>{" "}
  </div>
);

export default Technologies;
