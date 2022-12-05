import '../styles/globals.css'
import Layout from '../components/layout'
import Nav from '../components/Nav'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
