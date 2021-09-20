import styled from "styled-components";

const Burger = () => {
  return (
    <Hamburger>
      <Bar />
    </Hamburger>
  );
};

const Hamburger = styled.button`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (min-width: 767px) {
    display: none;
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 2rem;
  height: 0.15rem;
  background-color: white;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 0.15rem;
    background-color: white;
    left: 0;
  }

  &::before {
    top: -10px;
  }
  &::after {
    top: 10px;
  }
`;

export default Burger;
