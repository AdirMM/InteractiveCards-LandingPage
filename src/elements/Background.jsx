import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import img1 from './../assets/images/bg-main-desktop.png';
import img2 from './../assets/images/bg-card-front.png';
import img3 from './../assets/images/bg-card-back.png';
import img4 from './../assets/images/bg-main-mobile.png';
import CardLogoSvg from './../assets/images/card-logo.svg?react';

const Background = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <MainDesktopImageContainer>
        <MainDesktopImage src={isMobile ? img4 : img1} alt='imgBgMainDesktop' />
      </MainDesktopImageContainer>

      <CardFrontImageContainer>
        <CardFrontImage src={img2} alt='imgCardFront' />
      </CardFrontImageContainer>

      <CardBackImageContainer>
        <CardBackImage src={img3} alt='imgCardBack' />
      </CardBackImageContainer>

      <CardLogoContainer>
        <CardLogoSvg />
      </CardLogoContainer>
    </>
  );
}

const MainDesktopImageContainer = styled.div`

  /*  Desktop */
  @media (min-width: 1600px) {
    width: 73rem;
  }

  /* Laptop */
  @media (max-width: 1500px) {
    width: 50rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
      width: 78rem;
      height: 37rem;
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 100%; // Cambia el ancho a 100% para pantallas más pequeñas
    height: 30rem; // Ajusta la altura automáticamente
    transform: translate(0,-15px);
  }
`;

const MainDesktopImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardFrontImageContainer = styled.div`

  /* Desktop */
  width: 21rem;
  height: 12rem;
  transform: rotate(360deg) scale(2.2) translate(24rem, -51rem); 

  /* Laptop */
  @media (max-width: 1500px) {
    width: 21.2rem;
    height: 11.7rem;
    transform: rotate(360deg) scale(2) translate(13rem, -42rem);  
  }

  /* Tablet */
  @media (max-width: 800px) {
    position: absolute;
    width: 26rem;
    height: 14rem;
    transform: rotate(360deg) scale(1.7) translate(10rem, -6rem);
    z-index: 2;
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 20rem;
    height: 11rem;
    top: 28rem;
    transform: rotate(360deg) scale(1.5) translate(43px, -5rem);
    z-index: 2;
  }
`;

const CardFrontImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardBackImageContainer = styled.div`

  /* Desktop */
  width: 21rem;
  height: 12rem;
  transform: rotate(360deg) scale(2.2) translate(29rem, -43rem);  

  /* Laptop */
  @media (max-width: 1500px) {
    width: 21rem;
    height: 12rem;
    transform: rotate(360deg) scale(2) translate(17rem, -35rem);  
  }

  /* Tablet */
  @media (max-width: 800px) {
    position: absolute;
    width: 26rem;
    height: 14rem;
    transform: rotate(360deg) scale(1.7) translate(18rem, -13.9rem);
    z-index: 1;
  }

  /* Mobile */
  @media (max-width: 700px) {
    width: 20rem;
    height: 11rem;
    top: 19rem;
    left: 6rem;
    transform: rotate(360deg) scale(1.5) translate(43px, -5rem);
    z-index: 1;
  }
`;

const CardBackImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardLogoContainer = styled.div`
  
  /* Desktop */
    position: absolute;
    top: 20rem;
    left: 43rem;
  
  /* Laptop */
  @media (max-width: 1500px) {
    top: 7rem;
    left: 18rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
    top: 25rem;
    left: 11rem;
    z-index: 2;
  }
  
  /* Mobile */
  @media (max-width: 700px) {
    top: 20rem;
    left: 3rem;
    transform: scale(.8);
  }
`;

// *📍 Labels Card
const LabelCardContainer = styled.div`

  /* Desktop */
  position: absolute;
  top: 26.2rem;
  left: 42.3rem;
  width: 35rem;
  height: 10rem;
  
  /* Laptop */
  @media (max-width: 1500px) {
    top: 10.2rem;
    left: 17rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
    top: -10rem;
    left: 4rem;
    z-index: 2;
  }
  
  /* Mobile */
  @media (max-width: 700px) {
    top: -5.5rem;
    left: -6.7rem;
    transform: scale(.7);
    z-index: 2;
  }
`;

const LabelCardName = styled.label`
  width: 17rem;
  position: absolute;
  top: 11.5rem;
  right: 17rem;
  font-size: 1.3rem;
  letter-spacing: .4rem;
  color: white;
  z-index: 3;

  /* Tablet */
  @media (max-width: 800px) {
    top: 50rem;
    left: 8rem;
    z-index: 2;
  }
  

`;

// * 📌 LabelCards
const LabelCardNumber = styled.label`

  /* Desktop */
  position: absolute;
  width: 43rem;
  top: 4.3rem;
  left: 1.2rem;
  font-size: 2.5rem;
  color: white;
  letter-spacing: .7rem;
  z-index: 3;

  font-family: 'Work Sans', monospace;
  
  /* Laptop */
  @media (max-width: 1500px) {
    top: 5rem;
    font-size: 2.1rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
    width: 40rem;
    top: 43.5rem;
    left: 8rem;
    height: 10rem;
    z-index: 3;
  }
`;

const LabelCardDate = styled.label`
  width: 2rem;
  position: absolute;
  top: 11.5rem;
  height: 1.9rem;
  font-size: 1.3rem;
  letter-spacing: .4rem;
  color: white;
  z-index: 3;

  left: ${(props) => {
    switch (true) {
      case props.year:
        return '37rem';
      case props.month:
        return '32rem';
      case props.slash:
        return '35.3rem';
      default:
        return '0px';
    }
  }};

  /* Laptop */
  @media (max-width: 1500px) {
    left: ${(props) => {
    switch (true) {
      case props.year:
        return '35rem';
      case props.month:
        return '30rem';
      case props.slash:
        return '33.3rem';
      default:
        return '0px';
      }
    }};
  }

  /* Tablet */
  @media (max-width: 800px) {
    top: 50rem;
    left: ${(props) => {
    switch (true) {
      case props.year:
        return '41rem';
      case props.month:
        return '36rem';
      case props.slash:
        return '39.2rem';
      default:
        return '0px';
      }
    }};
  }
  
  /* Mobile */
  @media (max-width: 700px) {
    
  }
`;

const LabelCardCVC = styled.label`
  position: absolute;
  top: 32.2rem;
  left: 46rem;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 1px;
  z-index: 3;

  /* Laptop */
  @media  (max-width: 1500px) {
    top: 29.8rem;
    left: 40rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
    top: 29.2rem;
    left: 53rem;
  }

  @media (max-width: 700px) {
      top: 28.8rem;
      left: 47rem;
  }
`;

export { Background, LabelCardNumber, LabelCardName, LabelCardDate, LabelCardCVC, LabelCardContainer };