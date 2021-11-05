import '../styles/index.css';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

function MyApp({ Component, pageProps}) {

  const client = new ApolloClient({
    uri: "https://dev.peddlesoft.com/graphql",
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
        fields: {}
        }
      }
    })
  });

    return (
      <ApolloProvider client={client}>
          <div>
            <Component {...pageProps}/>
          </div>
      </ApolloProvider>
      )
}

export default MyApp;