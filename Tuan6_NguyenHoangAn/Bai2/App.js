import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing } from 'react-native';
import * as Animatable from 'react-native-animatable';

const AdAnimation = () => {
  // Tạo Animated Value cho hiệu ứng phóng to và đổi màu
  const scaleValue = new Animated.Value(1);
  const colorValue = new Animated.Value(0);

  useEffect(() => {
    // Tạo hiệu ứng phóng to và đổi màu lặp lại
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(colorValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(colorValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* Shipper chạy qua chạy lại */}
      <Animatable.Image
        animation="slideInLeft"
        iterationCount="infinite"
        duration={2000}
        source={require('./assets/shipper.png')}
        style={styles.shipper}
      />
      
      {/* Dòng Text đổi màu và phóng to */}
      <Animated.Text
        style={[styles.text, {
          transform: [{ scale: scaleValue }],
          color: colorValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['#000', '#ff5722'],
          }),
        }]}
      >
        Shopee cái gì cũng có...
      </Animated.Text>
      
      {/* Hình ảnh tô mì tôm, ly coca, và gói bánh từ nhỏ đến to */}
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={2000}
        source={require('./assets/noodle.png')}
        style={styles.food}
      />
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={2000}
        source={require('./assets/coca.png')}
        style={styles.food}
      />
      <Animatable.Image
        animation="pulse"
        iterationCount="infinite"
        duration={2000}
        source={require('./assets/cake.png')}
        style={styles.food}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shipper: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  food: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

export default AdAnimation;
