import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const RenderAnimation = () => {

    const translateY = useSharedValue(0);

    useEffect(() => {
        translateY.value = 35
        translateY.value = withTiming(0, {
            duration: 500,
            easing: Easing.ease
        })
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({ transform: [{ translateY: translateY.value }]}));

    return (
        <View style={styles.containter}>
            <Animated.View style={[styles.comp, animatedStyle]} />
        </View>
    )
}

export default RenderAnimation

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#e7c2e4',
        alignItems: 'center',
    },
    comp: {
        width: '90%',
        height: 200,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#e78ade',
    },
})