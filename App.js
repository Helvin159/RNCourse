import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {



  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.heading}>Yerr!!!!</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Click here" onPress={() => alert('Wake the FUCK UP!!!')}  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    alignContent: 'space-between',
    marginBottom: 32
  },
  heading: {
    fontSize: 24,
    fontWeight: 600,
  },
  header: {
    padding: 16,
    marginTop: 48,
    alignItems: 'center'
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 8,
    paddingRight: 8
  }
});
