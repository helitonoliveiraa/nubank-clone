import React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

export interface AnimatedProps {
  translateY: Animated.AnimatedValue;
}

const Menu: React.FC<AnimatedProps> = ({translateY}) => {
  return (
    <Animated.ScrollView
      style={{
        marginHorizontal: 30,
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <View style={styles.code}>
        <Icon name="qr-code" size={50} color="#fff" />
      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>

        <View style={styles.navItem}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Perfil</Text>
        </View>

        <View style={styles.navItem}>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Configuração do cartão</Text>
        </View>

        <View style={styles.navItem}>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Configuração do app</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton} activeOpacity={0.5}>
        <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
};

export default Menu;
