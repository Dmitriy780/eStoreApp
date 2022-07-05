import React from 'react';
import 'react-native-gesture-handler';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab, {BottomTabStackParamList} from './BottomTabStack';
import {CatalogDetailScreen, ProductDetailScreen} from '@screens/app';

export type AppStackParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabStackParamList>;
  CatalogDetail: undefined;
  ProductDetail: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppScreenStack = () => {
  return (
    <AppStack.Navigator
      initialRouteName="BottomTabStack"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="BottomTabStack" component={BottomTab} />
      <AppStack.Screen name="CatalogDetail" component={CatalogDetailScreen} />
      <AppStack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </AppStack.Navigator>
  );
};

export default AppScreenStack;
