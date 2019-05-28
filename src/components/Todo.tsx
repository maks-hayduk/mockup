// tslint:disable
import React from 'react';
import { createStore, Dispatch } from 'redux';
import todoApp from './Redux';
import AddTodo from './Redux/AddTodo';
import TodoList from './Redux/TodoList';
import Footer from './Redux/Footer';
import { IState } from './Redux/interfaces';
import { getVisibleTodos } from './Redux/visabilityFilter';
import { addTodo, toggleTodo, filterTodo } from './Redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const store = createStore(todoApp);

let nextId = 0;

interface IProps {
  todos: IState[];
  visabilityFilter: string;
  addTodo: (text: string, id: number) => void;
  toggleTodo: (id: number) => void;
  filterTodo: (filter: string) => void;
}

class TodoApp extends React.Component <IProps> {

  render() {
    const { todos, visabilityFilter, addTodo, toggleTodo, filterTodo } = this.props;
    const visibleTodos = getVisibleTodos(todos, visabilityFilter);
    return(
      <div>
        <AddTodo onAddClick={ text => {
          addTodo(text, nextId)
          nextId++;
        }
        } />
        
        <TodoList 
          todos={visibleTodos} 
          onTodoClick={id => 
            toggleTodo(id)
          } />

        <Footer visabilityFilter={visabilityFilter} onFilterClick={ filter => 
          filterTodo(filter)
        } />
      </div>
    )
  }
}

interface IPropsToProps {
  todos: IState[];
  visabilityFilter: string;
}

const mapStateToProps = (state: IPropsToProps) => ({
  todos: state.todos,
  visabilityFilter: state.visabilityFilter
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  addTodo,
  toggleTodo,
  filterTodo
}, dispatch)

const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoApp);

export { store, Todo };
