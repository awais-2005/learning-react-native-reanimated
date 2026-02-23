import { Button, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from "react-native-reanimated";

export default function Animation2() {
  const offset = useSharedValue(0);

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const OFFSET = 40;

  const handlePress = () => {
    offset.value = withSequence(withTiming(50), withTiming(25), withTiming(75));
  };

  return (
    <View style={{flex: 1, gap: 50, paddingVertical: 10, alignItems: 'center'}}>
      <Animated.View style={[{width: 50, height: 50, backgroundColor: 'violet'}, style]} />
      <Button title="shake" onPress={handlePress} />
    </View>
  );
}