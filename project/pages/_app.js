import { Provider } from 'next-auth/client';
import Container from '../components/ui/container';
import Layout from '../components/ui/layout';
import MainNavigation from '../components/ui/main-navigation';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <MainNavigation />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </Provider>
  )
}

export default MyApp
