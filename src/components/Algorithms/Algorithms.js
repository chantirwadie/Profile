import React from 'react';
import { DiFirebase, DiReact, DiZend,DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './AlgorithmsStyles';

const Technologies = () => (
  <div>
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Les model d'apprentissage</SectionTitle>
      <SectionText>
      J'ai déjà eu l'occasion de manipuler et de travailler sur plusieurs algorithmes et model d'apprentissage à savoir :
      </SectionText>
      <List>
        <ListItem>
          <ListTitle>KNN</ListTitle>
        </ListItem>
        <ListItem>
          <ListTitle>Régression linéaire</ListTitle>
        </ListItem>{" "}
        <ListItem>
          <ListTitle>forêts aléatoires</ListTitle>
        </ListItem>{" "}
        <ListItem>
          <ListTitle>arbres de décision</ListTitle>
        </ListItem>{" "}
        <ListItem>
          <ListTitle>Naïve Bayes</ListTitle>
        </ListItem>
        <ListItem>
          <ListTitle>SVM</ListTitle>
        </ListItem>
        <ListItem>
          <ListTitle>Régression logistique</ListTitle>
        </ListItem>
        <ListItem>
            <ListTitle>K-Means</ListTitle>
        </ListItem>
        <ListItem>
            <ListTitle>clustering</ListTitle>
        </ListItem>
        <ListItem>
            <ListTitle>réduction de la dimensionnalité</ListTitle>
        </ListItem>
      </List>
      <SectionDivider colorAlt />
    </Section>{" "}
  </div>
);

export default Technologies;
