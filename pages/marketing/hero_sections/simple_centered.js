import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  .menu {
    position: absolute;
    background: #fff;
    border: 1px solid red;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    height: 300px;
    margin: 1rem;
    border-radius: 0.5rem;
  }
  height: 100%;
  overflow-x: hidden;
  background: #f7fafc;
  display: grid;
  grid:
    "header" 40px
    "main" 1fr / 1fr;
  button {
    cursor: pointer;
  }
  header {
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .links {
      @media (max-width: 768px) {
        display: none;
      }
    }
    .login {
      @media (max-width: 768px) {
        display: none;
      }
      background: white;
      width: 80px;
      height: 42px;
      padding: 0.5rem 1rem;
      color: #434190;
      line-height: 1.5rem;
      font-size: 1rem;
      font-weight: 500;
      display: inline-flex;
      border-radius: 0.375rem;
      border: transparent;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    display: flex;
    justify-content: space-between;
    grid-area: header;
    img {
      height: 40px;
      width: 40px;
    }
    .menu {
      @media (min-width: 768px) {
        display: none;
      }
      cursor: pointer;
      width: 24px;
      height: 24px;
      color: #9fa6b2;
      transition: all 150ms ease-in-out;
      &:hover {
        color: #1a202c;
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
    nav {
      display: flex;
      ul {
        display: flex;
        align-items: center;
        li {
          &:not(:first-child) {
            margin-left: 40px;
          }
          list-style: none;
          a {
            text-decoration: none;
            font-weight: 500;
            color: #4a5568;
            &:hover {
              color: #1a202c;
            }
          }
        }
      }
    }
  }
  main {
    grid-area: main;
    display: grid;
    grid-template-rows: 128px 60px 1fr;
    justify-items: center;
    margin-top: 4rem;
    h1 {
      font-size: 4rem;
      @media (max-width: 640px) {
        font-size: 1.5rem;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      @media (min-width: 1024px) {
        font-size: 3rem;
      }
      text-align: center;
      line-height: 1;
      font-weight: 800;
      margin: 0;
      height: 128px;
      span {
        color: #5850ec;
      }
    }
    h3 {
      @media (max-width: 768px) {
        max-width: 28rem;
      }
      text-align: center;
      max-width: 48rem;
      margin-top: 1.25rem;
      font-size: 1.25rem;
      color: #6b7280;
    }
    .buttons {
      margin-top: 3rem;
      display: flex;
      justify-content: center;
      height: 58px;
      .demo,
      .start {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.125rem;
        font-weight: 500;
        border-radius: 0.375rem;
        border: 0 solid #d2d6dc;
      }
      .demo {
        margin-left: 0.75rem;
      }
      .start {
        background-color: #5850ec;
        color: white;
      }
    }
  }
`;
const SimpleCentered = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <StyledDiv>
      {/* Mobile Menu, show hide */}
      {menuOpen ? (
        <div className="menu">
          <p>Hi</p>
        </div>
      ) : null}
      <header>
        {/* Logo */}
        <img src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" />
        {/* Nav menu  */}
        <nav className="links">
          <ul>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </nav>
        {/* Nav button for smaller screens */}
        <div onClick={() => setMenuOpen(true)} className="menu">
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 20">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
        {/* Log in button */}
        <button className="login">Log in</button>
      </header>
      <main>
        <h1>
          Sandra to enrich your <br />
          <span className="highlighted">online business</span>
        </h1>
        <h3 className="subtext">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </h3>
        <div className="buttons">
          <button className="start">Get started</button>
          <button className="demo">Live demo</button>
        </div>
      </main>
    </StyledDiv>
  );
};
export default SimpleCentered;
