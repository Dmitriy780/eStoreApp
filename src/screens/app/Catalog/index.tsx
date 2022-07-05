import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigation/AuthStack';
import {CommonStyles} from '@commons';
import {styles} from './style';

type Props = NativeStackScreenProps<AuthStackParamList, 'Catalog'>;

const CatalogScreen: React.FC<Props> = () => {
  return (
    <View style={CommonStyles.container}>
      <View style={styles.body}>
        <Text style={CommonStyles.font14_b}>Catalog</Text>
      </View>
    </View>
  );
};

export {CatalogScreen};
