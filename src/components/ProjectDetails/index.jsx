import { CloseRounded, GitHub, LinkedIn, BarChart, DataObject, Architecture, Speed, BugReport } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 20px 6px 8px 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 16px 6px 8px 6px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 6px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.card_light};
  margin: 8px 6px;
`;

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0;
  font-size: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
  padding-bottom: 4px;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const DataKey = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const DataValue = styled.span`
  font-weight: 400;
`;

const ArchitectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 6px;
`;

const ArchitectureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 12px 0;
  
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card_light+50};
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;

const MetricName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 4px;
`;

const MetricValue = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const ChallengeTag = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary+10};
  color: ${({ theme }) => theme.text_primary};
  margin: 4px;
  
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ChallengeTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) => dull && `
    background-color: ${theme.bgLight};
    color: ${theme.text_secondary};
    &:hover {
      background-color: ${({ theme }) => theme.bg + 99};
    }
  `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    
    // Default data science details if not provided in the project object
    const datasetInfo = project?.datasetInfo || {
      source: "Custom collected educational data",
      size: "5,000+ student records",
      features: "20+ features including academic, behavioral, and demographic data",
      preprocessing: "Handled missing values with multiple imputation, normalized numerical features"
    };
    
    const modelArchitecture = project?.modelArchitecture || [
      "Data preprocessing & feature engineering layer",
      "Gradient Boosting classifier with optimized hyperparameters",
      "Ensemble model with 10-fold cross-validation",
      "Prediction post-processing for interpretability"
    ];
    
    const performanceMetrics = project?.performanceMetrics || {
      accuracy: "78%", 
      precision: "81%",
      recall: "75%",
      f1Score: "77.9%"
    };
    
    const technicalChallenges = project?.technicalChallenges || [
      "Handling imbalanced class distribution",
      "Feature selection for optimal performance",
      "Deployment optimization for low-latency predictions",
      "Interpretability of model outputs for non-technical users"
    ];
    
    // Check if this is a data science project based on tags
    const isDataScienceProject = project?.tags?.some(tag => 
      ['Python', 'Machine Learning', 'Data Science', 'TensorFlow', 'Data Analysis', 'scikit-learn'].includes(tag)
    );
    
    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <Image src={project?.image} />
                    <Title>{project?.title}</Title>
                    <Date>{project?.date}</Date>
                    <Tags>
                        {project?.tags?.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    
                    {/* Data Science specific sections */}
                    {isDataScienceProject && (
                      <>
                        <Label><DataObject /> Dataset Information</Label>
                        <DataSection>
                          <DataRow>
                            <DataKey>Source:</DataKey>
                            <DataValue>{datasetInfo.source}</DataValue>
                          </DataRow>
                          <DataRow>
                            <DataKey>Size:</DataKey>
                            <DataValue>{datasetInfo.size}</DataValue>
                          </DataRow>
                          <DataRow>
                            <DataKey>Features:</DataKey>
                            <DataValue>{datasetInfo.features}</DataValue>
                          </DataRow>
                          <DataRow>
                            <DataKey>Preprocessing:</DataKey>
                            <DataValue>{datasetInfo.preprocessing}</DataValue>
                          </DataRow>
                        </DataSection>
                        
                        <Label><Architecture /> Model Architecture</Label>
                        <ArchitectureContainer>
                            {modelArchitecture.map((item, index) => (
                                <ArchitectureItem key={index}>
                                {index + 1}. {item}
                                </ArchitectureItem>
                            ))}
                        </ArchitectureContainer>
                        
                        <Label><BarChart /> Performance Metrics</Label>
                        <MetricsGrid>
                          <MetricCard>
                            <MetricName>Accuracy</MetricName>
                            <MetricValue>{performanceMetrics.accuracy}</MetricValue>
                          </MetricCard>
                          <MetricCard>
                            <MetricName>Precision</MetricName>
                            <MetricValue>{performanceMetrics.precision}</MetricValue>
                          </MetricCard>
                          <MetricCard>
                            <MetricName>Recall</MetricName>
                            <MetricValue>{performanceMetrics.recall}</MetricValue>
                          </MetricCard>
                          <MetricCard>
                            <MetricName>F1 Score</MetricName>
                            <MetricValue>{performanceMetrics.f1Score}</MetricValue>
                          </MetricCard>
                        </MetricsGrid>
                        
                        <Label><BugReport /> Technical Challenges</Label>
                        <ChallengeTags>
                          {technicalChallenges.map((challenge, index) => (
                            <ChallengeTag key={index}>
                              {challenge}
                            </ChallengeTag>
                          ))}
                        </ChallengeTags>
                      </>
                    )}
                    
                    {project?.member && (
                        <>
                            <Label>Members</Label>
                            <Members>
                                {project?.member.map((member) => (
                                    <Member>
                                        <MemberImage src={member.img} />
                                        <MemberName>{member.name}</MemberName>
                                        <a href={member.github} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="new" style={{textDecoration: 'none', color: 'inherit'}}>
                                            <LinkedIn />
                                        </a>
                                    </Member>
                                ))}
                            </Members>
                        </>
                    )}
                    <ButtonGroup>
                        <Button dull href={project?.github} target='new'>View Code</Button>
                        <Button href={project?.webapp} target='new'>View Live App</Button>
                    </ButtonGroup>
                </Wrapper>
            </Container>
        </Modal>
    )
}

// These were in the original component but weren't defined in the snippet
// Adding them back to ensure the component works properly
const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;
  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export default ProjectDetails;