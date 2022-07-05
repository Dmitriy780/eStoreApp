import React from 'react';
import 'react-native-gesture-handler';
import {View, Image} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {
  CatalogScreen,
  ProductScreen,
  OrderScreen,
  SettingScreen,
} from '@screens/app';
import {images, colors} from '@commons';
import {isIphoneX} from '@utils';
import {styles} from './style';

export type BottomTabStackParamList = {
  Catalog: undefined;
  Product: undefined;
  Order: undefined;
  Setting: undefined;
};

type TabBarIconParams = {focused: boolean; color: string; size: number};

const BottomTabStack = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTab = () => {
  return (
    <BottomTabStack.Navigator
      tabBar={(props: any) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
          {isIphoneX() && <View style={[styles.xFillLine]} />}
        </View>
      )}
      initialRouteName="Catalog"
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        // tabBarInactiveTintColor: '#0D151C60',
        tabBarStyle: styles.navigator,
        tabBarShowLabel: true,
        // tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIconStyle: styles.tabBarIconStyle,
      })}>
      <BottomTabStack.Screen
        name="Catalog"
        component={CatalogScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_category_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_category_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Catalog',
        }}
      />
      <BottomTabStack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_paper_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_paper_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Product',
        }}
      />
      <BottomTabStack.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_bag_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_bag_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Order',
        }}
      />
      <BottomTabStack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused, color}: TabBarIconParams) =>
            focused ? (
              <View>
                <View style={styles.circle} />
                <Image
                  source={images.ic_setting_f}
                  style={[styles.icon, {tintColor: color}]}
                />
              </View>
            ) : (
              <Image
                source={images.ic_setting_n}
                style={[styles.icon, {tintColor: color}]}
              />
            ),
          tabBarLabel: 'Setting',
        }}
      />
    </BottomTabStack.Navigator>
  );
};

export default BottomTab;
