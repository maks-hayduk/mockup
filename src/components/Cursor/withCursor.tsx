import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 25px;
  width: 25px;
  position: absolute;
  background-color: ${props => props.theme.blackColor};
`;

interface IMouse {
  display: string;
  x: number;
  y: number;
}
  
const BlackBox: React.FC<IMouse> = (props) => {
  return (
    <Box style={{ left: props.x + 20, top: props.y + 10, display: props.display }} />
  );
};

const withCursor = <OriginalProps extends {}>(WrappedComponent: React.ComponentType<OriginalProps>) => {
  return class extends React.Component<OriginalProps, IMouse> {
    state: IMouse;
    constructor(props: OriginalProps) {
      super(props);
      this.state = {
        display: 'none',
        x: 0,
        y: 0
      };
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    handleMouseMove(event: React.MouseEvent): void {
      this.setState({
        display: 'block',
        x: event.clientX,
        y: event.clientY
      });
    }
    handleMouseOut(): void {
      this.setState({
        display: 'none'
      });
    }
    render() {
      return (
        <>
          <div style={{ width: '35%' }} onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut}>
            <WrappedComponent {...this.props}/>
          </div>
          <BlackBox x={this.state.x} y={this.state.y} display={this.state.display} />
        </>
      );
    }
  };
};

export default withCursor;
