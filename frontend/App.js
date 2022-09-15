import { StyleSheet, Text, View } from 'react-native';

export default function App() {

    const { initialize } = useStripeTerminal();

    useEffect(() => {
      initialize({
        logLevel: 'verbose',
      });
    }, [initialize]);

    return(
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <View/>
    )
};