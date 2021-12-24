import { createGlobalStyle } from 'styled-components';
import Todo from './components/Todo';


const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  body {
    background: #caf0f8;
  }

  input:focus {
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Todo />
    </>
  );
}

export default App;
