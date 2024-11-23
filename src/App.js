import AppRouter from './router/AppRouter';
import './styles/App.css';
import theme from './components/globalStyles/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
