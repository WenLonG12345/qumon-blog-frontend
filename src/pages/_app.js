import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import MainLayout from "../components/MainLayout";
import store from '../store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Provider>
  );
};

export default MyApp;