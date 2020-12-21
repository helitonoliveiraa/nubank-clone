import React, {useCallback} from 'react';
import {Text, View, Animated} from 'react-native';
import {
  PanGestureHandlerStateChangeEvent,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {styles} from './styles';

const Main: React.FC = () => {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = useCallback(
    (event: PanGestureHandlerStateChangeEvent) => {
      if (event.nativeEvent.oldState === State.ACTIVE) {
        let opened = false;
        const {translationY} = event.nativeEvent;

        offset += translationY;

        if (translationY >= 100) {
          opened = true;
        } else {
          translateY.setValue(offset);
          translateY.setOffset(0);
          offset = 0;
        }

        Animated.timing(translateY, {
          toValue: opened ? 380 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = opened ? 380 : 0;
          translateY.setOffset(offset);
          translateY.setValue(0);
        });
      }
    },
    [],
  );

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              borderRadius: 4,
              marginHorizontal: 20,
              height: '100%',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <View style={styles.cardHeader}>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponível</Text>
              <Text style={styles.description}>R$ 200.000,00</Text>
            </View>

            <View style={styles.cardFooter}>
              <Text style={styles.anotation}>
                Transferência de R$ 35,00 recebida de Miller M hoje às 18:00h
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>

      <Tabs translateY={translateY} />
    </View>
  );
};

export default Main;
