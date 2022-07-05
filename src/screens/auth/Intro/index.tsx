import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '@navigation/AuthStack';
import {CommonStyles, images} from '@commons';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<AuthStackParamList, 'Intro'>;

const IntoScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('AppScreen');
  };

  const handleCreateAccount = () => {};

  return (
    <View style={CommonStyles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={images.img_intro_bkg}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image source={images.img_logo} style={styles.logo} />
            <Text style={styles.title}>Store App</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnSignIn}
              activeOpacity={0.73}
              onPress={handleSignIn}>
              <Text style={styles.signIn}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnRegister}
              activeOpacity={0.73}
              onPress={handleCreateAccount}>
              <Text style={styles.createAccount}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export {IntoScreen};
