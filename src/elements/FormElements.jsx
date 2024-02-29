import styled from "styled-components";

const MainContainer = styled.form`

  /* Desktop */
  position: absolute;
  width: 33rem;
  height: 25rem;
  top: 26rem;
  left: 116rem;

  /* Laptop */
  @media (max-width: 1500px) {
    top: 14rem;
    left: 81rem;
  }

  /* Tablet */
  @media (max-width: 800px) {
    top: 57rem;
    left: 22rem;
    z-index: 10000;
  }

  @media (max-width: 700px) {
      transform: scale(.7);
      top: 38rem;
      left: 3rem;
  }
`;

// *📌 Grouping label & input in column
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .7rem;
  transform: scale(1.2);

  @media (max-width: 800px) {
      transform: scale(1.5);
  }
`;

const Input = styled.input`
  grid-column: ${props => props.gridColumn || 'auto'};
  grid-row: ${props => props.gridRow || 'auto'};
  margin-left: ${props => props.marginLeft && '6.4rem'};
  height: 3.7rem;
  border-radius: .5rem;
  margin-bottom: 1rem;

  &[type="number"] {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  /* Validation style */
  border: 1px solid ${props => props.inputError ? 'red' : '#ccc'};

  width: ${(props) => {
    switch (true) {
      case props.inputShort:
        return "5.3rem";
      case props.inputMedium:
        return "19rem";
      case props.inputLarge:
        return "100%";
      default:
        return '250px';
    }
  }};

  @media (max-width: 700px) {
    height: 4.4rem;
    border-radius: .7rem;
    width: 100%;
    font-size: 1.6rem;

    width: ${(props) => {
    switch (true) {
      case props.inputShort:
        return "5.9rem";
      case props.inputMedium:
        return "18rem";
      case props.inputLarge:
        return "100%";
      default:
        return '250px';
    }
  }};
  }

  /* Text and placeholder */
  padding-left: 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1.2rem;
    color: #ababab;
    font-weight: 700;
  }
`;

const Label = styled.label`
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-left: ${props => props.marginLeft && '6.4rem'};

  
  grid-column: ${props => props.gridColumn || 'auto'};
  grid-row: ${props => props.gridRow || 'auto'};
`;

const Button = styled.button`
  position: relative;
  top: 6rem;
  width: 100%;
  height: 3.7rem;
  transform: scale(1.2);
  color: white;
  font-size: 1.3rem;
  letter-spacing: .2rem;
  font-weight: 500;
  background-color: hsl(278, 68%, 11%);
  border: none;
  border-radius: .5rem;
  cursor: pointer;

  @media (max-width: 800px) {
      top: 10rem;
      transform: scale(1.5);
  }
`;

export { MainContainer, FormContainer, Input, Label, Button };