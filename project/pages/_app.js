import Container from '../components/ui/container';
import Layout from '../components/ui/layout';
import MainNavigation from '../components/ui/main-navigation';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <MainNavigation />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </>
  )
}

export default MyApp
