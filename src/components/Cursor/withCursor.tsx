import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  background-color: ${props => props.theme.blackColor};
`;

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

const withCursor = <OriginalProps extends {}>(WrappedComponent: React.ComponentType<OriginalProps>) => {
  return class extends React.Component<OriginalProps, IFormState> {
    constructor(props: OriginalProps) {
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
        <>
          <div 
            onMouseMove={this.handleMouseMove} 
            onMouseOut={this.handleMouseOut} 
            onMouseOver={this.handleMouseOver} 
          >
            <WrappedComponent {...this.props}/>
          </div>
          {this.state.isVisable ? (<BlackBox x={this.state.x} y={this.state.y} />) : (<></>)}
        </>
      );
    }
  };
};

export default withCursor;
