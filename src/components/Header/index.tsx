import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

import {styles} from './styles';

const Header: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Héliton Oliveira</Text>
    </View>

    <Icon name="keyboard-arrow-down" size={20} color="#fff" />
  </View>
);

export default Header;
