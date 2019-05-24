import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 20%;
  min-height: calc(100vh - 90px);
  font-size: 16px;
  float: left;
  padding-top: 50px;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.whiteColor}
`;

const ATag = styled.a`
  text-decoration: none;
  color: ${props => props.theme.blackColor}
  float: left;
  padding-left: 25px;
  padding-bottom: 7px;
`;

const Box = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  background-color: ${props => props.theme.blackColor};
`;

const links: string[] = ['Candidates Link', 'Voting Link', 'Results Link'];

interface ILink {
  name: string;
}

const LinkItem: React.FC<ILink> = (props) => {
  return (
    <ATag href="">{props.name}</ATag>
  );
};

interface IMouse {
  x: number;
  y: number;
}

interface IFormState {
  isVisable: boolean;
  x: number;
  y: number;
}

const BlackBox: React.FC<IMouse> = (props) => {
  return (
    <Box style={{ left: props.x + 20, top: props.y + 10 }} />
  );
};

class CursorRender extends React.Component<{}, IFormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isVisable: false,
      x: 0,
      y: 0
    };
  }
  handleMouseMove = (event: React.MouseEvent): void => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  handleMouseOut = (): void => {
    this.setState({
      isVisable: false
    });
  }
  handleMouseOver = (): void => {
    this.setState({
      isVisable: true
    });
  }
  render() {
    const listOfLinks = links.map(link => 
      <LinkItem name={link} key={link}/>
    );
    return (
      <>
      <Div onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>
          {listOfLinks}
      </Div>
      {this.state.isVisable ? (<BlackBox x={this.state.x} y={this.state.y} />) : (<></>)}
      </>
    );
  }
}

export default CursorRender;
