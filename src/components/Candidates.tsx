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

  .wrapper{
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
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
      <Div>Candidates
        <div className="wrapper">
          {listOfBlocks}
        </div>
      </Div>
    </>
  );
};

export default Candidates;
