import { Provider } from 'react-redux';
import store from './redux/store';
import Navigation from './components/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootSiblingParent } from 'react-native-root-siblings';

  

export default function App() {
  

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootSiblingParent>
          <Navigation/>
        </RootSiblingParent>
      </SafeAreaProvider>
    </Provider>
  );
}

