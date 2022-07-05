import React from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigation/AuthStack';
import {CommonStyles} from '@commons';

type Props = NativeStackScreenProps<AuthStackParamList, 'CatalogDetail'>;

const CatalogDetailScreen: React.FC<Props> = () => {
  return (
    <View style={CommonStyles.container}>
      <Text style={CommonStyles.font14_b}>Catalog Detail</Text>
    </View>
  );
};

export {CatalogDetailScreen};
