import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDownload,
  FaAws,
} from "react-icons/fa";
import { HiAcademicCap, HiCloud, HiCommandLine } from "react-icons/hi2";

import { SiJavascript, SiMongodb, SiMysql, SiDjango } from "react-icons/si";

// Image and Resume
import profileImg from "../../assets/img1.png";
import resumePdf from "../../assets/Sabareesh_Resume.pdf";

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

const AboutContainer = styled.section`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6rem 8vw;

  position: relative;

  overflow: hidden;

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

  opacity: 0.3;

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

  opacity: 0.3;

  animation: ${glow} 8s infinite;
`;

const AboutGrid = styled.div`
  position: relative;
  z-index: 10;

  display: grid;

  grid-template-columns: 1.2fr 0.8fr;

  gap: 4rem;

  max-width: 1300px;

  width: 100%;

  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const SmallTitle = styled.div`
  color: #60a5fa;

  font-size: 1rem;

  font-weight: 600;

  letter-spacing: 2px;

  text-transform: uppercase;
`;

const Title = styled(motion.h2)`
  font-size: 4rem;

  font-weight: 800;

  line-height: 1.1;

  color: white;

  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const Paragraph = styled(motion.p)`
  color: #cbd5e1;

  line-height: 2;

  font-size: 1.05rem;

  max-width: 700px;
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(25px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  border-radius: 30px;

  padding: 2rem;

  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

const SectionTitle = styled.h3`
  color: white;

  font-size: 1.2rem;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const SkillsGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

  gap: 0.9rem;

  margin-top: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  padding: 0.9rem;

  text-align: center;

  color: white;

  transition: 0.3s ease;

  cursor: pointer;

  svg {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: #60a5fa;
  }

  div {
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-4px);

    background: rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-top: 1rem;

  padding: 1rem 1.8rem;

  border-radius: 18px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  color: white;

  text-decoration: none;

  font-weight: 600;

  width: fit-content;

  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.35);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.45);
  }

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrap = styled(motion.div)`
  position: relative;

  width: 420px;
  height: 520px;

  border-radius: 40px;

  padding: 6px;

  background: linear-gradient(135deg, #2563eb, #7c3aed, #38bdf8);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);

  animation: ${float} 6s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 320px;
    height: 420px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 34px;
`;

const FloatingCard = styled.div`
  position: absolute;

  bottom: 25px;
  left: -40px;

  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.1);

  padding: 1rem 1.5rem;

  border-radius: 20px;

  color: white;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    left: 10px;
    bottom: 10px;
  }
`;

export default function About() {
  return (
    <AboutContainer id="about">
      <Glow1 />
      <Glow2 />

      <AboutGrid>
        <LeftSection>
          <SmallTitle>About Me</SmallTitle>

          <Title
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Building Modern <br />
            <GradientText>Software Applications</GradientText>
          </Title>

          <Paragraph
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <strong>Sabareesh AB</strong> — a passionate Software
            Developer focused on creating modern, scalable, and user-friendly
            web applications. I enjoy building clean UI, backend systems, and
            cloud-based solutions using modern technologies.
          </Paragraph>

          <InfoCard>
            <SectionTitle>
              <HiAcademicCap
                style={{
                  color: "#60A5FA",
                  fontSize: "1.35rem",
                  marginRight: "10px",
                }}
              />
              Education
            </SectionTitle>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.2rem 1.4rem",
                marginBottom: "2rem",
                backdropFilter: "blur(15px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg,#2563eb,#7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  <HiAcademicCap
                    style={{
                      color: "white",
                      fontSize: "1.25rem",
                    }}
                  />
                </div>

                <div>
                  <h4
                    style={{
                      color: "white",
                      marginBottom: "0.3rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    B.Tech Information Technology
                  </h4>

                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.92rem",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    Passionate about software development and scalable web
                    applications.
                  </p>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                  margin: "1rem 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                  }}
                >
                  <HiCloud
                    style={{
                      color: "white",
                      fontSize: "1.25rem",
                    }}
                  />
                </div>

                <div>
                  <h4
                    style={{
                      color: "white",
                      marginBottom: "0.3rem",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    Cloud & Full Stack
                  </h4>

                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.92rem",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    Exploring React, Node.js, Django, MongoDB and AWS.
                  </p>
                </div>
              </div>
            </div>

            <SectionTitle>
              <HiCommandLine
                style={{
                  color: "#60A5FA",
                  fontSize: "1.35rem",
                  marginRight: "10px",
                }}
              />
              Tech Stack
            </SectionTitle>

            <SkillsGrid>
              <SkillCard whileHover={{ scale: 1.05 }}>
                <FaReact />
                <div>React</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <SiJavascript />
                <div>JavaScript</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <FaNodeJs />
                <div>Node.js</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <SiDjango />
                <div>Django</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <FaAws />
                <div>AWS</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <SiMongodb />
                <div>MongoDB</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <SiMysql />
                <div>SQL</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <FaPython />
                <div>Python</div>
              </SkillCard>

              <SkillCard whileHover={{ scale: 1.05 }}>
                <FaGithub />
                <div>GitHub</div>
              </SkillCard>
            </SkillsGrid>

            <Button href={resumePdf} download>
              <FaDownload />
              Download Resume
            </Button>
          </InfoCard>
        </LeftSection>

        <RightSection>
          <ImageWrap
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProfileImage src={profileImg} alt="Sabareesh AB" />

            <FloatingCard>✨ Software Developer</FloatingCard>
          </ImageWrap>
        </RightSection>
      </AboutGrid>
    </AboutContainer>
  );
}
