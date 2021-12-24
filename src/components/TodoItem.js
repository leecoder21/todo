import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';

const TodoItem = ({ todo, deleteTodo }) => {
  const [done, setDone] = useState(false)
  const { id, text } = todo;

  const checked = e => setDone(!done)

  return (
  <Item id={id}>
    <Text done={done}>
    <Check onClick={checked} done={done}></Check>{text}</Text>
    <Button onClick={() => deleteTodo(id)}><MdCancel /></Button>
  </Item>
  )
}

export default TodoItem;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #023e8a;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  color: ${({ done }) => (done ? '#939393' : 'white')};
`;

const Check = styled.div`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #cddafd;
  background-color: ${({ done }) => (done ? '#cddafd' : '')};
`;

const Button = styled.button`
  display: flex;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 15px;
`;