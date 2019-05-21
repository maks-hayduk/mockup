import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    min-height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    padding-top: 50px;
    align-items: center;
`;

const Div = styled.div`
    width: 90%;
    min-height: 100px;
    font-size: 18px;
`;

const MainTitle = styled(Div)`
    text-align: center;
    font-size: 30px;
    font-family: sans-serif;
`;

const Input = styled.input`
    margin-right: 7px;
    font-size: 18px;
`;
const Label = styled.label`
    font-size: 18px;
    padding: 15px 0;
`;
const FormWrapper = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const Button = styled.button`
    width: 170px;
    height: 50px;
    background-color: #e5e5e5;
    vertical-align: middle;
    font-size: 15px;
    border-radius: 10px;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 50px;
    cursor: pointer;
    :active{
        background-color: #d6d6d6;
        color: black;
    }
`;

const candidates: string[] = ['Candidate #1', 'Candidate #2', 'Candidate #3'];

interface IRadioButton{
    name:string, 
    change: any
}

const RadioItem: React.FC<IRadioButton> = (props) => {
    return (
    <Label>
        <Input type="radio" name="candidate" value={props.name} onChange={props.change}/>
        {props.name}
    </Label>);
} 

class Form extends React.Component{
    state: {value: any};
    constructor(props: any){
        super(props);
        this.state = {
            value: null,
        }
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleRadioChange(event: any): void {
        event.target.checked = true;
        this.setState({value: event.target.value});
    }

    handleButtonClick(): void {
        alert(this.state.value);
    }

    render(): JSX.Element {
        const listItem = candidates.map( (can) => 
                <RadioItem name={can} key={can} change={this.handleRadioChange}/>
            );
        return (
            <FormWrapper>
                {listItem}
                <Button type="button" onClick={this.handleButtonClick}>Vote</Button>
            </FormWrapper>
        );
    }
}

const Main: React.FC = () => {
    return (
        <Wrapper>
            <MainTitle>Let's vote</MainTitle>
            <Div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore.</Div>
            <Form />
        </Wrapper>
    );
}

export default Main;