import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { commonStyles } from './src/utils/commonStyles'
import { COLORS } from './src/utils/theme'
import Route from './src/routes'

const App = () => {
  return (
    <View style={commonStyles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Route />
    </View>
  )
}

export default App