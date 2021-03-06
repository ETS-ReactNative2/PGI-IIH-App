import React, { useState } from 'react'
import 'react-native-gesture-handler'
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import AppNavigator from './navigation/Navigator'
import UserReducer from './store/reducers/user';

enableScreens();

const rootReducer = combineReducers({
  user: UserReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} onError={(error) => console.warn(error)} />
  }

  return (
    <Provider store={store}><AppNavigator /></Provider>
  );
}


