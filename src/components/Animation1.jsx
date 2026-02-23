import { Pressable, Text, View } from 'react-native';
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated';

export default function Animation1() {
  const scale = useSharedValue(1.0);
  const radius = useSharedValue(5);
  
  const start = () => {
    scale.value = 1;
    scale.value = withTiming(500, {
      duration: 2000,
      easing: Easing.inOut(Easing.quad)
    });
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 5,
          height: 5,
          borderRadius: 10,
          transform: [{scale}],
          backgroundColor: 'violet',
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
      />
      <Pressable onPress={start} style={{borderRadius: 10, padding: 10, marginTop: 20, backgroundColor: '#ff47b8'}}>
        <Text>Restart</Text>
      </Pressable>
    </View>
  );
}