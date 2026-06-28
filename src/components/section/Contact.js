import React from "react";
import styled, { keyframes } from "styled-components";

import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

import { motion } from "framer-motion";

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

const rotate = keyframes`
  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }
`;

// ================= STYLES =================

const ContactWrap = styled.section`
  position: relative;

  overflow: hidden;

  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6rem 2rem;

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

  width: 320px;
  height: 320px;

  background: #7c3aed;

  border-radius: 50%;

  filter: blur(120px);

  bottom: -100px;
  right: -100px;

  opacity: 0.25;

  animation: ${glow} 8s infinite;
`;

const Circle = styled.div`
  position: absolute;

  width: 250px;
  height: 250px;

  border: 2px solid rgba(255, 255, 255, 0.08);

  border-radius: 50%;

  top: 12%;
  right: 15%;

  animation: ${rotate} 18s linear infinite;
`;

const GlassBox = styled(motion.div)`
  position: relative;

  z-index: 10;

  width: 100%;
  max-width: 850px;

  padding: 4rem;

  border-radius: 40px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(25px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);

  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const TopGlow = styled.div`
  position: absolute;

  width: 180px;
  height: 180px;

  background: #2563eb;

  filter: blur(100px);

  top: -80px;
  right: -80px;

  opacity: 0.3;
`;

const SmallTitle = styled.div`
  text-align: center;

  color: #60a5fa;

  letter-spacing: 2px;

  text-transform: uppercase;

  font-size: 0.95rem;

  margin-bottom: 1rem;
`;

const Title = styled(motion.h2)`
  text-align: center;

  font-size: 4rem;

  font-weight: 800;

  line-height: 1.1;

  color: white;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  text-align: center;

  color: #cbd5e1;

  line-height: 1.9;

  max-width: 700px;

  margin: auto;
  margin-bottom: 3rem;

  font-size: 1.05rem;
`;

const ContactGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

  gap: 1.5rem;

  margin-top: 3rem;
`;

const ContactCard = styled(motion.a)`
  text-decoration: none;

  padding: 2rem;

  border-radius: 28px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(15px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  transition: 0.4s ease;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);

    background: rgba(255, 255, 255, 0.08);
  }
`;

const IconWrap = styled.div`
  width: 75px;
  height: 75px;

  border-radius: 24px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.3);

  animation: ${float} 6s ease infinite;

  svg {
    color: white;
    font-size: 2rem;
  }
`;

const CardTitle = styled.h3`
  color: white;

  font-size: 1.2rem;

  margin: 0;
`;

const CardText = styled.p`
  color: #cbd5e1;

  text-align: center;

  line-height: 1.7;

  font-size: 0.95rem;

  margin: 0;
`;

const EmailText = styled.div`
  margin-top: 3rem;

  text-align: center;

  color: #94a3b8;

  font-size: 1rem;

  a {
    color: #60a5fa;

    text-decoration: none;

    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// ================= COMPONENT =================

export default function Contact() {
  return (
    <ContactWrap id="contact">
      <Glow1 />
      <Glow2 />
      <Circle />

      <GlassBox
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <TopGlow />

        <SmallTitle>Contact Me</SmallTitle>

        <Title
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Let's Build <br />
          <GradientText>Something Amazing</GradientText>
        </Title>

        <Subtitle
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
        >
          Open to Frontend-Backend development, cloud projects, collaborations
          and modern software application opportunities.
        </Subtitle>

        <ContactGrid>
          <ContactCard
            href="mailto:sabareesh98ab@gmail.com"
            whileHover={{
              scale: 1.03,
            }}
          >
            <IconWrap>
              <FaEnvelope />
            </IconWrap>

            <CardTitle>Email</CardTitle>

            <CardText>
              Contact me directly through professional email communication.
            </CardText>
          </ContactCard>

          <ContactCard
            href="https://github.com/Sabareesh98"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
          >
            <IconWrap>
              <FaGithub />
            </IconWrap>

            <CardTitle>GitHub</CardTitle>

            <CardText>
              Explore my software projects, frontend applications and
              cloud-based solutions.
            </CardText>
          </ContactCard>

          <ContactCard
            href="https://linkedin.com/in/sabareesh-ab"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.03,
            }}
          >
            <IconWrap>
              <FaLinkedin />
            </IconWrap>

            <CardTitle>LinkedIn</CardTitle>

            <CardText>
              Connect professionally and explore my career journey and technical
              profile.
            </CardText>
          </ContactCard>
        </ContactGrid>

        <EmailText>
          <FaPaperPlane
            style={{
              marginRight: "8px",
            }}
          />

          <a href="mailto:sabareesh98ab@gmail.com">sabareesh98ab@gmail.com</a>
        </EmailText>
      </GlassBox>
    </ContactWrap>
  );
}
