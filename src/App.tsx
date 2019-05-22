import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import GlobalReset from './theme/reset';
import theme from './theme/theme';

const HeaderDiv = styled.div`
  height: 90px;
  width: 100%;
  background-color: ${props => props.theme.headerColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const SpanStyle = styled.span`
  font-size: 30px;
  font-family: sans-serif;
`;

const Image = styled.img`
  height: 40px;
  width: 50px;
  src: ${props => props.theme.logo};
`;

const app = {
  name: 'App'
}

const SecondTitle: React.FC<{name: string}> = (props: {name: string}) => {
  return (
    <SpanStyle>{props.name}</SpanStyle>
  );
}

const FirstTitle: React.FC<{name: string}> = (props: {name: string}) => {
  return (
    <SpanStyle>Welcome to {props.name}</SpanStyle>
  );
}

const Header: React.FC = () => {
  return(
      <HeaderDiv>
        <SecondTitle name={app.name} />
        <FirstTitle name={app.name} />
        <Image />
      </HeaderDiv>
  );
}


const App: React.FC = () => {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalReset />
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
