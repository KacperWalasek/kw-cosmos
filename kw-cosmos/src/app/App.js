import { theme } from '../assets/theme';
import { Wrapper } from './App.styles';
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from '../assets/GlobalStyle';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Wrapper>
        app
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
