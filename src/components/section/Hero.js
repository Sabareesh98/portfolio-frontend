import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

// ================= IMPORT IMAGE =================

import image1 from "../../assets/profile.jpg";

// ================= ANIMATIONS =================

const float = keyframes`
  0%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-18px);
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

const rotate = keyframes`
  0%{
    transform:rotate(0deg);
  }

  100%{
    transform:rotate(360deg);
  }
`;

// ================= STYLES =================

const HeroWrap = styled.section`
  position: relative;

  overflow: hidden;

  min-height: 100vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8rem 9vw 4rem;

  background: linear-gradient(135deg, #020617 0%, #0f172a 35%, #111827 100%);

  @media (max-width: 950px) {
    flex-direction: column-reverse;
    gap: 4rem;
    text-align: center;
    padding-top: 10rem;
  }
`;

const Glow1 = styled.div`
  position: absolute;

  width: 420px;
  height: 420px;

  background: #2563eb;

  border-radius: 50%;

  filter: blur(130px);

  top: -120px;
  left: -120px;

  opacity: 0.3;

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

  opacity: 0.3;

  animation: ${glow} 8s infinite;
`;

const Circle = styled.div`
  position: absolute;

  width: 260px;
  height: 260px;

  border: 2px solid rgba(255, 255, 255, 0.08);

  border-radius: 50%;

  top: 12%;
  right: 18%;

  animation: ${rotate} 18s linear infinite;
`;

const Left = styled.div`
  position: relative;
  z-index: 10;

  max-width: 700px;
`;

const SmallTitle = styled.div`
  color: #60a5fa;

  letter-spacing: 2px;

  text-transform: uppercase;

  font-size: 0.95rem;

  margin-bottom: 1rem;
`;

const MainTitle = styled(motion.h1)`
  font-size: 5rem;

  font-weight: 800;

  line-height: 1.05;

  color: white;

  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const Role = styled(motion.h2)`
  font-size: 2rem;

  font-weight: 600;

  margin-bottom: 1.5rem;

  color: #60a5fa;

  min-height: 50px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  color: #cbd5e1;

  line-height: 2;

  font-size: 1.08rem;

  max-width: 650px;

  margin-bottom: 2.5rem;

  @media (max-width: 950px) {
    margin: auto;
    margin-bottom: 2.5rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;

  align-items: center;

  gap: 1.2rem;

  margin-top: 2rem;

  @media (max-width: 950px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const MainButton = styled.a`
  padding: 1rem 2rem;

  border-radius: 20px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  color: white;

  text-decoration: none;

  font-weight: 600;

  display: flex;
  align-items: center;
  gap: 10px;

  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.35);

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.45);
  }
`;

const IconButton = styled.a`
  width: 58px;
  height: 58px;

  border-radius: 18px;

  background: rgba(255, 255, 255, 0.08);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(15px);

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-size: 1.3rem;

  transition: 0.3s ease;

  &:hover {
    transform: translateY(-4px);

    background: linear-gradient(135deg, #2563eb, #7c3aed);
  }
`;

const Right = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageCard = styled(motion.div)`
  position: relative;

  width: 420px;
  height: 520px;

  border-radius: 40px;

  padding: 6px;

  background: linear-gradient(135deg, #2563eb, #7c3aed, #38bdf8);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);

  animation: ${float} 6s ease infinite;

  overflow: hidden;

  @media (max-width: 768px) {
    width: 320px;
    height: 420px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 34px;
`;

const FloatingCard = styled.div`
  position: absolute;

  bottom: 20px;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  align-items: center;
  gap: 12px;

  padding: 0.9rem 1.3rem;

  border-radius: 18px;

  background: rgba(15, 23, 42, 0.78);

  backdrop-filter: blur(18px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);

  min-width: 240px;

  z-index: 20;

  @media (max-width: 768px) {
    min-width: 210px;

    padding: 0.8rem 1rem;

    bottom: 14px;
  }
`;

const StatusDot = styled.div`
  width: 12px;
  height: 12px;

  border-radius: 50%;

  background: #38bdf8;

  box-shadow: 0 0 15px rgba(56, 189, 248, 0.9);

  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const FloatingContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FloatingTitle = styled.h4`
  color: white;

  font-size: 0.95rem;

  font-weight: 600;

  margin: 0;
`;

const FloatingText = styled.p`
  color: #94a3b8;

  font-size: 0.82rem;

  margin: 0.15rem 0 0;
`;

const roles = [
  "Software Developer",
  "Backend Developer",
  "AWS Cloud Enthusiast",
  "Python Developer",
  "Full Stack Developer",
];

// ================= COMPONENT =================

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const [displayText, setDisplayText] = useState("");

  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);

      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <HeroWrap id="home">
      <Glow1 />
      <Glow2 />
      <Circle />

      <Left>
        <SmallTitle>Welcome To My Portfolio</SmallTitle>

        <MainTitle
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          Hi, I'm <br />
          <GradientText>Sabareesh AB</GradientText>
        </MainTitle>

        <Role
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
        >
          {displayText}
        </Role>

        <Description
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
        >
          Passionate software developer focused on building modern web
          applications, cloud-based systems and elegant frontend experiences
          using modern technologies.
        </Description>

        <ButtonRow>
          <MainButton href="#projects">
            View Projects
            <FaArrowRight />
          </MainButton>

          <IconButton href="https://github.com/Sabareesh98" target="_blank">
            <FaGithub />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/sabareeshab/"
            target="_blank"
          >
            <FaLinkedin />
          </IconButton>
        </ButtonRow>
      </Left>

      <Right>
        <ImageCard
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <HeroImage src={image1} alt="Sabareesh AB" />

          <FloatingCard>
            <StatusDot />

            <FloatingContent>
              <FloatingTitle>Software Developer</FloatingTitle>

              <FloatingText>Building modern Software</FloatingText>
            </FloatingContent>
          </FloatingCard>
        </ImageCard>
      </Right>
    </HeroWrap>
  );
}
