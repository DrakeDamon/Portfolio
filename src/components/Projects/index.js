import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  const filteredProjects = toggle === 'all' ? projects : projects.filter(item => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From Web apps to Ecommerce pages. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'Web App'} onClick={() => setToggle('Web App')}>Web App</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'Ecommerce'} onClick={() => setToggle('Ecommerce')}>Ecommerce</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'Social Media'} onClick={() => setToggle('Social Media')}>Social Media</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
