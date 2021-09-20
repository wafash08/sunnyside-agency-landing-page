import styled from "styled-components";

const NavDesktop = () => {
  return (
    <NavMenu>
      <Menu href="about">About</Menu>
      <Menu href="services">Services</Menu>
      <Menu href="projects">Projects</Menu>
      <Menu href="contact">Contact</Menu>
    </NavMenu>
  );
};

const NavMenu = styled.nav`
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`;

const Menu = styled.a`
  color: white;
`;

export default NavDesktop;
