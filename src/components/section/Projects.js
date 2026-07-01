import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import {
  FaAws,
  FaGithub,
  FaReact,
} from "react-icons/fa";

import { SiDjango, SiJavascript } from "react-icons/si";

// ================= PROJECT DATA =================

const projectCategories = {
  Applications: [
    {
      title: "Cyber Security Alert System (AI-Enabled)",
      desc: "A Django-based web application designed to monitor and manage cybersecurity alerts using AI-powered techniques for early threat detection and automated analysis.",

      tools: [
        "Python",
        "AI",
        "Machine Learning",
        "Cyber Security",
        "Django",
        "MySql",
        "React",
        "HTML/CSS",
        "Javascripts",
      ],

      github: "https://github.com/Sabareesh98/AI-in-Cyber-Security",

      gradient: "linear-gradient(135deg,#2563eb,#7c3aed)",

      icon: <FaReact />,
    },

    {
      title: "AI-Based Car Parking Detection System",

      desc: "Artificial intelligence to monitor parking lot spaces and detect which slots are occupied or vacant in real-time using video or image feed.",

      tools: [
        "Python",
        "AI",
        "Machine Learning",
        "OpenCV",
        "Numpy",
        "Tensorflow",
      ],

      github: "https://github.com/Sabareesh98/AI-Car-Parking-Using-OpenCV",

      gradient: "linear-gradient(135deg,#0ea5e9,#2563eb)",

      icon: <SiJavascript />,
    },
  ],

  Cloud: [
    {
      title: "AWS Cloud Deployment-Serverless web application",

      desc: "Deploy a serverless web application to edit images using Amazon Bedrock.",

      tools: [
        "AWS Serverless",
        "EC2",
        "Cloud",
        "Amazon Bedrock",
        "S3",
        "Lambda",
        "API Gateway",
      ],

      github:
        "https://github.com/Sabareesh98/Build-an-Image-Editing-Serverless-App-using-AWS-Service",

      gradient: "linear-gradient(135deg,#f59e0b,#f97316)",

      icon: <FaAws />,
    },

    {
      title: "Django Cloud Backend",

      desc: "Scalable Django backend connected with cloud database and authentication system.",

      tools: ["Django", "AWS", "MySQL"],

      github: "#",

      gradient: "linear-gradient(135deg,#10b981,#059669)",

      icon: <SiDjango />,
    },
  ],
};

// ================= ANIMATIONS =================

const glow = keyframes`
  0%{
    opacity:0.4;
  }

  50%{
    opacity:0.8;
  }

  100%{
    opacity:0.4;
  }
`;

const float = keyframes`
  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-15px);
  }

  100%{
    transform:translateY(0px);
  }
`;

// ================= STYLES =================

const Section = styled.section`
  position: relative;

  overflow: hidden;

  padding: 7rem 10vw;

  background: linear-gradient(135deg, #020617 0%, #0f172a 35%, #111827 100%);
`;

const Glow1 = styled.div`
  position: absolute;

  width: 350px;
  height: 350px;

  background: #2563eb;

  border-radius: 50%;

  filter: blur(120px);

  top: -100px;
  left: -100px;

  opacity: 0.25;

  animation: ${glow} 6s infinite;
`;

const Glow2 = styled.div`
  position: absolute;

  width: 300px;
  height: 300px;

  background: #7c3aed;

  border-radius: 50%;

  filter: blur(120px);

  bottom: -100px;
  right: -100px;

  opacity: 0.25;

  animation: ${glow} 8s infinite;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
`;

const SmallTitle = styled.div`
  text-align: center;

  color: #60a5fa;

  letter-spacing: 2px;

  text-transform: uppercase;

  font-size: 0.95rem;

  margin-bottom: 1rem;
`;

const MainTitle = styled.h2`
  text-align: center;

  font-size: 4rem;

  font-weight: 800;

  line-height: 1.1;

  color: white;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  text-align: center;

  color: #cbd5e1;

  max-width: 700px;

  margin: auto;
  margin-bottom: 4rem;

  line-height: 1.8;
`;

const Tabs = styled.div`
  display: flex;

  justify-content: center;

  gap: 1rem;

  margin-bottom: 4rem;

  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 0.9rem 1.6rem;

  border: none;

  border-radius: 18px;

  cursor: pointer;

  font-weight: 600;

  color: white;

  background: ${(props) =>
    props.active
      ? "linear-gradient(135deg,#2563eb,#7c3aed)"
      : "rgba(255,255,255,0.08)"};

  border: 1px solid rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 2rem;
`;

const Card = styled(motion.div)`
  position: relative;

  overflow: hidden;

  border-radius: 30px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  padding: 2rem;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);

  transition: 0.4s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const TopCard = styled.div`
  width: 85px;
  height: 85px;

  border-radius: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.5rem;

  background: ${(props) => props.gradient};

  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);

  animation: ${float} 6s ease infinite;

  svg {
    color: white;
    font-size: 2.3rem;
  }
`;

const CardTitle = styled.h3`
  color: white;

  font-size: 1.5rem;

  margin-bottom: 1rem;
`;

const CardDesc = styled.p`
  color: #cbd5e1;

  line-height: 1.8;

  margin-bottom: 1.5rem;
`;

const Tools = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 0.8rem;

  margin-bottom: 2rem;
`;

const Tool = styled.div`
  padding: 0.5rem 1rem;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.08);

  color: #e2e8f0;

  font-size: 0.9rem;
`;

const ButtonRow = styled.div`
  display: flex;

  gap: 1rem;
`;

const Button = styled.a`
  flex: 1;

  padding: 0.9rem;

  border-radius: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-decoration: none;

  color: white;

  font-weight: 600;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

// ================= COMPONENT =================

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Applications");

  return (
    <Section id="projects">
      <Glow1 />
      <Glow2 />

      <Content>
        <SmallTitle> Projects</SmallTitle>

        <MainTitle>
          <GradientText>Software Applications</GradientText>
        </MainTitle>

        <Subtitle>
          Explore my modern web applications, cloud-based systems, and full
          stack development projects built with modern technologies.
        </Subtitle>

        <Tabs>
          {Object.keys(projectCategories).map((cat) => (
            <Tab
              key={cat}
              active={activeTab === cat}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </Tab>
          ))}
        </Tabs>

        <Grid>
          {projectCategories[activeTab].map((project, i) => (
            <Card
              key={i}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <TopCard gradient={project.gradient}>{project.icon}</TopCard>

              <CardTitle>{project.title}</CardTitle>

              <CardDesc>{project.desc}</CardDesc>

              <Tools>
                {project.tools.map((tool, idx) => (
                  <Tool key={idx}>{tool}</Tool>
                ))}
              </Tools>

              <ButtonRow>
                <Button href={project.github} target="_blank">
                  <FaGithub />
                  GitHub
                </Button>
              </ButtonRow>
            </Card>
          ))}
        </Grid>
      </Content>
    </Section>
  );
}
