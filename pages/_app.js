import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../utils/globalStyle';
import theme from '../utils/theme';
import { AuthProvider } from '../context/useAuth';
import TeamProvider from '../components/TeamCreationComponent/store/team-provider';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TeamProvider>
          <Component {...pageProps} />
        </TeamProvider>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
