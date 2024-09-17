import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WithoutState = () => {

    let count: number = 0
    return (
        <View>
            <Text>Count : {count}</Text>
            <Button onPress={() => count++} title='Increament' />
        </View>
    )
}

export default WithoutState

const styles = StyleSheet.create({})