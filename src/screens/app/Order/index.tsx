import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigation/AuthStack';
import {CommonStyles} from '@commons';
import {styles} from './style';

type Props = NativeStackScreenProps<AuthStackParamList, 'Order'>;

const OrderScreen: React.FC<Props> = () => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.body}>
        <Text style={CommonStyles.font14_b}>Order</Text>
      </View>
    </View>
  );
};

export {OrderScreen};
