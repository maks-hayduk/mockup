import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Main from './components/main';
import GlobalReset from './theme/reset';


const HeaderDiv = styled.div`
  height: 90px;
  width: 100%;
  background-color: #e8e7e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const Span = styled.span`
  font-size: 30px;
  font-family: sans-serif;
`;

const Image = styled.img`
  height: ${props => props.theme.height};
  width: ${props => props.theme.width};
  src: ${props => props.theme.logo};
`;

const app = {
  name: 'App'
}

const theme = {
  height: '40px',
  width: '50px',
  logo: ''
}

const Header: React.FC = () => {
  return(
      <HeaderDiv>
        <Span>{app.name}</Span>
        <Span>Welcome to {app.name}</Span>
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
