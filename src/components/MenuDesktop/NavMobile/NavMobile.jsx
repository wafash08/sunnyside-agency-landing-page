import styled from "styled-components";

const NavMobile = () => {
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
  position: absolute;
  top: 80px;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: 400px;
  transform: translateX(-50%);
  background-color: white;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Menu = styled.a`
  color: #555;
  padding: 1rem 2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  transition: 0.3s linear all;
  border-radius: 50px;

  &:hover {
    color: white;
    background-color: #555;
  }
`;

export default NavMobile;
