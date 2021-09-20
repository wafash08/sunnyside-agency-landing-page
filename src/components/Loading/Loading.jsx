import styled from "styled-components";

const Loading = () => {
  return <Spinner />;
};

const Spinner = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  border-width: 3px;
  border-style: solid;
  border-color: red transparent red transparent;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(120deg);
    }
    80% {
      transform: rotate(240deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
