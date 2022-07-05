import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  IntoScreen,
  SignInScreen,
  SignUpScreen,
  ForgotPasswordScreen,
} from '@screens/auth';

export type AuthStackParamList = {
  Intro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Intro"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Intro" component={IntoScreen} />
      <AuthStack.Screen name="SignIn" component={SignInScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

export default AuthScreenStack;
