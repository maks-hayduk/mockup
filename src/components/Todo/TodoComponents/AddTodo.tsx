import React from 'react';

interface IAddTodo {
  onAddClick: (input: string) => void;
}

const AddTodo: React.FC <IAddTodo> = ({ onAddClick }) => {
  let input: HTMLInputElement;

  return (
    <div>
      <input type="text" ref={node => {
        input = node as HTMLInputElement;
      }} />
        <button type="button" onClick={() => {
          onAddClick(input.value)
          input.value = '';
        }}>Add task</button>
    </div>
  );
}

export default AddTodo;