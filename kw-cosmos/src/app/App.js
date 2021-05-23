import { theme } from '../assets/theme';
import { Wrapper } from './App.styles';
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from '../assets/GlobalStyle';
import { MainView } from '../views/MainView/MainView';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Wrapper>
        <MainView></MainView>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
