// // pages/_app.tsx
// /* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { AppProps } from 'next/app';
// import Head from 'next/head';
// import { SnackbarProvider } from 'notistack';
// import { wrapper } from '../Components/store/reducers/rootReducer';
// import theme from '../styles/theme';
// const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
//   React.useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles?.parentElement?.removeChild(jssStyles);
//     }
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>My App</title>
//         <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         <SnackbarProvider maxSnack={3}>
//           {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//           <CssBaseline />
//           <Component {...pageProps} />
//         </SnackbarProvider>
//       </ThemeProvider>
//     </>
//   );
// };

// export default wrapper.withRedux(MyApp);
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { SnackbarProvider } from 'notistack';
import { wrapper } from '../Components/store/reducers/rootReducer';
//@ts-ignore
function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default wrapper.withRedux(MyApp);
