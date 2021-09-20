import styled from "styled-components";
import sunnySide from "../../images/logo.svg";
import Burger from "../Burger";
import NavDesktop from "./NavDesktop/NavDesktop";
import NavMobile from "./NavMobile/NavMobile";

const MenuDesktop = () => {
  return (
    <Header>
      <Logo href="about">
        <img src={sunnySide} alt="Logo Sunnyside" />
      </Logo>
      <NavDesktop />
      <Burger />
      <NavMobile />
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;

  img {
    width: 200px;
    height: auto;
    text-rendering: optimizeLegibility;
  }
`;

export default MenuDesktop;
