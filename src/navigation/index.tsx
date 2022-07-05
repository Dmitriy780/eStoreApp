import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View, useColorScheme} from 'react-native';
import AuthScreenStack, {AuthStackParamList} from './AuthStack';
import AppScreenStack, {AppStackParamList} from './AppStack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CommonStyles} from '@commons';

export type RootStackParamList = {
  AuthScreen: NativeStackScreenProps<AuthStackParamList>;
  AppScreen: NativeStackScreenProps<AppStackParamList>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isDarkMode = useColorScheme() === 'dark';
  console.log('isDarkMode: ', isDarkMode);
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={CommonStyles.container}>
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={'AuthScreen'}
            screenOptions={{
              headerShown: false,
            }}>
            <RootStack.Screen name="AuthScreen" component={AuthScreenStack} />
            <RootStack.Screen name="AppScreen" component={AppScreenStack} />
          </RootStack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export {AppNavigation};
