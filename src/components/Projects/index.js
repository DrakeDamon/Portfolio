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
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'android app'} onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
          <Divider />
          <ToggleButton active={toggle === 'machine learning'} onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
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
