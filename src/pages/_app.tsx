import type { AppProps } from 'next/app'
import './index.css'
import './style.scss'
// import '../components/Form/button.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
