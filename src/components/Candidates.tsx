import React from 'react';
import styled from 'styled-components';
import withCursor from '../components/Cursor/withCursor';

const Div = styled.div`
  width: 80%;
  min-height: 100px;
  text-align: center;
  font-size: 30px;
  float: right;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const Wrapper = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const ImageDiv = styled.div`
  height: 250px;
  width: 100%;
  border: 1px solid ${props => props.theme.blackColor}
  margin-bottom: 20px;
`;

const ImgBlock = styled.div`
  min-width: 38%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const candidates: string[] = ['Candidate #1', 'Candidate #2'];

interface ICandidate {
  name: string;
}

const ImageTextBlock: React.FC<ICandidate> = (props) => {
  return (
    <ImgBlock>
      <ImageDiv />
      <span>{props.name}</span>
    </ImgBlock>
  );
};

const WithCursorBlock = withCursor(ImageTextBlock);

const Candidates: React.FC = () => {
  const listOfBlocks = candidates.map(candidate => 
    <WithCursorBlock name={candidate} key={candidate}/>
  );
  return (
    <>
      <Div>Candidates</Div>
        <Wrapper>
          {listOfBlocks}
        </Wrapper>
    </>
  );
};

export default Candidates;
