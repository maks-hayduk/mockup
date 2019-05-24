import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import withCursor from '../components/Cursor/withCursor';

const Div = styled.div`
  width: 80%;
  min-height: 100px;
  text-align: center;
  font-size: 30px;
  float: right;
  padding-top: 50px;

  .wrapper{
    padding-top: 50px;
  }
  @media (max-width: ${props => props.theme.breakpoints[0]}) {
    float: none;
    margin: 0 auto;
    padding-top: 100px;
  }
`;

const ImgBlock = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-div{
    height: 250px;
    width: 100%;
    border: 1px solid ${props => props.theme.blackColor}
    margin-bottom: 20px;

    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      width: 100%
    }
  }
`;

const candidates: string[] = ['Candidate #1', 'Candidate #2'];

interface ICandidate {
  name: string;
}

const ImageTextBlock: React.FC<ICandidate> = (props) => {
  return (
    <ImgBlock>
      <div className="image-div" />
      <Box mb={[6, 0]}>{props.name}</Box>
    </ImgBlock>
  );
};

const WithCursorBlock = withCursor(ImageTextBlock);

const Candidates: React.FC = () => {
  const listOfBlocks = candidates.map(candidate => 
    <Box key={candidate}>
      <WithCursorBlock name={candidate}/>
    </Box>
  );
  return (
    <>
      <Div>Candidates
        <Flex className="wrapper" flexDirection={['column', 'row']} justifyContent="space-around">
          {listOfBlocks}
        </Flex>
      </Div>
    </>
  );
};

export default Candidates;
