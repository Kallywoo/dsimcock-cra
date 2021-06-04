import styled from 'styled-components';

export const NotFound = () => {
    return (
    <MainContent>
        <p>Sorry, there's nothing here!</p>
    </MainContent>
    );
};

const MainContent = styled.div`
    background-color: #ECEBFF;
    margin: 1.3em auto;
    padding: 0.975em;
    width: 70%;
    max-width: 940px;
    text-align: center;

    @media only screen and (max-width: 480px) {
        width: auto;
    }
`;