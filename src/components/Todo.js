import React, { useState } from 'react';
import styled from 'styled-components';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) return;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter(todo => todo.id !== id)
    setTodos(filtered)
  }

  const today = new Date().toLocaleDateString();

  return (
      <ToDo>
        <Container>
          <InnerContainer>
        <Today>{today}</Today>
        <Title>Today's Plan</Title>
        <TodoForm submit={addTodo}/>
        {todos.map((todo) => 
           {return <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}  />
        })}
        </InnerContainer>
        </Container>
      </ToDo>
  )
}

export default Todo;


const ToDo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 500px;
  padding: 10px;
  border-radius: 10px;
  color: white;
  background-color: #03045e;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const InnerContainer = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  overflow-y: auto;
`;

const Today = styled.div`
  padding-bottom: 5px;
  margin-bottom: 10px;
  color: white;
  border-bottom: 1px solid #caf0f8;
`;

const Title = styled.h1`
  padding: 10px 0;
`;

