import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TwoComponent = ({ count, onClickHandler }) => {
  return (
    <View>
      <Text>Two Component Count : {count}</Text>
      <Button title="Increase Count " onPress={onClickHandler} />
    </View>
  )
}

export default TwoComponent

const styles = StyleSheet.create({})