import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppProvider } from './context/AppContext';
import HomeView from './HomeView';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style={'light'} />
      <HomeView />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    color: '#fff'
  },
  goalContainer: {
    flex: 9
  }
});
