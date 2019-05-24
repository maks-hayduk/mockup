import React from 'react';
import { Flex, Box } from '@rebass/grid';
import styled from 'styled-components';
import { media } from '../theme/media';

const Div = styled.div`
  width: 20%;
  height: calc(100vh - 90px);
  font-size: 16px;
  float: left;
  padding-top: 50px;
  background-color: ${props => props.theme.mainColor};
  border-top: 1px solid ${props => props.theme.whiteColor}

  ${media.phone`
    width: 100%;
    height: 40px;
    padding: 0;
    padding-top: 10px;
  `}
`;

const ATag = styled.a`
  text-decoration: none;
  color: ${props => props.theme.blackColor}
  padding-left: 25px;
  padding-bottom: 7px;
  ${media.phone`padding: 0;`}
`;

const BoxDiv = styled.div`
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

const ListOfLinks: React.FC = () => {
  const listOfLinks = links.map(link => 
    <Box pb={[1,2]} key={link}>
      <LinkItem name={link}/>
    </Box>
  );
  return(
    <>
      {listOfLinks}
    </>
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
    <BoxDiv style={{ left: props.x + 20, top: props.y + 10 }} />
  );
};

interface IFormProps {
  render: (x: number, y: number) => JSX.Element;
}

class CursorRender extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
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
    return (
      <Div 
        onMouseMove={this.handleMouseMove} 
        onMouseOut={this.handleMouseOut} 
        onMouseOver={this.handleMouseOver}
      >
        <Flex 
          flexDirection={['row', 'column']}
          justifyContent={['space-around']}
        >
          <ListOfLinks />
        </Flex>
      {this.state.isVisable && this.props.render(this.state.x, this.state.y)}
      </Div>
    );
  }
}

const CursorBox: React.FC = () => {
  return (
    <CursorRender render={(x: number, y: number) => <BlackBox x={x} y={y} />}/>
  );
};

export default CursorBox;
