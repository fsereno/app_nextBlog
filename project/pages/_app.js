import Layout from '../components/ui/layout';
import MainNavigation from '../components/ui/main-navigation';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <MainNavigation />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
