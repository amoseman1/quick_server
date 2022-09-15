import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { StripeTerminalProvider } from '@stripe/stripe-terminal-react-native';
import App from './App';




export default function Root() {

  const fetchTokenProvider = async () => {
    const response = await fetch(`http://localhost:3000/connection_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { secret } = await response.json();
    return secret;
  };

  return (
   <StripeTerminalProvider
    logLevel="verbose"
    tokenProvider={fetchTokenProvider} >
     <App />
   </StripeTerminalProvider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
