import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigation/AuthStack';
import {CommonStyles} from '@commons';
import {styles} from './style';

type Props = NativeStackScreenProps<AuthStackParamList, 'Setting'>;

const SettingScreen: React.FC<Props> = () => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.body}>
        <Text style={CommonStyles.font14_b}>Setting</Text>
      </View>
    </View>
  );
};

export {SettingScreen};
