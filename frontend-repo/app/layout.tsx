
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { Provider } from 'react-redux';
import store from '../store/store';

const App = ({ Component, pageProps }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default App;
