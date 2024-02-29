import styled from "styled-components";

const Container = styled.div`
    max-width: 1200rem;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;

    @media (max-width: 700px) {
        height: 660px;
    }
`;
 
export default Container;