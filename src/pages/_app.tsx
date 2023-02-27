import Banner from '@/components/commons/layout/Banner';
import '@/styles/globals.css';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const uploadLink: any = createUploadLink({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Banner />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
