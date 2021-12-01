import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background-color: #f5c67b;
`;

const Button = styled.h2`
    cursor: pointer;
    color: #805818;
    transition: 0.3s;

    :hover {
      color: #614313;
    }
`;
const Highscore = styled.p`
    color: #ba8b40;
    font-weight: 700;
`;

export { Wrapper, Button, Highscore };
