import styled from "styled-components";
import Check from './../assets/images/icon-complete.svg?react';

const ThanksContainer = styled.div`
  position: absolute;
  width: 33rem;
  display: flex;
  flex-direction: column;
  top: 30rem;
  left: 122rem;
  align-items: center;

  /* Laptop */
  @media (max-width: 1500px) {
    top: 17rem;
    left: 80rem;
  }
  
  /* Tablet */
  @media (max-width: 800px) {
    top: 58rem;
    left: 21rem;
  }

  /* Mobile */
  @media (max-width: 700px) {
    top: 40rem;
    left: 2.5rem;
    transform: scale(.7);
  }
`;

const ContainerLogoCheck = styled.div`
  width: 20%;
  height: 20%;
  transform: scale(.9);
`;

const LogoCheck = () => {
  return (
    <ContainerLogoCheck>
      <Check />
    </ContainerLogoCheck>);
};

const FirstLabel = styled.label`
  position: relative;
  font-size: 2.2rem;
  top: 2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const SecondLabel = styled.label`
  position: relative;
  top: 3rem;
  font-size: 1.6rem;
  color: #89858c;
`;

export { ThanksContainer, LogoCheck, FirstLabel, SecondLabel };