import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";

import {
  FaHome,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";

// ================= STYLES =================

const NavBarContainer = styled.div`
  position: fixed;

  top: 22px;
  left: 50%;

  transform: translateX(-50%);

  z-index: 1000;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 0.9rem 1.2rem;

  border-radius: 26px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(22px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

  overflow: hidden;

  @media (max-width: 768px) {
    gap: 0.4rem;

    padding: 0.7rem;
  }
`;

const Glow = styled.div`
  position: absolute;

  width: 120px;
  height: 120px;

  background: #2563eb;

  filter: blur(80px);

  opacity: 0.25;

  top: -40px;
  left: -40px;
`;

const NavItem = styled.button`
  position: relative;

  border: none;

  background: ${(props) =>
    props.active ? "linear-gradient(135deg,#2563eb,#7c3aed)" : "transparent"};

  color: ${(props) => (props.active ? "#ffffff" : "#e2e8f0")};

  padding: 0.9rem 1.2rem;

  border-radius: 18px;

  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 0.95rem;

  font-weight: 600;

  cursor: pointer;

  transition: 0.35s ease;

  overflow: hidden;

  &:hover {
    transform: translateY(-2px);

    background: linear-gradient(135deg, #2563eb, #7c3aed);

    color: white;

    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.35);
  }

  svg {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    span {
      display: none;
    }

    padding: 0.9rem;
  }
`;

// ================= COMPONENT =================

export default function Nav() {
  const [active, setActive] = useState("home");

  const sections = useMemo(
    () => [
      {
        id: "home",
        label: "Home",
        icon: <FaHome />,
      },

      {
        id: "about",
        label: "About",
        icon: <FaUser />,
      },

      {
        id: "projects",
        label: "Projects",
        icon: <FaCode />,
      },

      {
        id: "skills",
        label: "Skills",
        icon: <FaLaptopCode />,
      },

      {
        id: "contact",
        label: "Contact",
        icon: <FaEnvelope />,
      },
    ],
    []
  );

  // ================= SCROLL FUNCTION =================

  const scrollToSection = (sectionId) => {
    setActive(sectionId);

    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ================= ACTIVE SECTION =================

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const offsetTop = element.offsetTop;

          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <NavBarContainer>
      <Glow />

      {sections.map((item) => (
        <NavItem
          key={item.id}
          active={active === item.id}
          onClick={() => scrollToSection(item.id)}
        >
          {item.icon}

          <span>{item.label}</span>
        </NavItem>
      ))}
    </NavBarContainer>
  );
}
