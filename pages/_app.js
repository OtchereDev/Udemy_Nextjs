import '../styles/style.css'
import {AuthContextProvider} from '../context/AuthContext'
import {useEffect} from 'react'

import {CartContextProvider} from '../context/CartContext'

import { store } from '../redux/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const script1 = document.createElement('script');
  
    script1.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    script1.type = "module";
  
    document.body.appendChild(script1);

    const script = document.createElement('script');
  
    script.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    script.noModule = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script);
    }
  }, []);

  return  (
      <Provider store={store} >


          <AuthContextProvider>

            <CartContextProvider>

            <Component {...pageProps}  />

            </CartContextProvider>

          </AuthContextProvider>
      </Provider>
      )
  
  
}


export default MyApp
