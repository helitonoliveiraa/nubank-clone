import React from 'react';
import {View, ScrollView, Text, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {AnimatedProps} from '../Menu';

import {styles} from './styles';

const Tabs: React.FC<AnimatedProps> = ({translateY}) => (
  <Animated.View
    style={{
      height: 100,
      marginTop: 20,
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}>
      <View style={[styles.tabItem, {marginLeft: 0}]}>
        <Icon name="person-add" size={24} color="#fff" />
        <Text style={styles.tabText}>Indicar amigo</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="chat-bubble-outline" size={24} color="#fff" />
        <Text style={styles.tabText}>Cobrar</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="arrow-downward" size={24} color="#fff" />
        <Text style={styles.tabText}>Depositar</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="arrow-upward" size={24} color="#fff" />
        <Text style={styles.tabText}>Transferir</Text>
      </View>

      <View style={styles.tabItem}>
        <Icon name="lock" size={24} color="#fff" />
        <Text style={styles.tabText}>Bloquear cartão</Text>
      </View>
    </ScrollView>
  </Animated.View>
);

export default Tabs;
