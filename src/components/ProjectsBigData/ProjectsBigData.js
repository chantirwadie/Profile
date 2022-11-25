import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsBigDataStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projectsBigData } from '../../constants/constants';

const Projects = () => (
  <div>
     <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projets de Big Data</SectionTitle>
    <GridContainer>
      {projectsBigData.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
          
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
  </div>
);

export default Projects;