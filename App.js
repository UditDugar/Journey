import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootNav } from './src/RootNav/RootNav'
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
   <PaperProvider>
      <RootNav/>

   </PaperProvider>
   
  )
}

export default App

const styles = StyleSheet.create({})
