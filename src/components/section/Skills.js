import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaPython,
  FaAws,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiFramer,
  SiMysql,
  SiDjango,
} from "react-icons/si";

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
    transform:translateY(-10px);
  }

  100%{
    transform:translateY(0px);
  }
`;

// ================= STYLES =================

const SkillsWrap = styled.section`
  position: relative;

  overflow: hidden;

  padding: 7rem 10vw;

  background: linear-gradient(135deg, #020617 0%, #0f172a 35%, #111827 100%);
`;

const Glow1 = styled.div`
  position: absolute;

  width: 320px;
  height: 320px;

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

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 2rem;
`;

const Cat = styled(motion.div)`
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

const CardGlow = styled.div`
  position: absolute;

  width: 120px;
  height: 120px;

  background: #2563eb;

  border-radius: 50%;

  filter: blur(80px);

  top: -50px;
  right: -40px;

  opacity: 0.2;
`;

const CardTitle = styled.h4`
  color: white;

  font-size: 1.5rem;

  margin-bottom: 1.8rem;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkillsList = styled.ul`
  list-style: none;

  padding: 0;

  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 1rem;

  margin-bottom: 1rem;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.06);

  transition: 0.3s ease;

  animation: ${float} 6s ease infinite;

  &:hover {
    background: rgba(255, 255, 255, 0.1);

    transform: translateX(5px);
  }
`;

const IconWrap = styled.div`
  width: 45px;
  height: 45px;

  border-radius: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.25);

  svg {
    color: white;
    font-size: 1.2rem;
  }
`;

const SkillName = styled.span`
  color: #f8fafc;

  font-size: 1rem;

  font-weight: 500;
`;

// ================= COMPONENT =================

export default function Skills() {
  const skills = {
    Languages: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <SiMysql /> },
    ],

    Frameworks: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Redux", icon: <SiRedux /> },
    ],

    CloudTools: [
      { name: "AWS Cloud", icon: <FaAws /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
  };

  return (
    <SkillsWrap id="skills">
      <Glow1 />
      <Glow2 />

      <Content>

        <MainTitle>
          <GradientText>Technical Skills</GradientText>
        </MainTitle>

        <Subtitle>
          Technologies, frameworks and cloud tools that I use to build scalable,
          modern and high-performance software applications.
        </Subtitle>

        <Grid>
          {Object.keys(skills).map((cat) => (
            <Cat
              key={cat}
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
              whileHover={{
                scale: 1.02,
              }}
            >
              <CardGlow />

              <CardTitle>{cat}</CardTitle>

              <SkillsList>
                {skills[cat].map((skill) => (
                  <SkillItem key={skill.name}>
                    <IconWrap>{skill.icon}</IconWrap>

                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsList>
            </Cat>
          ))}
        </Grid>
      </Content>
    </SkillsWrap>
  );
}
