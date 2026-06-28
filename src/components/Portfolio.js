import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Hero from "./section/Hero";
import About from "./section/About";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Contact from "./section/Contact";
import Nav from "./section/Nav";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;

    background:
      radial-gradient(circle at top left, rgba(37,99,235,0.18), transparent 25%),
      radial-gradient(circle at bottom right, rgba(99,102,241,0.18), transparent 25%),
      linear-gradient(135deg,#f8fbff,#eef4ff,#ffffff);

    color: #111827;
    overflow-x:hidden;
  }

  body::before{
    content:"";
    position:fixed;
    width:350px;
    height:350px;
    background:#2563eb;
    filter:blur(120px);
    top:-120px;
    left:-120px;
    opacity:0.18;
    z-index:-1;
  }

  body::after{
    content:"";
    position:fixed;
    width:300px;
    height:300px;
    background:#7c3aed;
    filter:blur(120px);
    bottom:-120px;
    right:-120px;
    opacity:0.15;
    z-index:-1;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default function Portfolio() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Wrapper>
    </>
  );
}
