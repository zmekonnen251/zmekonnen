import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem attribute='class'>
			<Script
				strategy='lazyOnload'
				src={'https://www.googletagmanager.com/gtag/js?id=G-K5ZZ3PNWXC'}
			/>
			<Script strategy='lazyOnload' id=''>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K5ZZ3PNWXC', {
                      page_path: window.location.pathname,
                  });
      `}
			</Script>

			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>

			<Component {...pageProps} />
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</ThemeProvider>
	);
}
