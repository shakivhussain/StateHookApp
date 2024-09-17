import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OneComponent = ({ count, onClickHandler }) => {
    return (
        <View>
            <Text>One Component Count : {count}</Text>

            <Button title="Increase Count " onPress={onClickHandler} />
        </View>
    )
}

export default OneComponent

const styles = StyleSheet.create({})