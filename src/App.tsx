import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalReset from './theme/reset';
import theme from './theme/theme';

import Candidates from './components/Candidates';
import Main from './components/Main';
import SideBar from './components/SideBar';

const HeaderDiv = styled.div`
  height: 90px;
  width: 100%;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

const Span = styled.span`
  font-size: 30px;
`;

const Image = styled.img`
  height: 40px;
  width: 50px;
  src: ;
`;

interface IHeader {
  name: string;
  url: string;
}

const Header: React.FC<IHeader> = (props) => {
  return(
      <HeaderDiv>
        <Span>{props.name}</Span>
        <Span>Welcome to {props.name}</Span>
        <Image src={props.url} />
      </HeaderDiv>
  );
};

interface IFormState {
  name: string;
}

class App extends React.Component {
  state: IFormState;
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'App'
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName(changedName: string): void {
    this.setState({ name: changedName });
  }
  render() {
    return (
      <>
        <GlobalReset />
        <ThemeProvider theme={theme}>
          <>
            <Header name={this.state.name} url=""/>
            {/* <Main changeHandler={this.changeName} /> */}
            <SideBar />
            <Candidates />
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
