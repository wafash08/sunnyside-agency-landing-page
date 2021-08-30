import { bool } from "prop-types";
import React from "react";
import { StyledMenu } from "./Menu.Styled";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="about">About</a>
      <a href="services">Services</a>
      <a href="project">Projects</a>
      <a href="contact">Contact</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
