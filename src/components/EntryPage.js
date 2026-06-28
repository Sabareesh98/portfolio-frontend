import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { FaUserAlt, FaEnvelope, FaArrowRight, FaRobot } from "react-icons/fa";

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

const pulse = keyframes`
  0%{
    transform:scale(1);
    opacity:0.5;
  }

  50%{
    transform:scale(1.1);
    opacity:0.9;
  }

  100%{
    transform:scale(1);
    opacity:0.5;
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

const PageWrap = styled.section`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  overflow: hidden;

  background: linear-gradient(135deg, #020617 0%, #0f172a 35%, #111827 100%);
`;

const Glow1 = styled.div`
  position: absolute;

  width: 450px;
  height: 450px;

  background: #2563eb;

  border-radius: 50%;

  filter: blur(130px);

  top: -120px;
  left: -120px;

  opacity: 0.4;

  animation: ${float} 10s ease-in-out infinite;
`;

const Glow2 = styled.div`
  position: absolute;

  width: 350px;
  height: 350px;

  background: #7c3aed;

  border-radius: 50%;

  filter: blur(120px);

  bottom: -100px;
  right: -100px;

  opacity: 0.35;

  animation: ${float} 12s ease-in-out infinite;
`;

const Circle = styled.div`
  position: absolute;

  width: 240px;
  height: 240px;

  border: 2px solid rgba(255, 255, 255, 0.08);

  border-radius: 50%;

  top: 10%;
  right: 15%;

  animation: ${rotate} 18s linear infinite;
`;

const SmallGlow = styled.div`
  position: absolute;

  width: 120px;
  height: 120px;

  background: #38bdf8;

  border-radius: 50%;

  filter: blur(80px);

  bottom: 15%;
  left: 12%;

  opacity: 0.3;

  animation: ${pulse} 5s ease infinite;
`;

const GlassBox = styled(motion.form)`
  position: relative;
  z-index: 10;

  width: 100%;
  max-width: 540px;

  padding: 4rem 3rem;

  border-radius: 38px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(30px);

  border: 1px solid rgba(255, 255, 255, 0.12);

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 3rem 1.5rem;
  }
`;

const TopGlow = styled.div`
  position: absolute;

  width: 200px;
  height: 200px;

  background: #2563eb;

  filter: blur(100px);

  top: -100px;
  right: -80px;

  opacity: 0.3;
`;

const RobotWrap = styled(motion.div)`
  width: 110px;
  height: 110px;

  margin: auto;
  margin-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 30px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.45);

  position: relative;

  animation: ${float} 5s ease-in-out infinite;
`;

const RobotRing = styled.div`
  position: absolute;

  width: 135px;
  height: 135px;

  border: 2px solid rgba(255, 255, 255, 0.1);

  border-radius: 35px;

  animation: ${pulse} 3s infinite;
`;

const RobotIcon = styled(FaRobot)`
  font-size: 3rem;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;

  text-align: center;

  font-weight: 700;

  line-height: 1.2;

  color: white;

  margin-bottom: 1rem;

  letter-spacing: -1px;
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #38bdf8);

  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  text-align: center;

  color: #cbd5e1;

  line-height: 1.8;

  margin-bottom: 2.5rem;

  font-size: 1rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.4rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 0.7rem;

  color: #f1f5f9;

  font-weight: 500;

  font-size: 0.95rem;
`;

const Input = styled.input`
  width: 100%;

  padding: 1rem 1.2rem;

  border-radius: 18px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(255, 255, 255, 0.08);

  color: white;

  font-size: 1rem;

  outline: none;

  transition: 0.3s ease;

  backdrop-filter: blur(10px);

  &:focus {
    border: 1px solid #60a5fa;

    box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.15);
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Button = styled(motion.button)`
  width: 100%;

  margin-top: 1rem;

  padding: 1rem;

  border: none;

  border-radius: 20px;

  background: linear-gradient(135deg, #2563eb, #7c3aed);

  color: white;

  font-size: 1rem;

  font-weight: 600;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: 0.3s ease;

  box-shadow: 0 15px 30px rgba(37, 99, 235, 0.35);

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.45);
  }
`;

const ErrorMsg = styled.div`
  color: #f87171;

  text-align: center;

  margin-top: 1rem;

  font-size: 0.9rem;
`;

const Footer = styled.div`
  margin-top: 2rem;

  text-align: center;

  color: #94a3b8;

  font-size: 0.85rem;
`;

export default function EntryPage({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    how: "",
  });

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();

    setErr("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          howDidYouKnow: form.how,
        }),
      });

      if (res.ok) {
        onSuccess();
      } else {
        const data = await res.json();
        setErr(data.error || "Cannot submit!");
      }
    } catch {
      setErr("Server unavailable.");
    }

    setLoading(false);
  };

  return (
    <PageWrap>
      <Glow1 />
      <Glow2 />
      <Circle />
      <SmallGlow />

      <GlassBox
        onSubmit={submit}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <TopGlow />

        <RobotWrap
          initial={{
            rotate: -10,
            opacity: 0,
          }}
          animate={{
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <RobotRing />
          <RobotIcon />
        </RobotWrap>

        <Title>
          Welcome To <br />
          <GradientText>My Portfolio</GradientText>
        </Title>

        <Subtitle>
          Explore my projects, technical skills and development journey.
        </Subtitle>

        <InputGroup>
          <Label>
            <FaUserAlt />
            Full Name
          </Label>

          <Input
            name="name"
            type="text"
            required
            onChange={handle}
            value={form.name}
            placeholder="Enter your full name"
          />
        </InputGroup>

        <InputGroup>
          <Label>
            <FaEnvelope />
            Email Address
          </Label>

          <Input
            name="email"
            type="email"
            required
            onChange={handle}
            value={form.email}
            placeholder="Enter your email"
          />
        </InputGroup>

        <InputGroup>
          <Label>🚀 How did you know about me?</Label>

          <Input
            name="how"
            type="text"
            required
            onChange={handle}
            value={form.how}
            placeholder="LinkedIn, GitHub, Friend..."
          />
        </InputGroup>

        {err && <ErrorMsg>{err}</ErrorMsg>}

        <Button
          type="submit"
          disabled={loading}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
        >
          {loading ? "Please Wait..." : "Enter Portfolio"}

          <FaArrowRight />
        </Button>

        <Footer>Designed & Developed by Sabareesh AB</Footer>
      </GlassBox>
    </PageWrap>
  );
}
