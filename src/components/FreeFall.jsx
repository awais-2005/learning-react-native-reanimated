import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import React from 'react'
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const FreeFall = () => {

    const top = useSharedValue(20);

    const position = useAnimatedStyle(() => ({ top: top.value }));
    
    const startAnimation = () => {
        top.value = 20;
        top.value = withTiming(screenHeight - 100, {
            duration: 5000,
            easing: Easing.bounce,
        })
    }

    return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, position]} />
      <Pressable style={styles.btn} onPress={startAnimation} >
        <Text style={styles.btnText} >Restart</Text>
      </Pressable>
      <View style={styles.boundry} />
    </View>
  )
}

export default FreeFall

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    ball: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'violet',
        position: 'absolute',
        left: (screenWidth / 2) - 25,
    },
    btn: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 3,
        position: 'absolute',
        bottom: 30,
        left: 30,
    },
    btnText: {
        color: '#ff4400',
    },
    boundry: {
        height: 30,
        width: screenWidth,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
    }
})