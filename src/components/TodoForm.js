import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components';

function TodoForm({ submit }) {
const [input, setInput] = useState('')

const handleChange = e => {
  setInput(e.target.value)
}

const handleSubmit = e => {
  e.preventDefault();
  console.log(submit)
  submit({
    id: Math.floor(Math.random() * 10000),
    text: input
  });
  setInput('');
};

const inputRef = useRef();

useEffect(() => {
  inputRef.current.focus();
}, []);

  return (
    <Container>
       <Form onSubmit={handleSubmit}>
          <Input ref={inputRef} onChange={handleChange} value={input} type='text' placeholder='Write to dos :D'/>
          <Button>Add</Button>
        </Form>
    </Container>
  )
}

export default TodoForm

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 250px;
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom: teal 1px solid;
  border-color: #caf0f8;
  color: white;
  background-color: transparent;
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  color: #03045e;
  background-color: #cddafd;
`;