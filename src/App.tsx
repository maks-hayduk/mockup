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

const Span = styled.span`
  font-size: 30px;
`;

const Image = styled.img`
  height: 40px;
  width: 50px;
  src: ;
`;

interface IHeader {
  name: string,
  url: string
}

const Header: React.FC<IHeader> = (props) => {
  return(
      <HeaderDiv>
        <Span>{props.name}</Span>
        <Span>Welcome to {props.name}</Span>
        <Image src = {props.url} />
      </HeaderDiv>
  );
}

interface FormProps{}
interface FormState{
  name: string;
}


class App extends React.Component<FormProps, FormState>{
  state: FormState;
  constructor(props: FormProps){
    super(props);
    this.state = {
      name: 'App'
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(changedName: string):void {
    this.setState({name: changedName});
  }
  render(){
    return (
      <ThemeProvider theme = {theme}>
        <>
          <GlobalReset />
          <Header name={this.state.name} url=''/>
          <Main changeHandler={this.changeName} />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
