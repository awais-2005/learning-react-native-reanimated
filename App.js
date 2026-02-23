import { View } from 'react-native'
import Animation2 from './src/components/Animation2'
import FreeFall from './src/components/FreeFall'
import RenderAnimation from './src/components/RenderAnimation'
import GestureAnimation from './src/components/GestureAnimation'

const App = () => {
  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <GestureAnimation />
    </View>
  )
}

export default App
