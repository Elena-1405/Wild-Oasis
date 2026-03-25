import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: var(--color-brand-50);
  height: 100vh;
  margin: 0;
  padding: 0;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Hello!')}>Hello</Button>
        <Input placeholder='Number of guests' />
      </StyledApp>
    </>
  );
}

export default App;
